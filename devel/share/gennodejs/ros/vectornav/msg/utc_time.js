// Auto-generated. Do not edit!

// (in-package vectornav.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class utc_time {
  constructor() {
    this.year = 0;
    this.month = 0;
    this.day = 0;
    this.hour = 0;
    this.minute = 0;
    this.second = 0;
    this.millisecond = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type utc_time
    // Serialize message field [year]
    bufferInfo = _serializer.uint8(obj.year, bufferInfo);
    // Serialize message field [month]
    bufferInfo = _serializer.uint8(obj.month, bufferInfo);
    // Serialize message field [day]
    bufferInfo = _serializer.uint8(obj.day, bufferInfo);
    // Serialize message field [hour]
    bufferInfo = _serializer.uint8(obj.hour, bufferInfo);
    // Serialize message field [minute]
    bufferInfo = _serializer.uint8(obj.minute, bufferInfo);
    // Serialize message field [second]
    bufferInfo = _serializer.uint8(obj.second, bufferInfo);
    // Serialize message field [millisecond]
    bufferInfo = _serializer.uint16(obj.millisecond, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type utc_time
    let tmp;
    let len;
    let data = new utc_time();
    // Deserialize message field [year]
    tmp = _deserializer.uint8(buffer);
    data.year = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [month]
    tmp = _deserializer.uint8(buffer);
    data.month = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [day]
    tmp = _deserializer.uint8(buffer);
    data.day = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [hour]
    tmp = _deserializer.uint8(buffer);
    data.hour = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [minute]
    tmp = _deserializer.uint8(buffer);
    data.minute = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [second]
    tmp = _deserializer.uint8(buffer);
    data.second = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [millisecond]
    tmp = _deserializer.uint16(buffer);
    data.millisecond = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'vectornav/utc_time';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'c5364f7d779a45ceab890115aa08581e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    uint8 year
    uint8 month
    uint8 day
    uint8 hour
    uint8 minute
    uint8 second
    uint16 millisecond
    
    `;
  }

};

module.exports = utc_time;
