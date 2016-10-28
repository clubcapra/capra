; Auto-generated. Do not edit!


(cl:in-package vectornav-msg)


;//! \htmlinclude sync_in.msg.html

(cl:defclass <sync_in> (roslisp-msg-protocol:ros-message)
  ((header
    :reader header
    :initarg :header
    :type std_msgs-msg:Header
    :initform (cl:make-instance 'std_msgs-msg:Header))
   (gps_time
    :reader gps_time
    :initarg :gps_time
    :type cl:float
    :initform 0.0)
   (sync_in_count
    :reader sync_in_count
    :initarg :sync_in_count
    :type cl:integer
    :initform 0))
)

(cl:defclass sync_in (<sync_in>)
  ())

(cl:defmethod cl:initialize-instance :after ((m <sync_in>) cl:&rest args)
  (cl:declare (cl:ignorable args))
  (cl:unless (cl:typep m 'sync_in)
    (roslisp-msg-protocol:msg-deprecation-warning "using old message class name vectornav-msg:<sync_in> is deprecated: use vectornav-msg:sync_in instead.")))

(cl:ensure-generic-function 'header-val :lambda-list '(m))
(cl:defmethod header-val ((m <sync_in>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader vectornav-msg:header-val is deprecated.  Use vectornav-msg:header instead.")
  (header m))

(cl:ensure-generic-function 'gps_time-val :lambda-list '(m))
(cl:defmethod gps_time-val ((m <sync_in>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader vectornav-msg:gps_time-val is deprecated.  Use vectornav-msg:gps_time instead.")
  (gps_time m))

(cl:ensure-generic-function 'sync_in_count-val :lambda-list '(m))
(cl:defmethod sync_in_count-val ((m <sync_in>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader vectornav-msg:sync_in_count-val is deprecated.  Use vectornav-msg:sync_in_count instead.")
  (sync_in_count m))
(cl:defmethod roslisp-msg-protocol:serialize ((msg <sync_in>) ostream)
  "Serializes a message object of type '<sync_in>"
  (roslisp-msg-protocol:serialize (cl:slot-value msg 'header) ostream)
  (cl:let ((bits (roslisp-utils:encode-double-float-bits (cl:slot-value msg 'gps_time))))
    (cl:write-byte (cl:ldb (cl:byte 8 0) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 32) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 40) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 48) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 56) bits) ostream))
  (cl:write-byte (cl:ldb (cl:byte 8 0) (cl:slot-value msg 'sync_in_count)) ostream)
  (cl:write-byte (cl:ldb (cl:byte 8 8) (cl:slot-value msg 'sync_in_count)) ostream)
  (cl:write-byte (cl:ldb (cl:byte 8 16) (cl:slot-value msg 'sync_in_count)) ostream)
  (cl:write-byte (cl:ldb (cl:byte 8 24) (cl:slot-value msg 'sync_in_count)) ostream)
)
(cl:defmethod roslisp-msg-protocol:deserialize ((msg <sync_in>) istream)
  "Deserializes a message object of type '<sync_in>"
  (roslisp-msg-protocol:deserialize (cl:slot-value msg 'header) istream)
    (cl:let ((bits 0))
      (cl:setf (cl:ldb (cl:byte 8 0) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 32) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 40) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 48) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 56) bits) (cl:read-byte istream))
    (cl:setf (cl:slot-value msg 'gps_time) (roslisp-utils:decode-double-float-bits bits)))
    (cl:setf (cl:ldb (cl:byte 8 0) (cl:slot-value msg 'sync_in_count)) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 8) (cl:slot-value msg 'sync_in_count)) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 16) (cl:slot-value msg 'sync_in_count)) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 24) (cl:slot-value msg 'sync_in_count)) (cl:read-byte istream))
  msg
)
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql '<sync_in>)))
  "Returns string type for a message object of type '<sync_in>"
  "vectornav/sync_in")
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql 'sync_in)))
  "Returns string type for a message object of type 'sync_in"
  "vectornav/sync_in")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql '<sync_in>)))
  "Returns md5sum for a message object of type '<sync_in>"
  "2086a0f9af37a9d42ba81363cb03ae33")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql 'sync_in)))
  "Returns md5sum for a message object of type 'sync_in"
  "2086a0f9af37a9d42ba81363cb03ae33")
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql '<sync_in>)))
  "Returns full string definition for message of type '<sync_in>"
  (cl:format cl:nil "std_msgs/Header       header~%float64		      gps_time~%uint32                sync_in_count~%~%================================================================================~%MSG: std_msgs/Header~%# Standard metadata for higher-level stamped data types.~%# This is generally used to communicate timestamped data ~%# in a particular coordinate frame.~%# ~%# sequence ID: consecutively increasing ID ~%uint32 seq~%#Two-integer timestamp that is expressed as:~%# * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')~%# * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')~%# time-handling sugar is provided by the client library~%time stamp~%#Frame this data is associated with~%# 0: no frame~%# 1: global frame~%string frame_id~%~%~%"))
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql 'sync_in)))
  "Returns full string definition for message of type 'sync_in"
  (cl:format cl:nil "std_msgs/Header       header~%float64		      gps_time~%uint32                sync_in_count~%~%================================================================================~%MSG: std_msgs/Header~%# Standard metadata for higher-level stamped data types.~%# This is generally used to communicate timestamped data ~%# in a particular coordinate frame.~%# ~%# sequence ID: consecutively increasing ID ~%uint32 seq~%#Two-integer timestamp that is expressed as:~%# * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')~%# * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')~%# time-handling sugar is provided by the client library~%time stamp~%#Frame this data is associated with~%# 0: no frame~%# 1: global frame~%string frame_id~%~%~%"))
(cl:defmethod roslisp-msg-protocol:serialization-length ((msg <sync_in>))
  (cl:+ 0
     (roslisp-msg-protocol:serialization-length (cl:slot-value msg 'header))
     8
     4
))
(cl:defmethod roslisp-msg-protocol:ros-message-to-list ((msg <sync_in>))
  "Converts a ROS message object to a list"
  (cl:list 'sync_in
    (cl:cons ':header (header msg))
    (cl:cons ':gps_time (gps_time msg))
    (cl:cons ':sync_in_count (sync_in_count msg))
))
