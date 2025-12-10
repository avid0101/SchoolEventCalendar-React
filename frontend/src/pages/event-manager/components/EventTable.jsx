import './EventTable.css';

const EventTable = ({ events, onEdit, onDelete, onViewParticipants }) => {
  if (!events || events.length === 0) {
    return (
      <div className="empty-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        <h3>No Events Yet</h3>
        <p>Create your first event to get started</p>
      </div>
    );
  }

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
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const min = minutes || '00';
    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    return `${displayHour}:${min} ${period}`;
  };

  // Check if event has ended
  const getEventStatus = (event) => {
    if (!event.eventSchedule || !event.endTime) {
      return event.eventIsActive ? 'Active' : 'Inactive';
    }

    const eventDate = new Date(event.eventSchedule);
    const [hours, minutes] = event.endTime.split(':');
    eventDate.setHours(parseInt(hours), parseInt(minutes), 0, 0);
    
    const now = new Date();
    
    if (now > eventDate) {
      return 'Ended';
    }
    
    return event.eventIsActive ? 'Active' : 'Inactive';
  };

  return (
    <div className="table-wrapper">
      <div className="table-header-info">
        <div>
          <h3>All Events</h3>
          <p>Manage and organize your school events</p>
        </div>
        <div className="event-count-badge">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span>{events.length} {events.length === 1 ? 'Event' : 'Events'}</span>
        </div>
      </div>
      
      <div className="events-list">
        {events.map(event => (
          <div key={event.eventId} className="event-card">
            <div className="event-card-header">
              <h3>{event.eventName}</h3>
              <span className={`status-badge ${
                getEventStatus(event) === 'Active' ? 'status-active' : 
                getEventStatus(event) === 'Ended' ? 'status-ended' : 
                'status-inactive'
              }`}>
                <span className="status-dot"></span>
                {getEventStatus(event)}
              </span>
            </div>
            
            <div className="event-card-body">
              <div className="event-detail">
                <strong>Start:</strong>
                <span>{formatDate(event.eventSchedule)} {formatTime(event.startTime)}</span>
              </div>
              <div className="event-detail">
                <strong>End:</strong>
                <span>{formatDate(event.eventSchedule)} {formatTime(event.endTime)}</span>
              </div>
              <div className="event-detail">
                <strong>Location:</strong>
                <span>{event.eventLocation}</span>
              </div>
              <div className="event-detail">
                <strong>Description:</strong>
                <span>{event.eventDescription}</span>
              </div>
            </div>
            
            <div className="event-card-footer">
              <button 
                className="viewButton" 
                onClick={() => onViewParticipants(event.eventId)}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                View Participants
              </button>
              <button 
                className="editButton" 
                onClick={() => onEdit(event)}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
                Edit
              </button>
              <button 
                className="deleteButton" 
                onClick={() => onDelete(event.eventId)}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                </svg>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventTable;