import React from 'react';
import './Navbar.css'; // Make sure to create a Navbar.css file for your styles
import Image from 'next/image'

const Navbar = () => {
  // Define a function to handle button clicks if needed
  const handleNavClick = (page) => {
    console.log(`Navigating to ${page}`);
    // Here you would typically do a navigation action, like using React Router to change the page
  };

  return (
    <nav className="navbar">
      <button className="nav-item" onClick={() => handleNavClick('home')}>Home</button>
      <button className="nav-item" onClick={() => handleNavClick('about')}>About</button>
      <button className="notes-button" onClick={() => handleNavClick('notes')}>Notes</button>
      <div className="navbar-right">
        <button className="nav-item new-note" onClick={() => handleNavClick('new-note')}>New Note +</button>
        <button className="profile-pic" onClick={() => handleNavClick('profile')}>
            <Image src="/profile.png" alt="Notes Anywhere" width={50} height={50} />
        </button>
        
      </div>
    </nav>
  );
};

export default Navbar;
