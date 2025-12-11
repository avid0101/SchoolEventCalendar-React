import './EventModal.css';

const EventModal = ({ event, onClose, onEdit }) => {
  if (!event) return null;

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

  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <button className="closeButton" onClick={onClose}></button>
        <h3>{event.eventName}</h3>
        <p><strong>Start:</strong> {formatDate(event.eventSchedule)} {formatTime(event.startTime)}</p>
        <p><strong>End:</strong> {formatDate(event.eventSchedule)} {formatTime(event.endTime)}</p>
        <p><strong>Location:</strong> {event.eventLocation}</p>
        <p><strong>Description:</strong> {event.eventDescription}</p>
        <p><strong>Status:</strong> {getEventStatus()}</p>
        <div>
          <button className="editButton" onClick={onEdit}>Edit</button>
          <button className="deleteButton" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default EventModal;