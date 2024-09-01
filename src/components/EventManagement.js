// EventManagement.jsx
import React from 'react';
import './EventManagement.css';

const eventsData = [
  { title: "Annual Alumni Meet", date: "2024-12-15", description: "Reconnect with your batchmates and enjoy a gala evening." },
  { title: "Webinar on Career Development", date: "2024-11-10", description: "Join us for a discussion on career growth." },
  // More events here
];

const EventManagement = () => {
  return (
    <div className="events">
      <h2>Upcoming Events</h2>
      <ul className="events-list">
        {eventsData.map((event, index) => (
          <li key={index} className="event-item">
            <h3>{event.title}</h3>
            <p>Date: {event.date}</p>
            <p>{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventManagement;
