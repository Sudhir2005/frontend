// ProfilePage.js
import React from 'react';
import './ProfilePage.css'; // Add your styles here

const ProfilePage = ({ alumni }) => {
  return (
    <div className="profile-page">
      <h2>{alumni.name}</h2>
      <img src={alumni.photo} alt={`${alumni.name}`} />
      <p><strong>Batch:</strong> {alumni.batch}</p>
      <p><strong>Occupation:</strong> {alumni.occupation}</p>
      <p>{alumni.bio}</p>
    </div>
  );
};

export default ProfilePage;
