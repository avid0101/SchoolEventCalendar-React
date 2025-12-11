import React from 'react';
import { getEventStatus, formatDateTime } from '../../../utils/eventUtils';

const StudentEventRow = ({ event, index, type, onAction }) => {
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
};

export default StudentEventRow;
