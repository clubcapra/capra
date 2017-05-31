#! /usr/bin/env python

from state_ai import StateAi
import rospy
from math import pi
from std_msgs.msg import Bool

class IGVCAdvancedSouth(StateAi):

    def __init__(self):
         super(IGVCAdvancedSouth, self).__init__("igvc_advanced_south")

    def on_start(self):
        self.generate_circle(2.0, pi/4, 2 * pi - pi/4, pi/270.0, 120)

    def on_goal_changed(self, goal_msg):
        rospy.loginfo("Targeting goal with priority: {}".format(goal_msg.priority))
        if goal_msg.priority == 111:
            self.generate_bar(8, -1.0, -1)
        pass





    def on_last_goal_reached(self, msg):
        rospy.loginfo("WE FINISHED THE ADVANCED COURSE !!! CONGRATS EVERYONE !!!")
        pass

if __name__ == "__main__":
    try:
        a = IGVCAdvancedSouth()
    except rospy.ROSInterruptException:
        pass