// Auto-generated. Do not edit!

// (in-package image_exposure_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let ImageExposureStatistics = require('./ImageExposureStatistics.js');

//-----------------------------------------------------------

class SequenceExposureStatistics {
  constructor() {
    this.exposures = [];
    this.underExposed = 0;
    this.overExposed = 0;
    this.meanIrradiance = 0.0;
    this.minMeasurableIrradiance = 0.0;
    this.maxMeasurableIrradiance = 0.0;
    this.minObservedIrradiance = 0.0;
    this.maxObservedIrradiance = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SequenceExposureStatistics
    // Serialize the length for message field [exposures]
    bufferInfo = _serializer.uint32(obj.exposures.length, bufferInfo);
    // Serialize message field [exposures]
    obj.exposures.forEach((val) => {
      bufferInfo = ImageExposureStatistics.serialize(val, bufferInfo);
    });
    // Serialize message field [underExposed]
    bufferInfo = _serializer.uint32(obj.underExposed, bufferInfo);
    // Serialize message field [overExposed]
    bufferInfo = _serializer.uint32(obj.overExposed, bufferInfo);
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
    //deserializes a message object of type SequenceExposureStatistics
    let tmp;
    let len;
    let data = new SequenceExposureStatistics();
    // Deserialize array length for message field [exposures]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [exposures]
    data.exposures = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = ImageExposureStatistics.deserialize(buffer);
      data.exposures[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize message field [underExposed]
    tmp = _deserializer.uint32(buffer);
    data.underExposed = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [overExposed]
    tmp = _deserializer.uint32(buffer);
    data.overExposed = tmp.data;
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
    return 'image_exposure_msgs/SequenceExposureStatistics';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '2a4f3187c50e7b3544984e9e28ce4328';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # exposure statistics for a multi-exposure HDR sequence
    ImageExposureStatistics[] exposures
    uint32 underExposed 		# number of pixels underexposed in longest exposure
    uint32 overExposed  		# number of pixels overexposed in shortest
    float64 meanIrradiance 		# mean irradiance of all properly exposed pixels in all images in the sequence
    float64 minMeasurableIrradiance
    float64 maxMeasurableIrradiance
    float64 minObservedIrradiance
    float64 maxObservedIrradiance
    
    
    ================================================================================
    MSG: image_exposure_msgs/ImageExposureStatistics
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

module.exports = SequenceExposureStatistics;
