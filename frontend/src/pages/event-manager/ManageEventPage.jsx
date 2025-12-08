import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MessageAlert from '../../components/common/MessageAlert';
import EventTable from './components/EventTable';
import ParticipantsModal from './components/ParticipantsModal';
import { deleteEvent } from '../../services/api';
import { fetchEventsWrapper } from '../../utils/fetchEventsWrapper';

const ManageEventPage = ({
  events,
  setEvents,
  message,
  setMessage,
  loading,
  setLoading,
  setFormData,
  setEditMode,
  setEditEventId
}) => {
  const navigate = useNavigate();
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [showParticipantsModal, setShowParticipantsModal] = useState(false);

  const handleEdit = (event) => {
    const formatTime = (timeStr) => timeStr.slice(0, 5);

    setFormData({
      title: event.eventName,
      description: event.eventDescription,
      eventDate: event.eventSchedule,
      startTime: formatTime(event.startTime),
      endTime: formatTime(event.endTime),
      location: event.eventLocation
    });

    setEditMode(true);
    setEditEventId(event.eventId);
    navigate('/event-manager/createvent');
  };

  const handleDelete = async (eventId) => {
    if (!window.confirm('Are you sure you want to delete this event?')) return;
    
    try {
      await deleteEvent(eventId);
      setMessage('Event deleted successfully!');
      await fetchEventsWrapper(setEvents, setLoading, setMessage);
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
    
    setTimeout(() => setMessage(''), 3000);
  };

  const handleViewParticipants = (eventId) => {
    setSelectedEventId(eventId);
    setShowParticipantsModal(true);
  };

  const handleCloseModal = () => {
    setShowParticipantsModal(false);
    setSelectedEventId(null);
  };

  return (
    <>
      <h2>Manage Events</h2>
      <MessageAlert message={message} />
      {loading ? (
        <p>Loading events...</p>
      ) : events.length === 0 ? (
        <p>No events found.</p>
      ) : (
        <EventTable 
          events={events} 
          onEdit={handleEdit} 
          onDelete={handleDelete} 
          onViewParticipants={handleViewParticipants}
        />
      )}

      {showParticipantsModal && (
        <ParticipantsModal
          eventId={selectedEventId}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default ManageEventPage;