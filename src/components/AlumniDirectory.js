// AlumniDirectory.js
import React from 'react';
import './AlumniDirectory.css'; // Add your styles here

const AlumniDirectory = () => {
  // Sample data (you would fetch this from an API)
  const alumniList = [
    { name: 'John Doe', batch: '2015', occupation: 'Software Engineer' },
    { name: 'Jane Smith', batch: '2016', occupation: 'Data Scientist' },
  ];

  return (
    <div className="alumni-directory">
      <h2>Alumni Directory</h2>
      <ul>
        {alumniList.map((alumni, index) => (
          <li key={index}>
            <strong>{alumni.name}</strong> - {alumni.batch} - {alumni.occupation}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlumniDirectory;
