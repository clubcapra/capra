#!/bin/bash

export URIAL_DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
export URIAL_HOME=$URIAL_DIR

export ROSCONSOLE_FORMAT='[\${severity}] [\${node}] [\${time}]: \${message}'

export GAZEBO_MODEL_PATH=$URIAL_DIR/src/capra_gazebo/models

alias urial='cd $URIAL_HOME'

source /opt/ros/kinetic/setup.bash

source $URIAL_HOME/devel/setup.bash

source $URIAL_HOME/vendor/devel/setup.bash --extend

