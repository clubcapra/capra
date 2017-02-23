cmake_minimum_required(VERSION 2.8.3)
project(roboteq_motor)

find_package(catkin REQUIRED COMPONENTS
  roscpp
  serial
)

catkin_package(
   INCLUDE_DIRS include
#  LIBRARIES roboteq_motor
#  CATKIN_DEPENDS roscpp rosserial
#  DEPENDS system_lib
)

include_directories(
  ${catkin_INCLUDE_DIRS}
)

## Declare a C++ executable
add_executable(roboteq_motor_node src/roboteq_motor_node.cpp)
target_link_libraries(roboteq_motor_node ${catkin_LIBRARIES})
