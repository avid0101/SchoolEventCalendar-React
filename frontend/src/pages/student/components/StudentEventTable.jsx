import React from 'react';
import './StudentEventTable.css';
import EventsList from '../../../components/common/EventsList';
import StudentEventRow from './StudentEventRow';
import { getEventStatus } from '../../../utils/eventUtils';

const StudentEventTable = ({ events, type, onAction, loading = false }) => {
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
            <EventsList 
              events={events}
              renderItem={(event, index) => (
                <StudentEventRow 
                  key={event.eventId} 
                  event={event} 
                  index={index} 
                  type={type} 
                  onAction={onAction} 
                />
              )}
            />
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