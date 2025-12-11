import React from 'react';
import './StudentEventTable.css';

const StudentEventTable = ({ events, type, onAction, loading = false }) => {
  // Format date to "December 10, 2025"
  const formatDate = (dateString) => {
    if (!dateString) return '';
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
    // Handle time strings like "14:30" or "14:30:00"
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const min = minutes || '00';
    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    return `${displayHour}:${min} ${period}`;
  };

  // Check event status based on time (same logic as event-manager)
  const getEventStatus = (event) => {
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

  const formatDateTime = (event) => {
    const date = formatDate(event.eventSchedule);
    const startTime = formatTime(event.startTime);
    const endTime = formatTime(event.endTime);
    return `${date} ${startTime} - ${endTime}`;
  };

  if (loading) {
    return (
      <div className="table-loading">
        <div className="loading-spinner"></div>
        <p>Loading events...</p>
      </div>
    );
  }

  if (!events || events.length === 0) {
    return (
      <div className="table-empty">
        <div className="empty-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#6c63ff" strokeWidth="1.5">
            <path d="M3 3l18 18M9 5h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
            <path d="M14 9h-4v6h4V9z" />
          </svg>
        </div>
        <h3>No Events Available</h3>
        <p>There are currently no events to display.</p>
      </div>
    );
  }

  // Calculate active events count
  const activeEventsCount = events.filter(e => getEventStatus(e) === 'Active').length;

  return (
    <div className="student-event-table-container">
      <div className="table-header">
        <div className="header-left">
          <h3 className="table-title">
            {type === 'joined' ? 'Joined Events' : 'Available Events'}
            <span className="event-count"> ({events.length})</span>
          </h3>
          <p className="table-subtitle">
            {type === 'joined' ? 'Events you have registered for' : 'Discover and join upcoming events'}
          </p>
        </div>
        <div className="table-summary">
          <div className="summary-item">
            <span className="summary-label">Total Events</span>
            <span className="summary-value">{events.length}</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Active</span>
            <span className="summary-value active-count">
              {activeEventsCount}
            </span>
          </div>
        </div>
      </div>

      <div className="table-responsive">
        <table className="student-event-table">
          <thead>
            <tr>
              <th className="event-id">ID</th>
              <th className="event-title">Event Details</th>
              <th className="event-date">Date & Time</th>
              <th className="event-location">Location</th>
              <th className="event-status">Status</th>
              <th className="event-actions">Action</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => {
              const eventStatus = getEventStatus(event);
              const isActionable = eventStatus === 'Active' || eventStatus === 'Inactive';
              
              return (
                <tr key={event.eventId} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                  <td className="event-id">
                    <span className="event-id-badge">#{event.eventId}</span>
                  </td>
                  <td className="event-title">
                    <div className="event-title-content">
                      <h4 className="event-name">{event.eventName}</h4>
                      {event.eventDescription && (
                        <p className="event-description">{event.eventDescription}</p>
                      )}
                    </div>
                  </td>
                  <td className="event-date">
                    <div className="date-content">
                      <div className="date-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6c63ff" strokeWidth="2">
                          <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
                          <path d="M3 10h18" />
                        </svg>
                      </div>
                      <span className="date-text">{formatDateTime(event)}</span>
                    </div>
                  </td>
                  <td className="event-location">
                    <div className="location-content">
                      <div className="location-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6c63ff" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </div>
                      <span className="location-text">{event.eventLocation || 'To be announced'}</span>
                    </div>
                  </td>
                  <td className="event-status">
                    <span className={`status-badge ${
                      eventStatus === 'Active' ? 'active' : 
                      eventStatus === 'Ended' ? 'ended' : 
                      'inactive'
                    }`}>
                      <span className="status-dot"></span>
                      {eventStatus}
                    </span>
                  </td>
                  <td className="event-actions">
                    {type === 'joined' ? (
                      <button
                        className="action-button leave-button"
                        onClick={() => onAction(event.eventId)}
                        disabled={eventStatus === 'Ended'}
                      >
                        <span className="button-icon">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                            <polyline points="16 17 21 12 16 7" />
                            <line x1="21" y1="12" x2="9" y2="12" />
                          </svg>
                        </span>
                        <span className="button-text">
                          {eventStatus === 'Ended' ? 'Ended' : 'Leave'}
                        </span>
                      </button>
                    ) : (
                      <button
                        className="action-button join-button"
                        onClick={() => onAction(event.eventId)}
                        disabled={!isActionable || eventStatus === 'Ended'}
                      >
                        <span className="button-icon">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 5v14M5 12h14" />
                          </svg>
                        </span>
                        <span className="button-text">
                          {eventStatus === 'Ended' ? 'Ended' : 
                           eventStatus === 'Active' ? 'Join Event' : 
                           'Coming Soon'}
                        </span>
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="table-footer">
        <div className="footer-info">
          Showing <strong>{events.length}</strong> event{events.length !== 1 ? 's' : ''}
        </div>
        <div className="footer-legend">
          <div className="legend-item">
            <span className="legend-dot active"></span>
            <span>Active Event</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot inactive"></span>
            <span>Inactive Event</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot ended"></span>
            <span>Ended Event</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentEventTable;