import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import MessageAlert from '../../components/common/MessageAlert';
import StudentEventModal from './components/StudentEventModal';

export default function CalendarPage({ calendarEvents, selectedEvent, setSelectedEvent, message, onJoin }) {
  return (
    <div>
      <h2>Event Calendar</h2>
      <MessageAlert message={message} />
      <FullCalendar
        plugins={[bootstrap5Plugin, dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={calendarEvents}
        eventClick={(info) => setSelectedEvent({
          eventId: info.event.id,
          eventName: info.event.title,
          eventSchedule: info.event.startStr.split("T")[0],
          startTime: info.event.startStr.split("T")[1] || "",
          endTime: info.event.endStr?.split("T")[1] || "",
          eventDescription: info.event.extendedProps.description,
          eventLocation: info.event.extendedProps.location,
          eventIsActive: info.event.extendedProps.status === "Active",
        })}
        headerToolbar={{ left: 'prev,next today', center: 'title', right: 'dayGridMonth,timeGridWeek,timeGridDay' }}
      />
      <StudentEventModal event={selectedEvent} onJoin={onJoin} onClose={() => setSelectedEvent(null)} />
    </div>
  );
}
