#!/usr/bin/env python

import rospy
import actionlib
from goal_parser import XMLGoalParser

from move_base_msgs.msg import MoveBaseAction


class MoveBaseClient:
    def __init__(self):
        self.sac = actionlib.SimpleActionClient('/move_base', MoveBaseAction)
        file_path = rospy.get_param("~file")
        print file_path
        # Using XML parser for now
        parser = XMLGoalParser()

        self.goals = parser.parse(file_path)
        for goal in self.goals:
            self.send_goal(goal)

    def send_goal(self, goal):
        print "Waiting for server"
        self.sac.wait_for_server()

        print "Sending goal"
        self.sac.send_goal(goal)

        print "Waiting for result"
        self.sac.wait_for_result()

        print self.sac.get_result()

if __name__ == "__main__":
    try:
        rospy.init_node("move_base_client")
        client = MoveBaseClient()
    except rospy.ROSInterruptException:
        pass
