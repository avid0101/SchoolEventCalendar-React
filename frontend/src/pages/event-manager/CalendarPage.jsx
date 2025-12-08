import CalendarView from './components/CalendarView';

const CalendarPage = ({ events, setSelectedEvent }) => {
  const handleEventClick = (clickInfo) => {
    const clicked = events.find(
      (evt) => evt.eventId.toString() === clickInfo.event.id
    );
    setSelectedEvent(clicked);
  };

  return <CalendarView events={events} onEventClick={handleEventClick} />;
};

export default CalendarPage;