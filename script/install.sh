#!/bin/sh

# Adding source and key
sudo sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main" > /etc/apt/sources.list.d/ros-latest.list'
sudo apt-key adv --keyserver hkp://ha.pool.sks-keyservers.net:80 --recv-key 0xB01FA116

# To get the latest package lists
sudo apt-get update -y
sudo apt-get upgrade -y

# ROS installation
sudo apt-get install -y ros-kinetic-desktop-full -y

# Install tools
sudo apt-get install git python-pip python-wstool -y

# Put package after
sudo apt-get install ros-kinetic-navigation ros-kinetic-image_pipeline ros-kinetic-octomap libtf-dev -y


# ROS Install
wstool init src ~/capra/rosinstall/capra.rosinstall
wstool update -t src

# Source .bash
echo "source /opt/ros/kinetic/setup.bash" >> ~/.bashrc
echo "source ~/capra/devel/setup.bash" >> ~/.bashrc
source ~/.bashrc

# ROSdep install
sudo rosdep init
rosdep update
rosdep install --from-paths src --ignore-src --rosdistro kinetic -y

catkin_make

echo "Install Done"
