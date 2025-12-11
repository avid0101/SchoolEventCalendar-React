import React from 'react';
import { getEventStatus, formatDate, formatTime } from '../../../utils/eventUtils';

const EventCard = ({ event, onEdit, onDelete, onViewParticipants }) => {
  return (
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
  );
};

export default EventCard;
