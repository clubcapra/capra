#include "ros/ros.h"

#include "serial/serial.h"

int main(int argc, char* argv[])
{
    ros::init(argc, argv, "~");
    ros::NodeHandle nh;
    ros::Rate loopRate(2);

    std::string port = "/dev/ttyUSB0";
    int32_t baudRate = 115200;

    serial::Serial serialObject;
    serial::Timeout to(serial::Timeout::simpleTimeout(500));
    serialObject.setTimeout(to);
    serialObject.setPort(port.c_str());
    serialObject.setBaudrate(baudRate);

    bool isConnected = false;
    const char* param = "^ECHOF 0\r";
    const char* vel_cmd = "!G 300 300\r";

    while(ros::ok())
    {
        if(!isConnected)
        {
            try
            {
                serialObject.open();
                if(!serialObject.isOpen())
                {
                    ROS_ERROR("Bad connection with port %s", port.c_str());
                }
                else
                {
                    ROS_INFO("Successfully connected to %s", port.c_str());
                    isConnected = true;
                }
            }
            catch(serial::IOException e)
            {
                ROS_ERROR("Error connecting to port %s:\n%s", port.c_str(), e.what());
            }
        }
        else
        {
            try
            {
                ssize_t bytesWritten = 0, expectedBytes;

                bytesWritten = serialObject.write(vel_cmd);
                expectedBytes = strlen(vel_cmd);

                if(bytesWritten < expectedBytes)
                {
                    ROS_ERROR("Error writing to port %s:\n%lu bytes written, expected %lu", port.c_str(), bytesWritten, expectedBytes);
                }
                else
                {
                    ROS_INFO("Serial write successful:");
                }
            }
            catch(std::exception e)
            {
                ROS_ERROR("Error writing to port %s:\n%s", port.c_str(), e.what());
            }
        }

        ros::spinOnce();
        loopRate.sleep();
    }

    return 0;
}
