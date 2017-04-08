#!/usr/bin/env python

import roslib
import rospy
from roboteq_msgs.msg import Feedback, Command, Status
from config import Config
from geometry_msgs.msg import Twist
from nav_msgs.msg import Odometry
from motor import Motor
from motor_conductor import MotorConductor

import math

class RoboteqMotor:
    def __init__(self):
        rospy.init_node("roboteq_motor")

        self.requested_vel = Twist()
        self.requested_vel_time = 0

        #Motor conductor create motors at relevant locations
        self.motor_conductor = MotorConductor()

        #Link motors with Cmd and Feedback topics
        for motor in self.motor_conductor.get_motors():
            motor.link(rospy.Publisher("roboteq_driver/{}/cmd".format(motor.get_axial_location()[1]), Command, queue_size=10))
            rospy.Subscriber("/roboteq_driver/{}/feedback".format(motor.get_axial_location()[1]), Feedback, motor._feedback_callback)
            #TODO: Do something with status, considering it's related to the drive and not individual motors

        rospy.Subscriber("/cmd_vel", Twist, self.cmd_vel_callback)
        rospy.Timer(rospy.Duration.from_sec(50.0/1000), self.velocity_timer)
        rospy.Timer(rospy.Duration.from_sec(1.0/Config.get_publish_rate()), self.publish_odom)
        rospy.spin()

    def velocity_timer(self, event):
        print('velocity timer {} --- {}'.format(rospy.get_time() - self.requested_vel_time, Config.get_watchdog_timeout()))
       # if rospy.get_time() - self.requested_vel_time > Config.get_watchdog_timeout(): # Velocity has not be honoured in time
        #    print('too late')
         #   self.last_vel = Twist()
          #  self.motor_conductor.set_velocity(0, 0)  # Can't trust last requested velocity anymore. Stop motors and cry
        #else:
        self.motor_conductor.set_velocity(self.requested_vel.linear.x, self.requested_vel.angular.z)


    def cmd_vel_callback(self,msg):
        print(msg)
        self.requested_vel = msg
        self.requested_vel_time = rospy.get_time()

    def publish_odom(self,event):
        #TODO: seems obvious to me
        #throw new NotImplementedException(); #C#
        pass



if __name__ == "__main__":
    try:
        motor = RoboteqMotor()
    except rospy.ROSInterruptException:
        pass

