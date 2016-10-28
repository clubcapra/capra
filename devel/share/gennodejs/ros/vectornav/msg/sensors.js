// Auto-generated. Do not edit!

// (in-package vectornav.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let std_msgs = _finder('std_msgs');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class sensors {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.gps_time = 0.0;
    this.Mag = new geometry_msgs.msg.Vector3();
    this.Accel = new geometry_msgs.msg.Vector3();
    this.Gyro = new geometry_msgs.msg.Vector3();
    this.Temp = 0.0;
    this.Pressure = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type sensors
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize message field [gps_time]
    bufferInfo = _serializer.float64(obj.gps_time, bufferInfo);
    // Serialize message field [Mag]
    bufferInfo = geometry_msgs.msg.Vector3.serialize(obj.Mag, bufferInfo);
    // Serialize message field [Accel]
    bufferInfo = geometry_msgs.msg.Vector3.serialize(obj.Accel, bufferInfo);
    // Serialize message field [Gyro]
    bufferInfo = geometry_msgs.msg.Vector3.serialize(obj.Gyro, bufferInfo);
    // Serialize message field [Temp]
    bufferInfo = _serializer.float32(obj.Temp, bufferInfo);
    // Serialize message field [Pressure]
    bufferInfo = _serializer.float32(obj.Pressure, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type sensors
    let tmp;
    let len;
    let data = new sensors();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [gps_time]
    tmp = _deserializer.float64(buffer);
    data.gps_time = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [Mag]
    tmp = geometry_msgs.msg.Vector3.deserialize(buffer);
    data.Mag = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [Accel]
    tmp = geometry_msgs.msg.Vector3.deserialize(buffer);
    data.Accel = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [Gyro]
    tmp = geometry_msgs.msg.Vector3.deserialize(buffer);
    data.Gyro = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [Temp]
    tmp = _deserializer.float32(buffer);
    data.Temp = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [Pressure]
    tmp = _deserializer.float32(buffer);
    data.Pressure = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'vectornav/sensors';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '39b3da64afd92d016eb0b8e07688fc15';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    std_msgs/Header       header
    float64		      gps_time
    geometry_msgs/Vector3 Mag 
    geometry_msgs/Vector3 Accel
    geometry_msgs/Vector3 Gyro
    float32               Temp
    float32               Pressure
    
    
    
    ================================================================================
    MSG: std_msgs/Header
    # Standard metadata for higher-level stamped data types.
    # This is generally used to communicate timestamped data 
    # in a particular coordinate frame.
    # 
    # sequence ID: consecutively increasing ID 
    uint32 seq
    #Two-integer timestamp that is expressed as:
    # * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')
    # * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')
    # time-handling sugar is provided by the client library
    time stamp
    #Frame this data is associated with
    # 0: no frame
    # 1: global frame
    string frame_id
    
    ================================================================================
    MSG: geometry_msgs/Vector3
    # This represents a vector in free space. 
    # It is only meant to represent a direction. Therefore, it does not
    # make sense to apply a translation to it (e.g., when applying a 
    # generic rigid transformation to a Vector3, tf2 will only apply the
    # rotation). If you want your data to be translatable too, use the
    # geometry_msgs/Point message instead.
    
    float64 x
    float64 y
    float64 z
    `;
  }

};

module.exports = sensors;
