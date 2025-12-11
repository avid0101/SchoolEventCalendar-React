import React from 'react';

const EventsList = ({ events, renderItem }) => {
  if (!events || events.length === 0) {
    return null;
  }

  return (
    <>
      {events.map((event, index) => renderItem(event, index))}
    </>
  );
};

export default EventsList;
