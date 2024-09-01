// EventManagement.js
import React from 'react';
import './EventManagement.css'; // Add your styles here

const EventManagement = () => {
  // Sample data for events
  const events = [
    { name: 'Annual Meetup', date: '2024-09-15', location: 'College Auditorium' },
    { name: 'Webinar on AI', date: '2024-10-10', location: 'Online' },
  ];

  return (
    <div className="event-management">
      <h2>Event Management</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <strong>{event.name}</strong> - {event.date} - {event.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventManagement;
