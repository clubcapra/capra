// Auto-generated. Do not edit!

// (in-package image_exposure_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class ExposureSequence {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.shutter = [];
    this.gain = 0.0;
    this.white_balance_blue = 0;
    this.white_balance_red = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ExposureSequence
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize the length for message field [shutter]
    bufferInfo = _serializer.uint32(obj.shutter.length, bufferInfo);
    // Serialize message field [shutter]
    obj.shutter.forEach((val) => {
      bufferInfo = _serializer.uint32(val, bufferInfo);
    });
    // Serialize message field [gain]
    bufferInfo = _serializer.float32(obj.gain, bufferInfo);
    // Serialize message field [white_balance_blue]
    bufferInfo = _serializer.uint16(obj.white_balance_blue, bufferInfo);
    // Serialize message field [white_balance_red]
    bufferInfo = _serializer.uint16(obj.white_balance_red, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ExposureSequence
    let tmp;
    let len;
    let data = new ExposureSequence();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [shutter]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [shutter]
    data.shutter = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.uint32(buffer);
      data.shutter[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize message field [gain]
    tmp = _deserializer.float32(buffer);
    data.gain = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [white_balance_blue]
    tmp = _deserializer.uint16(buffer);
    data.white_balance_blue = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [white_balance_red]
    tmp = _deserializer.uint16(buffer);
    data.white_balance_red = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'image_exposure_msgs/ExposureSequence';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '81d98e1e20eab8beb4bd07beeba6a398';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # exposure sequence (for mult-exposure HDR)
    Header header
    uint32[]  shutter    	     # Time duration (microseconds) the shutter was open.
    float32 gain                 # Gain (in dB) applied to the images in the sequence.
    uint16 white_balance_blue    # White balance in blue.
    uint16 white_balance_red     # White balance in red.
    
    
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

module.exports = ExposureSequence;
