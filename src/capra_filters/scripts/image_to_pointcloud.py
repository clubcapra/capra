#! /usr/bin/env python

import rospy
from sensor_msgs.msg import Image, PointCloud2
import sensor_msgs.point_cloud2 as pc2
import tf
from cv_bridge import CvBridge
import numpy as np
import cv2 as cv
from math import *

bridge = CvBridge()

# size of the output cloud. For example, total width in meters is (w/k)*100
resolution = 0.05 # meters per pixels
w = 200 # total points for width
h = 200 # total points for height

# offset of the pointcloud in meters on the x axis. This number was originally chosen to keep existing
# calibrations valid. If you change it, you have to re-calibrate
offset_x = 0

topic_in = rospy.get_param('~in', "/image_in")

x = np.ravel(np.array([[j*resolution + offset_x + h * resolution * 0.5 for i in xrange(0, w)] for j in xrange(-h/2,h/2)], dtype=np.float))
y = np.ravel(np.array([[i*resolution for i in xrange(-w/2, w/2)] for i in xrange(0,h)], dtype=np.float))
z = np.ravel(np.array([[0 for i in xrange(0, w)] for i in xrange(0,h)], dtype=np.float))
points_xyz = np.column_stack((x,y,z))

clear_space = rospy.get_param('~clear_space', False)

def handle_image(req):

    start = rospy.get_time()

    # Set up point cloud
    fields = [pc2.PointField() for _ in range(3)]

    fields[0].name = "x"
    fields[0].offset = 0
    fields[0].datatype = pc2.PointField.FLOAT32
    fields[0].count = 1

    fields[1].name = "y"
    fields[1].offset = 4
    fields[1].datatype = pc2.PointField.FLOAT32
    fields[1].count = 1

    fields[2].name = "z"
    fields[2].offset = 8
    fields[2].datatype = pc2.PointField.FLOAT32
    fields[2].count = 1

    field_id = 3
    fields.append(pc2.PointField())
    fields[field_id].name = "intensity"
    fields[field_id].datatype = pc2.PointField.FLOAT32
    fields[field_id].offset = 12
    fields[field_id].count = 1
    idx_intensity = field_id

    # add image
    img = bridge.imgmsg_to_cv2(req, desired_encoding="passthrough")
    img = cv.cvtColor(img, cv.COLOR_BGR2GRAY)
    img = cv.resize(img, (w, h))

    points = np.column_stack((points_xyz, np.flipud(np.ravel(img))))
    points = points[np.logical_not(points[:,3] == 0)]

    header = req.header
    header.frame_id = "base_footprint"

    if clear_space:
        xs = [p for p in points]
        n = 720
        t = pi / n

        for i in range(200, n - 200):
            xs.append([sin(i * t) * 10, cos(i * t) * 10, 0, 255])

        points = xs

    global cloud_out
    cloud_out = pc2.create_cloud(header, fields, points)


class ImageToPointcloud:

    def __init__(self):

        rospy.init_node('image_to_pointcloud', log_level=rospy.DEBUG)

        topic_in = rospy.get_param('~in', "/image_in")
        topic_out = rospy.get_param('~out', "/cloud")

        rospy.Subscriber(topic_in, Image, handle_image)
        pub = rospy.Publisher(topic_out, PointCloud2, queue_size=2)

        real_w = (resolution * w) / 100.0
        real_h = (resolution * h) / 100.0
        rospy.loginfo("Publishing cloud, size: " + str(real_w) + " x " + str(real_h))

        rate = rospy.Rate(10)

        while not rospy.is_shutdown():
            if "cloud_out" in globals():
                global cloud_out
                pub.publish(cloud_out)

            rate.sleep()

        rospy.spin()


if __name__ == "__main__":
    try:
        s = ImageToPointcloud()
    except rospy.ROSInterruptException:
        pass
