#!/usr/bin/env python

import rospy
from interactive_markers.interactive_marker_server import *
from interactive_markers.menu_handler import *
from visualization_msgs.msg import *


class MarkerManager():

    def __init__(self):
        self.server = InteractiveMarkerServer("goal_markers")
        self.markers = []

    def process_feedback(self, feedback):
        p = feedback.pose.position
        # print(feedback.marker_name + " is now at " + str(p.x) + ", " + str(p.y) + ", " + str(p.z))

    def get_marker(self, name):
        for marker in self.markers:
            if marker.name == name:
                return marker
        return None

    def update_marker(self, name, x, y):
        marker = self.get_marker(name)
        if marker is None:
            # rospy.loginfo("Marker not found")
            return
        else:
            marker.pose.position.x = x
            marker.pose.position.y = y;
        self.server.applyChanges()

    # name should be goal id
    def create_marker(self, name, frame, callback=None):
        if not callback:
            callback = self.process_feedback

        # create an interactive marker for our server
        int_marker = InteractiveMarker()
        int_marker.header.frame_id = frame
        int_marker.name = name
        int_marker.description = name

        # create a grey box marker
        box_marker = Marker()
        box_marker.type = Marker.CUBE
        box_marker.scale.x = 0.45
        box_marker.scale.y = 0.45
        box_marker.scale.z = 0.45
        box_marker.color.r = 0.0
        box_marker.color.g = 0.5
        box_marker.color.b = 0.5
        box_marker.color.a = 1.0

        # create a non-interactive control which contains the box
        box_control = InteractiveMarkerControl()
        box_control.always_visible = True
        box_control.markers.append( box_marker )

        # add the control to the interactive marker
        int_marker.controls.append( box_control )

        # create a control which will move the box
        # this control does not contain any markers,
        # which will cause RViz to insert two arrows
        control = InteractiveMarkerControl()
        control.orientation.w = 1;
        control.orientation.x = 0;
        control.orientation.y = 1;
        control.orientation.z = 0;
        control.name = "move_x"
        control.interaction_mode = InteractiveMarkerControl.MOVE_PLANE
        int_marker.controls.append(control);

        self.markers.append(int_marker)

        # add the interactive marker to our collection &
        # tell the server to call processFeedback() when feedback arrives for it
        self.server.insert(int_marker, callback)

        # 'commit' changes and send to all clients
        self.server.applyChanges()

        return int_marker