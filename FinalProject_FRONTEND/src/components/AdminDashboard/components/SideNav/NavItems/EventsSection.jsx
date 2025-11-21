import React, { useContext, useState } from 'react';
import { DashboardContext } from '../../../context/DashboardContext.jsx';
import CreateEvent from '../../../pages/CreateEvent';
import Section from "../../Section";
import ParticipantsModal from './ParticipantsModal';

export default function EventsSection() {
  const {
    events, fetchEvents, loading, message, handleEdit,
    handleDelete, editMode, resetForms
  } = useContext(DashboardContext);

  const [selectedEventId, setSelectedEventId] = useState(null);
  const [showParticipantsModal, setShowParticipantsModal] = useState(false);

  const handleViewParticipants = (eventId) => {
    setSelectedEventId(eventId);
    setShowParticipantsModal(true);
  };

  return (
    <>
      <Section
        title="Events"
        subtitle="Manage your events and schedules"
        icon="📅"
        data={events}
        loading={loading}
        message={message}
        fetchData={fetchEvents}
        resetForms={resetForms}
        editMode={editMode}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        onEditType="event"
        CreateFormComponent={CreateEvent}
        renderTable={(item, actions) => {
          if (!item) {
            return {
              thead: (
                <tr>
                  <th>ID</th>
                  <th>Event Name</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Location</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              )
            };
          }

          const { onEdit, onDelete } = actions || {};

          return (
            <tr key={item.eventId}>
              <td>{item.eventId}</td>
              <td>{item.eventName}</td>
              <td>{item.eventSchedule}</td>
              <td>{item.startTime} - {item.endTime}</td>
              <td>{item.eventLocation}</td>
              <td>
                <span className={`status-badge ${item.eventIsActive ? 'active' : 'inactive'}`}>
                  {item.eventIsActive ? 'Active' : 'Inactive'}
                </span>
              </td>
              <td>
                <div className="action-buttons">
                  <button 
                    className="view-btn" 
                    onClick={() => handleViewParticipants(item.eventId)}
                    title="View participants"
                  >
                    👥 View
                  </button>
                  <button className="edit-btn" onClick={onEdit}>Edit</button>
                  <button className="delete-btn" onClick={onDelete}>Delete</button>
                </div>
              </td>
            </tr>
          );
        }}
      />

      {showParticipantsModal && (
        <ParticipantsModal
          eventId={selectedEventId}
          onClose={() => {
            setShowParticipantsModal(false);
            setSelectedEventId(null);
          }}
        />
      )}
    </>
  );
}