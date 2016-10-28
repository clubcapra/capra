// Auto-generated. Do not edit!

// (in-package vectornav.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let utc_time = require('./utc_time.js');
let std_msgs = _finder('std_msgs');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class gps {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.Time = 0.0;
    this.UtcTime = new utc_time();
    this.Week = 0;
    this.GpsFix = 0;
    this.NumSats = 0;
    this.LLA = new geometry_msgs.msg.Vector3();
    this.NedVel = new geometry_msgs.msg.Vector3();
    this.NedAcc = new geometry_msgs.msg.Vector3();
    this.SpeedAcc = 0.0;
    this.TimeAcc = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type gps
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize message field [Time]
    bufferInfo = _serializer.float64(obj.Time, bufferInfo);
    // Serialize message field [UtcTime]
    bufferInfo = utc_time.serialize(obj.UtcTime, bufferInfo);
    // Serialize message field [Week]
    bufferInfo = _serializer.uint16(obj.Week, bufferInfo);
    // Serialize message field [GpsFix]
    bufferInfo = _serializer.uint8(obj.GpsFix, bufferInfo);
    // Serialize message field [NumSats]
    bufferInfo = _serializer.uint8(obj.NumSats, bufferInfo);
    // Serialize message field [LLA]
    bufferInfo = geometry_msgs.msg.Vector3.serialize(obj.LLA, bufferInfo);
    // Serialize message field [NedVel]
    bufferInfo = geometry_msgs.msg.Vector3.serialize(obj.NedVel, bufferInfo);
    // Serialize message field [NedAcc]
    bufferInfo = geometry_msgs.msg.Vector3.serialize(obj.NedAcc, bufferInfo);
    // Serialize message field [SpeedAcc]
    bufferInfo = _serializer.float32(obj.SpeedAcc, bufferInfo);
    // Serialize message field [TimeAcc]
    bufferInfo = _serializer.float32(obj.TimeAcc, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type gps
    let tmp;
    let len;
    let data = new gps();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [Time]
    tmp = _deserializer.float64(buffer);
    data.Time = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [UtcTime]
    tmp = utc_time.deserialize(buffer);
    data.UtcTime = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [Week]
    tmp = _deserializer.uint16(buffer);
    data.Week = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [GpsFix]
    tmp = _deserializer.uint8(buffer);
    data.GpsFix = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [NumSats]
    tmp = _deserializer.uint8(buffer);
    data.NumSats = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [LLA]
    tmp = geometry_msgs.msg.Vector3.deserialize(buffer);
    data.LLA = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [NedVel]
    tmp = geometry_msgs.msg.Vector3.deserialize(buffer);
    data.NedVel = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [NedAcc]
    tmp = geometry_msgs.msg.Vector3.deserialize(buffer);
    data.NedAcc = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [SpeedAcc]
    tmp = _deserializer.float32(buffer);
    data.SpeedAcc = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [TimeAcc]
    tmp = _deserializer.float32(buffer);
    data.TimeAcc = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'vectornav/gps';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'e00674819c464d1fc718e59b64d93387';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    std_msgs/Header       header
    float64               Time
    utc_time	          UtcTime
    uint16                Week
    uint8                 GpsFix
    uint8                 NumSats
    geometry_msgs/Vector3 LLA
    geometry_msgs/Vector3 NedVel
    geometry_msgs/Vector3 NedAcc
    float32               SpeedAcc
    float32               TimeAcc
    
    
    uint8 GPSFIX_NO_FIX=0
    uint8 GPSFIX_TIME_ONLY=1
    uint8 GPSFIX_2D_FIX=3
    uint8 GPSFIX_3D_FIX=4
    
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
    MSG: vectornav/utc_time
    uint8 year
    uint8 month
    uint8 day
    uint8 hour
    uint8 minute
    uint8 second
    uint16 millisecond
    
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

// Constants for message
gps.Constants = {
  GPSFIX_NO_FIX: 0,
  GPSFIX_TIME_ONLY: 1,
  GPSFIX_2D_FIX: 3,
  GPSFIX_3D_FIX: 4,
}

module.exports = gps;
