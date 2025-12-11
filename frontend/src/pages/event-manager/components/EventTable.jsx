import './EventTable.css';
import EventsList from '../../../components/common/EventsList';
import EventCard from './EventCard';

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
      
      <div className="events-list">
        <EventsList 
          events={events}
          renderItem={(event) => (
            <EventCard 
              key={event.eventId}
              event={event}
              onEdit={onEdit}
              onDelete={onDelete}
              onViewParticipants={onViewParticipants}
            />
          )}
        />
      </div>
    </div>
  );
};

export default EventTable;