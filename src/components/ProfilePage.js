// ProfilePage.jsx
import React from 'react';
import './ProfilePage.css';

const ProfilePage = ({ alumni }) => {
  return (
    <div className="profile">
      <img src={alumni.photo} alt={alumni.name} className="profile-photo" />
      <h2>{alumni.name}</h2>
      <p>Batch: {alumni.batch}</p>
      <p>Occupation: {alumni.occupation}</p>
      <p>Bio: {alumni.bio}</p>
    </div>
  );
};

export default ProfilePage;
