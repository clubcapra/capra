;; Auto-generated. Do not edit!


(when (boundp 'vectornav::sync_in)
  (if (not (find-package "VECTORNAV"))
    (make-package "VECTORNAV"))
  (shadow 'sync_in (find-package "VECTORNAV")))
(unless (find-package "VECTORNAV::SYNC_IN")
  (make-package "VECTORNAV::SYNC_IN"))

(in-package "ROS")
;;//! \htmlinclude sync_in.msg.html
(if (not (find-package "STD_MSGS"))
  (ros::roseus-add-msgs "std_msgs"))


(defclass vectornav::sync_in
  :super ros::object
  :slots (_header _gps_time _sync_in_count ))

(defmethod vectornav::sync_in
  (:init
   (&key
    ((:header __header) (instance std_msgs::Header :init))
    ((:gps_time __gps_time) 0.0)
    ((:sync_in_count __sync_in_count) 0)
    )
   (send-super :init)
   (setq _header __header)
   (setq _gps_time (float __gps_time))
   (setq _sync_in_count (round __sync_in_count))
   self)
  (:header
   (&rest __header)
   (if (keywordp (car __header))
       (send* _header __header)
     (progn
       (if __header (setq _header (car __header)))
       _header)))
  (:gps_time
   (&optional __gps_time)
   (if __gps_time (setq _gps_time __gps_time)) _gps_time)
  (:sync_in_count
   (&optional __sync_in_count)
   (if __sync_in_count (setq _sync_in_count __sync_in_count)) _sync_in_count)
  (:serialization-length
   ()
   (+
    ;; std_msgs/Header _header
    (send _header :serialization-length)
    ;; float64 _gps_time
    8
    ;; uint32 _sync_in_count
    4
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; std_msgs/Header _header
       (send _header :serialize s)
     ;; float64 _gps_time
       (sys::poke _gps_time (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; uint32 _sync_in_count
       (write-long _sync_in_count s)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; std_msgs/Header _header
     (send _header :deserialize buf ptr-) (incf ptr- (send _header :serialization-length))
   ;; float64 _gps_time
     (setq _gps_time (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; uint32 _sync_in_count
     (setq _sync_in_count (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;;
   self)
  )

(setf (get vectornav::sync_in :md5sum-) "2086a0f9af37a9d42ba81363cb03ae33")
(setf (get vectornav::sync_in :datatype-) "vectornav/sync_in")
(setf (get vectornav::sync_in :definition-)
      "std_msgs/Header       header
float64		      gps_time
uint32                sync_in_count

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

")



(provide :vectornav/sync_in "2086a0f9af37a9d42ba81363cb03ae33")


