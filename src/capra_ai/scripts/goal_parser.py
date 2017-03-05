#!/usr/bin/env python

from abc import ABCMeta, abstractmethod
from xml.etree import ElementTree
from move_base_msgs.msg import MoveBaseGoal
import rospy


# Abstract class for goal parsers to allow handling of other file formats
class GoalParser:
    __metaclass__ = ABCMeta

    def __init__(self):
        pass

    @abstractmethod
    def parse(self, file_path):
        pass


class XMLGoalParser(GoalParser):
    def parse(self, file_path):
        tree = ElementTree.parse(file_path)
        root = tree.getroot()
        goals = []
        for point in root.iter('goals'):
            goal = MoveBaseGoal()
            goal.target_pose.pose.position.x = point.get("x")
            goal.target_pose.pose.position.y = point.get("y")
            goal.target_pose.pose.orientation = 1
            goal.target_pose.header.stamp = rospy.Time.now()
            goals.append(goal)
        return goals
