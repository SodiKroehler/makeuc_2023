import React, { useState, useEffect } from 'react';
import './NotesDisplay.css'; // Assuming you have a CSS file for styles

const NotesDisplay = () => {
  const [notes, setNotes] = useState('');

  useEffect(() => {
    //API CALL
  }, []); // The empty array ensures this effect runs once after the component mounts

  return (
    <textarea 
      id="notesBox" 
      value={notes} 
      placeholder="Your notes will appear here..." 
      readOnly
    />
  );
};

export default NotesDisplay;
