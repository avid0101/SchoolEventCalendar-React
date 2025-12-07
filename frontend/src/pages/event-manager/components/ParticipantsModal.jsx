import React, { useState, useEffect } from 'react';
import { getEventParticipants } from '../../../services/api';
import './ParticipantsModal.css';

export default function ParticipantsModal({ eventId, onClose }) {
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchParticipants();
  }, [eventId]);

  const fetchParticipants = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await getEventParticipants(eventId);
      setParticipants(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('Error fetching participants:', err);
      setError('Failed to load participants');
      setParticipants([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content participants-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Event Participants</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="modal-body">
          {loading ? (
            <div className="loading-state">
              <div className="loading-spinner"></div>
              <p>Loading participants...</p>
            </div>
          ) : error ? (
            <div className="error-state">
              <p className="error-message">{error}</p>
            </div>
          ) : participants.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">👥</div>
              <h3>No Participants Yet</h3>
              <p>No students have joined this event.</p>
            </div>
          ) : (
            <div className="participants-list">
              <p className="participants-count">
                Total Participants: <strong>{participants.length}</strong>
              </p>
              <table className="participants-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>First Name</th>
                    <th>Middle Name</th>
                    <th>Last Name</th>
                  </tr>
                </thead>
                <tbody>
                  {participants.map((participant) => (
                    <tr key={participant.userId}>
                      <td>{participant.userId}</td>
                      <td>{participant.username}</td>
                      <td>{participant.firstname}</td>
                      <td>{participant.middlename || '-'}</td>
                      <td>{participant.lastname}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="modal-footer">
          <button className="close-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}