// AlumniDirectory.jsx
import React from 'react';
import './AlumniDirectory.css';

const alumniData = [
  { name: "John Doe", batch: "2015", occupation: "Software Engineer" },
  { name: "Jane Smith", batch: "2016", occupation: "Data Scientist" },
  // More alumni data here
];

const AlumniDirectory = () => {
  return (
    <div className="directory">
      <h2>Alumni Directory</h2>
      <ul className="directory-list">
        {alumniData.map((alumni, index) => (
          <li key={index} className="directory-item">
            <h3>{alumni.name}</h3>
            <p>Batch: {alumni.batch}</p>
            <p>Occupation: {alumni.occupation}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlumniDirectory;
