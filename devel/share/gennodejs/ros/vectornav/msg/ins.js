// Auto-generated. Do not edit!

// (in-package vectornav.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let std_msgs = _finder('std_msgs');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class ins {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.Time = 0.0;
    this.Week = 0;
    this.Status = 0;
    this.RPY = new geometry_msgs.msg.Vector3();
    this.LLA = new geometry_msgs.msg.Vector3();
    this.NedVel = new geometry_msgs.msg.Vector3();
    this.YawUncertainty = 0.0;
    this.PitchUncertainty = 0.0;
    this.RollUncertainty = 0.0;
    this.PosUncertainty = 0.0;
    this.VelUncertainty = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ins
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize message field [Time]
    bufferInfo = _serializer.float64(obj.Time, bufferInfo);
    // Serialize message field [Week]
    bufferInfo = _serializer.uint16(obj.Week, bufferInfo);
    // Serialize message field [Status]
    bufferInfo = _serializer.uint16(obj.Status, bufferInfo);
    // Serialize message field [RPY]
    bufferInfo = geometry_msgs.msg.Vector3.serialize(obj.RPY, bufferInfo);
    // Serialize message field [LLA]
    bufferInfo = geometry_msgs.msg.Vector3.serialize(obj.LLA, bufferInfo);
    // Serialize message field [NedVel]
    bufferInfo = geometry_msgs.msg.Vector3.serialize(obj.NedVel, bufferInfo);
    // Serialize message field [YawUncertainty]
    bufferInfo = _serializer.float32(obj.YawUncertainty, bufferInfo);
    // Serialize message field [PitchUncertainty]
    bufferInfo = _serializer.float32(obj.PitchUncertainty, bufferInfo);
    // Serialize message field [RollUncertainty]
    bufferInfo = _serializer.float32(obj.RollUncertainty, bufferInfo);
    // Serialize message field [PosUncertainty]
    bufferInfo = _serializer.float32(obj.PosUncertainty, bufferInfo);
    // Serialize message field [VelUncertainty]
    bufferInfo = _serializer.float32(obj.VelUncertainty, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ins
    let tmp;
    let len;
    let data = new ins();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [Time]
    tmp = _deserializer.float64(buffer);
    data.Time = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [Week]
    tmp = _deserializer.uint16(buffer);
    data.Week = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [Status]
    tmp = _deserializer.uint16(buffer);
    data.Status = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [RPY]
    tmp = geometry_msgs.msg.Vector3.deserialize(buffer);
    data.RPY = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [LLA]
    tmp = geometry_msgs.msg.Vector3.deserialize(buffer);
    data.LLA = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [NedVel]
    tmp = geometry_msgs.msg.Vector3.deserialize(buffer);
    data.NedVel = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [YawUncertainty]
    tmp = _deserializer.float32(buffer);
    data.YawUncertainty = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [PitchUncertainty]
    tmp = _deserializer.float32(buffer);
    data.PitchUncertainty = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [RollUncertainty]
    tmp = _deserializer.float32(buffer);
    data.RollUncertainty = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [PosUncertainty]
    tmp = _deserializer.float32(buffer);
    data.PosUncertainty = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [VelUncertainty]
    tmp = _deserializer.float32(buffer);
    data.VelUncertainty = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'vectornav/ins';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'ee507fca9f8aad19cb7a3a7b23347ff7';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    std_msgs/Header       header
    float64               Time
    uint16                Week
    uint16                Status
    geometry_msgs/Vector3 RPY
    geometry_msgs/Vector3 LLA
    geometry_msgs/Vector3 NedVel
    float32               YawUncertainty
    float32               PitchUncertainty
    float32               RollUncertainty
    float32               PosUncertainty
    float32               VelUncertainty
    
    
    uint16 STATUS_INSUFFICIENT_MOTION=1
    uint16 STATUS_INS_OK=2
    uint16 STATUS_GPS_FIX_OK=4
    uint16 STATUS_SENSOR_ERROR_TIME=8
    uint16 STATUS_SENSOR_ERROR_IMU=16
    uint16 STATUS_SENSOR_ERROR_MAG=32
    uint16 STATUS_SENSOR_ERROR_GPS=64
    
    
    
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

// Constants for message
ins.Constants = {
  STATUS_INSUFFICIENT_MOTION: 1,
  STATUS_INS_OK: 2,
  STATUS_GPS_FIX_OK: 4,
  STATUS_SENSOR_ERROR_TIME: 8,
  STATUS_SENSOR_ERROR_IMU: 16,
  STATUS_SENSOR_ERROR_MAG: 32,
  STATUS_SENSOR_ERROR_GPS: 64,
}

module.exports = ins;
