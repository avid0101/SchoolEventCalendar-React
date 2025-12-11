export const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};

export const formatTime = (timeString) => {
  if (!timeString) return '';
  const [hours, minutes] = timeString.split(':');
  const hour = parseInt(hours);
  const min = minutes || '00';
  const period = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
  return `${displayHour}:${min} ${period}`;
};

export const getEventStatus = (event) => {
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

export const formatDateTime = (event) => {
  const date = formatDate(event.eventSchedule);
  const startTime = formatTime(event.startTime);
  const endTime = formatTime(event.endTime);
  return `${date} ${startTime} - ${endTime}`;
};
