// Auto-generated. Do not edit!

// (in-package image_exposure_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let statistics_msgs = _finder('statistics_msgs');

//-----------------------------------------------------------

class ImageExposureStatistics {
  constructor() {
    this.stamp = {secs: 0, nsecs: 0};
    this.time_reference = '';
    this.shutterms = 0.0;
    this.gaindb = 0.0;
    this.underExposed = 0;
    this.overExposed = 0;
    this.pixelVal = new statistics_msgs.msg.Stats1D();
    this.pixelAge = new statistics_msgs.msg.Stats1D();
    this.meanIrradiance = 0.0;
    this.minMeasurableIrradiance = 0.0;
    this.maxMeasurableIrradiance = 0.0;
    this.minObservedIrradiance = 0.0;
    this.maxObservedIrradiance = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ImageExposureStatistics
    // Serialize message field [stamp]
    bufferInfo = _serializer.time(obj.stamp, bufferInfo);
    // Serialize message field [time_reference]
    bufferInfo = _serializer.string(obj.time_reference, bufferInfo);
    // Serialize message field [shutterms]
    bufferInfo = _serializer.float32(obj.shutterms, bufferInfo);
    // Serialize message field [gaindb]
    bufferInfo = _serializer.float32(obj.gaindb, bufferInfo);
    // Serialize message field [underExposed]
    bufferInfo = _serializer.uint32(obj.underExposed, bufferInfo);
    // Serialize message field [overExposed]
    bufferInfo = _serializer.uint32(obj.overExposed, bufferInfo);
    // Serialize message field [pixelVal]
    bufferInfo = statistics_msgs.msg.Stats1D.serialize(obj.pixelVal, bufferInfo);
    // Serialize message field [pixelAge]
    bufferInfo = statistics_msgs.msg.Stats1D.serialize(obj.pixelAge, bufferInfo);
    // Serialize message field [meanIrradiance]
    bufferInfo = _serializer.float64(obj.meanIrradiance, bufferInfo);
    // Serialize message field [minMeasurableIrradiance]
    bufferInfo = _serializer.float64(obj.minMeasurableIrradiance, bufferInfo);
    // Serialize message field [maxMeasurableIrradiance]
    bufferInfo = _serializer.float64(obj.maxMeasurableIrradiance, bufferInfo);
    // Serialize message field [minObservedIrradiance]
    bufferInfo = _serializer.float64(obj.minObservedIrradiance, bufferInfo);
    // Serialize message field [maxObservedIrradiance]
    bufferInfo = _serializer.float64(obj.maxObservedIrradiance, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ImageExposureStatistics
    let tmp;
    let len;
    let data = new ImageExposureStatistics();
    // Deserialize message field [stamp]
    tmp = _deserializer.time(buffer);
    data.stamp = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [time_reference]
    tmp = _deserializer.string(buffer);
    data.time_reference = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [shutterms]
    tmp = _deserializer.float32(buffer);
    data.shutterms = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [gaindb]
    tmp = _deserializer.float32(buffer);
    data.gaindb = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [underExposed]
    tmp = _deserializer.uint32(buffer);
    data.underExposed = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [overExposed]
    tmp = _deserializer.uint32(buffer);
    data.overExposed = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [pixelVal]
    tmp = statistics_msgs.msg.Stats1D.deserialize(buffer);
    data.pixelVal = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [pixelAge]
    tmp = statistics_msgs.msg.Stats1D.deserialize(buffer);
    data.pixelAge = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [meanIrradiance]
    tmp = _deserializer.float64(buffer);
    data.meanIrradiance = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [minMeasurableIrradiance]
    tmp = _deserializer.float64(buffer);
    data.minMeasurableIrradiance = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [maxMeasurableIrradiance]
    tmp = _deserializer.float64(buffer);
    data.maxMeasurableIrradiance = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [minObservedIrradiance]
    tmp = _deserializer.float64(buffer);
    data.minObservedIrradiance = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [maxObservedIrradiance]
    tmp = _deserializer.float64(buffer);
    data.maxObservedIrradiance = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'image_exposure_msgs/ImageExposureStatistics';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '334dc170ce6287d1de470f25be78dd9e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # message for exposure statistics reported a single image
    time stamp         # image time stamp
    string time_reference # The name of the reference clock for this message's timestamp.
    float32 shutterms  # shutter durations in ms
    float32 gaindb     # gain in decibels
    # pixel exposure and latency statistics
    uint32 underExposed # number of pixels underexposed
    uint32 overExposed  # number of pixels overexposed
    statistics_msgs/Stats1D pixelVal   # distribution of pixel values in the image
    statistics_msgs/Stats1D pixelAge   # distribution of pixel ages in frames
    # irradiance = pixelval/(shutterTime*10^(gaindb/10.0))
    float64 meanIrradiance
    float64 minMeasurableIrradiance
    float64 maxMeasurableIrradiance
    float64 minObservedIrradiance
    float64 maxObservedIrradiance
    
    
    
    ================================================================================
    MSG: statistics_msgs/Stats1D
    # statistics of a 1-D distribution
    float64 min
    float64 max 
    float64 mean 
    float64 variance
    int64 N
    
    `;
  }

};

module.exports = ImageExposureStatistics;
