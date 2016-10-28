// Auto-generated. Do not edit!

// (in-package wfov_camera_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class WFOVTrigger {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.time_reference = '';
    this.trigger_time = {secs: 0, nsecs: 0};
    this.trigger_time_reference = '';
    this.shutter = 0;
    this.id = 0;
    this.trigger_seq = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type WFOVTrigger
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize message field [time_reference]
    bufferInfo = _serializer.string(obj.time_reference, bufferInfo);
    // Serialize message field [trigger_time]
    bufferInfo = _serializer.time(obj.trigger_time, bufferInfo);
    // Serialize message field [trigger_time_reference]
    bufferInfo = _serializer.string(obj.trigger_time_reference, bufferInfo);
    // Serialize message field [shutter]
    bufferInfo = _serializer.uint32(obj.shutter, bufferInfo);
    // Serialize message field [id]
    bufferInfo = _serializer.uint32(obj.id, bufferInfo);
    // Serialize message field [trigger_seq]
    bufferInfo = _serializer.uint32(obj.trigger_seq, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type WFOVTrigger
    let tmp;
    let len;
    let data = new WFOVTrigger();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [time_reference]
    tmp = _deserializer.string(buffer);
    data.time_reference = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [trigger_time]
    tmp = _deserializer.time(buffer);
    data.trigger_time = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [trigger_time_reference]
    tmp = _deserializer.string(buffer);
    data.trigger_time_reference = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [shutter]
    tmp = _deserializer.uint32(buffer);
    data.shutter = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [id]
    tmp = _deserializer.uint32(buffer);
    data.id = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [trigger_seq]
    tmp = _deserializer.uint32(buffer);
    data.trigger_seq = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'wfov_camera_msgs/WFOVTrigger';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'e38c040150f1be3148468f6b9974f8bf';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Message for the time synchronization packets for the WFOV cameras.
    
    Header header			# stamp is the time at which the trigger was received.
    
    string time_reference		# The name of the reference clock for this message's timestamp.
    
    time trigger_time		# The trigger time at which the data was valid.
    
    string trigger_time_reference	# The name of the reference clock for this message's trigger timestamp.
    
    uint32 shutter			# Time duration (microseconds) the shutter was open.
    
    uint32 id			# Camera ID Number
    
    uint32 trigger_seq		# Number of triggers sent to this camera ID number
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
    
    `;
  }

};

module.exports = WFOVTrigger;
