"use client"
import React, { useState } from 'react';
import './NewNote.css'; // make sure to create a corresponding CSS file

const NewNote = () => {
  const [school, setSchool] = useState('');
  const [topic, setTopic] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission logic here
    console.log({ school, topic, title, description });
  };

  return (
    <div className="new-note-container">
      <h1>Create New Note</h1>
      <form onSubmit={handleSubmit}>
        <select value={school} onChange={(e) => setSchool(e.target.value)}>
          {/* Populate these options with your actual data */}
          <option value="">Select School</option>
          <option value="school1">School 1</option>
          <option value="school2">School 2</option>
        </select>

        <select value={topic} onChange={(e) => setTopic(e.target.value)}>
          {/* Populate these options with your actual data */}
          <option value="">Select Topic</option>
          <option value="topic1">Topic 1</option>
          <option value="topic2">Topic 2</option>
        </select>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        ></textarea>

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default NewNote;
