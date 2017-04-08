from motor import Motor
from config import Config

class MotorConductor:
    FRONT = "front"
    LEFT = "left"
    RIGHT = "right"

    def __init__(self):
        self.motor_front_left = Motor(MotorConductor.FRONT, MotorConductor.LEFT)
        self.motor_front_right = Motor(MotorConductor.FRONT, MotorConductor.RIGHT)

        for ndx, motor in enumerate(self.get_motors()):
            motor.gear_ratio = Config.get_gear_ratio()
            motor.wheel_diameter = Config.get_wheel_diameter()
            motor.position_ratio = Config.get_position_ratio()[ndx]
            motor.speed_ratio = Config.get_speed_ratio()[ndx]

    def get_motors(self):
        return [self.motor_front_left, self.motor_front_right]

    def set_velocity(self, linear_velocity, angular_velocity):
        width = Config.get_robot_width()

        # Calculate front motors velocity
        # Apply linear speed
        # On the left: substract arc velocity (rad * radius = arc)
        # On the right: add arc velocity (rad * radius = arc)
        # Considering radians increase counterclockwise and robot front is pointing toward x+
        # right wheel needs to travel more distance (and thus go faster) when the robot turns counterclockwise
        front_left_speed = linear_velocity - angular_velocity * width / 2.0
        front_right_speed = linear_velocity + angular_velocity * width / 2.0

        self.motor_front_left.set_velocity(front_left_speed)
        self.motor_front_right.set_velocity(front_right_speed)

    def measured_position(self):
        pass


    #Set the mode of the command
    #int8 MODE_STOPPED=-1
    #int8 MODE_VELOCITY=0 (DEFAULT)
    #int8 MODE_POSITION=1
    def set_motors_mode(self, mode):
        for motor in self.get_motors():
            motor.set_mode(mode)
