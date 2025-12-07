import { useState } from 'react';
import MessageAlert from '../../components/common/MessageAlert';
import EventTable from './components/EventTable';
import ParticipantsModal from './components/ParticipantsModal';

const ManageEventPage = ({ message, loading, events, onEdit, onDelete }) => {
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [showParticipantsModal, setShowParticipantsModal] = useState(false);

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
          onEdit={onEdit} 
          onDelete={onDelete} 
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
