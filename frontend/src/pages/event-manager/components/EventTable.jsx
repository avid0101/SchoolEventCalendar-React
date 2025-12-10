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
      
      <table className="dataTable">
        <thead>
          <tr>
            <th>
              <div className="th-content">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 11l3 3L22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
                ID
              </div>
            </th>
            <th>
              <div className="th-content">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                Title
              </div>
            </th>
            <th>
              <div className="th-content">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Date
              </div>
            </th>
            <th>
              <div className="th-content">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                Time
              </div>
            </th>
            <th>
              <div className="th-content">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Location
              </div>
            </th>
            <th>
              <div className="th-content">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
                Status
              </div>
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map(event => (
            <tr key={event.eventId}>
              <td>
                <div className="id-badge">#{event.eventId}</div>
              </td>
              <td>
                <div className="event-title-cell">
                  <div className="event-name">{event.eventName}</div>
                </div>
              </td>
              <td>
                <div className="date-cell">
                  {new Date(event.eventSchedule).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </div>
              </td>
              <td>
                <div className="time-range">
                  {event.startTime} - {event.endTime}
                </div>
              </td>
              <td>
                <div className="location-cell">{event.eventLocation}</div>
              </td>
              <td>
                <span className={`status-badge ${event.eventIsActive ? 'status-active' : 'status-inactive'}`}>
                  <span className="status-dot"></span>
                  {event.eventIsActive ? 'Active' : 'Inactive'}
                </span>
              </td>
              <td className="actionButtons">
                <button 
                  className="viewButton" 
                  onClick={() => onViewParticipants(event.eventId)}
                  title="View participants"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  View
                </button>
                <button 
                  className="editButton" 
                  onClick={() => onEdit(event)}
                  title="Edit event"
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
                  title="Delete event"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="3 6 5 6 21 6" />
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                  </svg>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventTable;