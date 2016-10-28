// Auto-generated. Do not edit!

// (in-package statistics_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class Stats1D {
  constructor() {
    this.min = 0.0;
    this.max = 0.0;
    this.mean = 0.0;
    this.variance = 0.0;
    this.N = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Stats1D
    // Serialize message field [min]
    bufferInfo = _serializer.float64(obj.min, bufferInfo);
    // Serialize message field [max]
    bufferInfo = _serializer.float64(obj.max, bufferInfo);
    // Serialize message field [mean]
    bufferInfo = _serializer.float64(obj.mean, bufferInfo);
    // Serialize message field [variance]
    bufferInfo = _serializer.float64(obj.variance, bufferInfo);
    // Serialize message field [N]
    bufferInfo = _serializer.int64(obj.N, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Stats1D
    let tmp;
    let len;
    let data = new Stats1D();
    // Deserialize message field [min]
    tmp = _deserializer.float64(buffer);
    data.min = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [max]
    tmp = _deserializer.float64(buffer);
    data.max = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [mean]
    tmp = _deserializer.float64(buffer);
    data.mean = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [variance]
    tmp = _deserializer.float64(buffer);
    data.variance = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [N]
    tmp = _deserializer.int64(buffer);
    data.N = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'statistics_msgs/Stats1D';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '5e29efbcd70d63a82b5ddfac24a5bc4b';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # statistics of a 1-D distribution
    float64 min
    float64 max 
    float64 mean 
    float64 variance
    int64 N
    
    `;
  }

};

module.exports = Stats1D;
