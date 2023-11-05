"use client"
import React, { useState, useEffect } from 'react';
import './NewNote.css'; // make sure to create a corresponding CSS file

const NewNote = () => {
  const [schoolName, setSchool] = useState('');
  const [school, setSchoolList] = useState([]);
  const [topic, setTopic] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const topics = [];

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission logic here
    console.log({ school, topic, title, description });
  };

  useEffect(() => {
    const callAPI = async () => {
        const query = await fetch('api/school?userID=clokp4tzg0004soz46ntd21uy')
        const repo = await query.json();
        setSchoolList(repo.schools)
    }
    callAPI();
  }, []);


  return (
    <div className="new-note-container">
      <h1>Create New Note</h1>
      <form onSubmit={handleSubmit}>
        <select value={school} onChange={(e) => setSchool(e.target.value)}>
          {/* Populate these options with your actual data */}
           {schools.map((school) => (
            <option key={school.id} value={school.name}>
              {school.name}
            </option>
          ))}
        </select>

        <select value={topic} onChange={(e) => setTopic(e.target.value)}>
          <option value="">Select Topic</option>
          {topics.map((topicOption) => (
            <option key={topicOption.value} value={topicOption.value}>
              {topicOption.label}
            </option>
          ))}
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
