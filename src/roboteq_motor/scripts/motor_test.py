#!/usr/bin/env python

import rospy
from geometry_msgs.msg import Twist

import math

class MotorTest:
    def __init__(self):
        rospy.init_node("roboteq_motor")

        self.cmd_vel = rospy.Publisher("/cmd_vel", Twist, queue_size=10)

        while True:
            lin = float(raw_input("Enter motor speed (m/s) : "))
            while True:
                msg = Twist()
                msg.linear.x = lin
                self.cmd_vel.publish(msg)


if __name__ == "__main__":
    try:
        motor = MotorTest()
    except rospy.ROSInterruptException:
        pass