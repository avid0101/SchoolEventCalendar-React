import { useEffect } from 'react';
import './EventManager.css';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

import useEventManagerState from '../../hooks/useEventManagerState';
import { fetchEventsWrapper } from '../../utils/fetchEventsWrapper';

import EventModal from './components/EventModal';
import HeaderNav from '../../components/layout/HeaderNav/HeaderNav';

import CreateEventPage from './CreateEventPage';
import ManageEventPage from './ManageEventPage';
import CalendarPage from './CalendarPage';
import ProfilePage from './ProfilePage';

function EventManager() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  if (user.typeUser !== 'E') {
    window.location.href = '/login';
    return null;
  }

  const {
    events, setEvents,
    message, setMessage,
    loading, setLoading,
    selectedEvent, setSelectedEvent,
    formData, setFormData,
    editMode, setEditMode,
    editEventId, setEditEventId,
    editData, setEditData
  } = useEventManagerState();

  useEffect(() => {
    fetchEventsWrapper(setEvents, setLoading, setMessage);
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setEditData({
        firstname: storedUser.firstname || '',
        middlename: storedUser.middlename || '',
        lastname: storedUser.lastname || '',
        password: '',
        confirmPassword: ''
      });
    }
  }, []);

  return (
    <div className="event-manager-container">
      <HeaderNav username={user.username} />
      <main className="content">
        <div className="wrapper">
          <EventModal
            event={selectedEvent}
            onClose={() => setSelectedEvent(null)}
            onEdit={() => {
              setSelectedEvent(null);
              setFormData({
                title: selectedEvent.eventName,
                description: selectedEvent.eventDescription,
                eventDate: selectedEvent.eventSchedule,
                startTime: selectedEvent.startTime.slice(0, 5),
                endTime: selectedEvent.endTime.slice(0, 5),
                location: selectedEvent.eventLocation
              });
              setEditMode(true);
              setEditEventId(selectedEvent.eventId);
              navigate('/event-manager/createvent');
            }}
          />

          <Routes>
            <Route index element={<Navigate to="calendarview" replace />} />
            
            <Route
              path="createvent"
              element={
                <CreateEventPage
                  user={user}
                  events={events}
                  setEvents={setEvents}
                  message={message}
                  setMessage={setMessage}
                  loading={loading}
                  setLoading={setLoading}
                  formData={formData}
                  setFormData={setFormData}
                  editMode={editMode}
                  setEditMode={setEditMode}
                  editEventId={editEventId}
                  setEditEventId={setEditEventId}
                />
              }
            />

            <Route
              path="managevent"
              element={
                <ManageEventPage
                  events={events}
                  setEvents={setEvents}
                  message={message}
                  setMessage={setMessage}
                  loading={loading}
                  setLoading={setLoading}
                  setFormData={setFormData}
                  setEditMode={setEditMode}
                  setEditEventId={setEditEventId}
                />
              }
            />

            <Route
              path="calendarview"
              element={
                <CalendarPage
                  events={events}
                  setSelectedEvent={setSelectedEvent}
                />
              }
            />

            <Route
              path="profile"
              element={
                <ProfilePage
                  user={user}
                  message={message}
                  setMessage={setMessage}
                  editData={editData}
                  setEditData={setEditData}
                />
              }
            />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default EventManager;