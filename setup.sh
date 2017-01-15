#!/bin/bash

if [ "$USER" = "root" ]; then
    echo "Do not run setup.sh as root"
    exit 1
fi

# Automatic install of Ibex for Capra. Please have Urial at ~/Urial for perfect results. Update the PATH script stuff if it's not the case.
allDone=0

abort()
{
	if [ $allDone -eq 0 ]
	then
	    echo "
=============================================
Error install Ibex. Aborting.
Please check $logFile for details
=============================================" >&2
	fi
}

trap 'abort' 0 1 2 3 15

# flag to exit if a command causes an error
set -e

# request user and password
sudo echo ""

# setup logfile
logFile="logsetup.log"

echo "=============================================================
Installing Ibex...
The process may take a while. If you're worried something
went wrong, juste check the logs ($logFile)
============================================================="

URIAL_DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
BASHRC=~/.bashrc

#install ROS
echo "Downloading packages..."
{
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
sudo apt-get install ros-kinetic-navigation ros-kinetic-image-pipeline ros-kinetic-octomap ros-kinetic-joy libopenni2-dev tcl-vtk libtf-dev ros-kinetic-serial python-roslaunch -y ros-kinetic-lms1xx ros-kinetic-serial

# ROS Install
rm -f $URIAL_DIR/vendor/src/.rosinstall
wstool init $URIAL_DIR/vendor/src $URIAL_DIR/rosinstall/capra.rosinstall
wstool update -t $URIAL_DIR/vendor/src
} >> $logFile

#PATH and .bashrc stuff
echo "Setting up ROS PATH and environment"
{
    if grep -q "$URIAL_DIR/env.sh" "$HOME/.bashrc"; then
        echo "env.sh already sourced in .bashrc"
    else
        echo "Sourcing env.sh in .bashrc"
        echo "source $URIAL_DIR/env.sh" >> $HOME/.bashrc
    fi

    . /opt/ros/kinetic/setup.bash
    source /opt/ros/kinetic/setup.bash
    #sudo cp $IBEX_DIR/install/49-capra.rules /etc/udev/rules.d/
    sudo addgroup $USER dialout

    # ROSdep install

    if [ -f "/etc/ros/rosdep/sources.list.d/20-default.list" ]
    then
	echo "Rosdep seems to be already there. Skipping.. "
    else
	sudo rosdep init
	rosdep update
	rosdep install --from-paths src --ignore-src --rosdistro kinetic -y
    fi
} >> $logFile


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
} >> $logFile

#build workspace

# Load vendor setup.bash
source $BASHRC

echo "Building workspace... This can take a while"

# Build external source packages
cd $URIAL_DIR/vendor/
catkin_make >> $logFile

# Build our packages
cd $URIAL_DIR
catkin_make >> $logFile

#source workspace
source $URIAL_DIR/devel/setup.bash
cwd="$PWD"

echo "
=========================================================
Ibex installation successful. Grab a beer and a pizza!
========================================================="

allDone=1

exit
