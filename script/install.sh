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
sudo apt-get install ros-kinetic-navigation ros-kinetic-image_pipeline ros-kinetic-octomap ros-kinetic-joy libopenni2-dev tcl-vtk libtf-dev -y

# ROS Install
wstool init vendor/src ~/capra/rosinstall/capra.rosinstall
wstool update -t vendor/src

# Source .bash
echo "source /opt/ros/kinetic/setup.bash" >> ~/.bashrc
echo "source ~/capra/devel/setup.bash" >> ~/.bashrc
echo "source ~/capra/vendor/devel/setup.bash" >> ~/.bashrc

source ~/.bashrc

#git config stuff
echo "Configuring and setting up git and submodules..."
{
	git config --global fetch.recurseSubmodules true
	git config --global alias.st status
	git config --global alias.ci commit
	git config --global alias.co checkout
	git config --global alias.br branch
	git config --global color.ui true
	git config --global color.status auto
	git config --global color.branch auto
	git config --global color.diff true

	git submodule init
	git submodule update --init --recursive
	git submodule foreach git pull origin master
} >> $logFile


# ROSdep install
sudo rosdep init
rosdep update
rosdep install --from-paths src --ignore-src --rosdistro kinetic -y

# Build external source packages
cd ~/capra/vendor/
catkin_make

# Load vendor setup.bash
source ~/.bashrc

# Build our packages
cd ~/capra
catkin_make

echo "Install Done"
