// App.jsx
import React from 'react';
import NavBar from './components/Navbar';
import AlumniDirectory from './components/AlumniDirectory';
import ProfilePage from './components/ProfilePage';
import EventManagement from './components/EventManagement';

const App = () => {
  const sampleAlumni = {
    name: "John Doe",
    batch: "2015",
    occupation: "Software Engineer",
    bio: "John is a software engineer with over 5 years of experience in full-stack development.",
    photo: "https://via.placeholder.com/150"
  };

  return (
    <div className="App">
      <NavBar />
      <AlumniDirectory />
      <ProfilePage alumni={sampleAlumni} />
      <EventManagement />
    </div>
  );
};

export default App;
