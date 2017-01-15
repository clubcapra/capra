#!/bin/bash

export URIAL_DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
export URIAL_HOME=$URIAL_DIR

export ROSCONSOLE_FORMAT='[\${severity}] [\${node}] [\${time}]: \${message}'

alias urial='cd $URIAL_HOME'

echo $URIAL_HOME/devel/setup.bash

. /opt/ros/kinetic/setup.bash

. $URIAL_HOME/devel/setup.bash

. $URIAL_HOME/vendor/devel/setup.bash

export ROS_PACKAGE_PATH=$URIAL_HOME/vendor/src:$URIAL_HOME/src:/opt/ros/kinetic/share
