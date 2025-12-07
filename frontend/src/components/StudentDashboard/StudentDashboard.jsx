import { Routes, Route, Navigate } from "react-router-dom";
import "./StudentDashboard.css";

import useStudentUser from "./hooks/useStudentUser";
import useStudentState from "./hooks/useStudentState";
import useStudentEffects from "./hooks/useStudentEffects";

import StudentHeader from "./components/StudentHeader";

import {
  BrowseEventsPage,
  JoinedEventsPage,
  CalendarPage,
  ProfilePage,
} from "./pages";

import {
  fetchJoinedEvents,
  handleRegister,
  handleLeaveEvent,
  handleEditChange,
  handleProfileUpdate,
  handleLogout,
} from "./functions";

export default function StudentDashboard() {
  const { user, username } = useStudentUser();
  const studentState = useStudentState();

  useStudentEffects(user, studentState);

  if (!user || user.typeUser !== "S") {
    window.location.href = "/login";
    return null;
  }

  const {
    events,
    joinedEvents,
    loading,
    message,
    selectedEvent,
    setSelectedEvent,
    editData,
    setEditData,
    setJoinedEvents,
    setLoading,
    setMessage,
  } = studentState;

  // Hide already-joined events from browse page
  const filteredEvents = events.filter(
    (evt) => !joinedEvents.some((j) => j.eventId === evt.eventId)
  );

  // Map events for FullCalendar
  const calendarEvents = events.map((evt) => ({
    id: evt.eventId,
    title: evt.eventName,
    start: evt.eventSchedule && evt.startTime ? `${evt.eventSchedule}T${evt.startTime}` : '',
    end: evt.eventSchedule && evt.endTime ? `${evt.eventSchedule}T${evt.endTime}` : '',
    extendedProps: {
      description: evt.eventDescription,
      location: evt.eventLocation,
      status: evt.eventIsActive ? "Active" : "Inactive",
    },
  }));

  return (
    <div className="landingPage">
      <StudentHeader />
      <div className="content">
        <div className="wrapper">
          <Routes>
            <Route index element={<Navigate to="calendarview" replace />} />

            <Route
              path="browseevents"
              element={
                <BrowseEventsPage
                  events={filteredEvents}
                  message={message}
                  loading={loading}
                  onJoin={(eventId) =>
                    handleRegister(eventId, username, setMessage, () =>
                      fetchJoinedEvents(
                        username,
                        setJoinedEvents,
                        setLoading,
                        setMessage
                      )
                    )
                  }
                />
              }
            />

            <Route
              path="joinedevents"
              element={
                <JoinedEventsPage
                  events={joinedEvents}
                  message={message}
                  loading={loading}
                  onLeave={(eventId) =>
                    handleLeaveEvent(eventId, username, setMessage, () =>
                      fetchJoinedEvents(
                        username,
                        setJoinedEvents,
                        setLoading,
                        setMessage
                      )
                    )
                  }
                />
              }
            />

            <Route
              path="calendarview"
              element={
                <CalendarPage
                  calendarEvents={calendarEvents}
                  selectedEvent={selectedEvent}
                  setSelectedEvent={setSelectedEvent}
                  message={message}
                  onJoin={(eventId) =>
                    handleRegister(eventId, username, setMessage, () =>
                      fetchJoinedEvents(
                        username,
                        setJoinedEvents,
                        setLoading,
                        setMessage
                      )
                    )
                  }
                />
              }
            />

            <Route
              path="profile"
              element={
                <ProfilePage
                  username={username}
                  editData={editData}
                  onChange={(e) => handleEditChange(e, setEditData, editData)}
                  onSubmit={(e) =>
                    handleProfileUpdate({ e, user, editData, setMessage })
                  }
                  message={message}
                  onLogout={handleLogout}
                />
              }
            />

            <Route path="*" element={<Navigate to="calendarview" replace />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
