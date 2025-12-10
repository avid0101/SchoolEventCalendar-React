import React from 'react';
import './StudentEventModal.css';

const StudentEventModal = ({ event, onJoin, onClose }) => {
  if (!event) return null;

  // Format date to "December 10, 2025"
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Format time to "3:00 PM"
  const formatTime = (timeString) => {
    if (!timeString) return '';
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const min = minutes || '00';
    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    return `${displayHour}:${min} ${period}`;
  };

  // Check event status based on time
  const getEventStatus = () => {
    if (!event.eventSchedule || !event.startTime || !event.endTime) {
      return event.eventIsActive ? 'Active' : 'Inactive';
    }

    const now = new Date();
    
    // Create start time
    const startDate = new Date(event.eventSchedule);
    const [startHours, startMinutes] = event.startTime.split(':');
    startDate.setHours(parseInt(startHours), parseInt(startMinutes), 0, 0);
    
    // Create end time
    const endDate = new Date(event.eventSchedule);
    const [endHours, endMinutes] = event.endTime.split(':');
    endDate.setHours(parseInt(endHours), parseInt(endMinutes), 0, 0);
    
    // Check if event has ended
    if (now > endDate) {
      return 'Ended';
    }
    
    // Check if event hasn't started yet
    if (now < startDate) {
      return 'Inactive';
    }
    
    // Event is currently happening
    return event.eventIsActive ? 'Active' : 'Inactive';
  };

  const status = getEventStatus();

  return (
    <div className="student-modal-overlay" onClick={onClose}>
      <div className="student-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="student-modal-close" onClick={onClose}>×</button>
        
        <div className="student-modal-header">
          <h3 className="student-modal-title">{event.eventName}</h3>
        </div>

        <div className="student-modal-body">
          <div className="student-modal-info">
            <span className="student-modal-label">Start</span>
            <span className="student-modal-value">
              {formatDate(event.eventSchedule)} {formatTime(event.startTime)}
            </span>
          </div>

          <div className="student-modal-info">
            <span className="student-modal-label">End</span>
            <span className="student-modal-value">
              {formatDate(event.eventSchedule)} {formatTime(event.endTime)}
            </span>
          </div>

          <div className="student-modal-info">
            <span className="student-modal-label">Location</span>
            <span className="student-modal-value">{event.eventLocation || 'N/A'}</span>
          </div>

          <div className="student-modal-info">
            <span className="student-modal-label">Description</span>
            <span className="student-modal-value">{event.eventDescription || 'N/A'}</span>
          </div>

          <div className="student-modal-info">
            <span className="student-modal-label">Status</span>
            <span className="student-modal-value">
              <span className={`student-status-badge ${status.toLowerCase()}`}>
                <span className="student-status-dot"></span>
                {status}
              </span>
            </span>
          </div>
        </div>

        <div className="student-modal-actions">
          <button className="student-join-button" onClick={() => onJoin(event.eventId)}>
            Join Event
          </button>
          <button className="student-close-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentEventModal;