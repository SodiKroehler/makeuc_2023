'use client'
import React, { Component, useEffect } from 'react';
import {redirect} from 'next/navigation';
import { useAppDispatch, useAppSelector } from "../lib/redux/hooks";
import {setQuery} from '../lib/redux/gameSlice'

import './Notes.css'

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSchool: '',
      selectedTopic: '',
      selectedClass: '',
      selectedTitle: '',
      schools: [],
      filteredTopics: [],
      filteredClasses: [],
      filteredTitles: [],
      
    };
    
  }

  componentDidUpdate () {
    const callAPISchools = async () => {
      const query = await fetch('api/school?userID=clokp4tzg0004soz46ntd21uy')
      const repo = await query.json();
      schools(repo.schools)
  }
  callAPISchools();

    const callAPITopics = async () => {
      const query = await fetch('api/school?userID=clokp4tzg0004soz46ntd21uy')
      const repo = await query.json();
      filteredTopics(repo.topics)
  }
  callAPITopics();

  const callAPIClasses = async () => {
    const query = await fetch('api/school?userID=clokp4tzg0004soz46ntd21uy')
    const repo = await query.json();
    filteredClasses(repo.classes)
}
callAPIClasses();

const callAPITitles = async () => {
  const query = await fetch('api/school?userID=clokp4tzg0004soz46ntd21uy')
  const repo = await query.json();
  filteredTitles(repo.titles)
}
callAPITitles();


  }
  //queries topics by selected school
  // useEffect(() => {
  //   const callAPI = async () => {
  //       const query = await fetch('api/school?userID=clokp4tzg0004soz46ntd21uy')
  //       const repo = await query.json();
  //       filteredTopics(repo.topics)
  //   }
  //   callAPI();
  // }, [this.state.selectedSchool]);

  //queries classes by selected topic 
  // useEffect(() => {
  //   const callAPI = async () => {
  //       const query = await fetch('api/school?userID=clokp4tzg0004soz46ntd21uy')
  //       const repo = await query.json();
  //       filteredClasses(repo.classes)
  //   }
  //   callAPI();
  // }, [this.state.selectedTopic]);

  //queries Titles by selected class 
  // useEffect(() => {
  //   const callAPI = async () => {
  //       const query = await fetch('api/school?userID=clokp4tzg0004soz46ntd21uy')
  //       const repo = await query.json();
  //       filteredTitles(repo.titles)
  //   }
  //   callAPI();
  // }, [this.state.selectedClass]);

  handleSchoolChange = (e) => {
    this.setState({
      selectedSchool: e.target.value,
      selectedTopic: '',
      selectedClass: '',
      filteredTopics,
      filteredClasses: [],
      filteredTitles: [],
    });
  };

  handleTopicChange = (e) => {
    this.setState({
      selectedTopic: e.target.value,
      selectedClass: '',
      filteredClasses,
      filteredTitles: [],
    });
  };

  handleClassChange = (e) => {
    this.setState({
      selectedClass: e.target.value,
    });
  };

  handleRedirect = (e) => {
    // redirect('/note/' + e.id)
    redirect('/note/')
  }

  render() {
    return (
      <body className='body'>

        <div className='PageHeading'> <h1>ALL NOTES</h1></div>

        <div >
        <select className='form-group' value={this.state.selectedSchool} onChange={this.handleSchoolChange}>
          <option value="">Select School</option>
          {this.state.schools.map((school) => (
            <option key={school.id} value={school.name}>
              {school.name}
            </option>
          ))}
        </select>
        </div>
        <div>
        <select className='form-group' disabled={!this.state.selectedSchool} value={this.state.selectedTopic} onChange={this.handleTopicChange}>
          <option value="">Select Topic</option>
          {this.state.filteredTopics.map((topic) => (
            <option key={topic.id} value={topic.name}>
              {topic.name}
            </option>
          ))}
        </select>
        </div>

        <div>
        <select className='form-group' disabled={!this.state.selectedTopic} value={this.state.selectedClass} onChange={this.handleClassChange}>
          <option value="">Select Class</option>
          {this.state.filteredClasses.map((clazz) => (
            <option key={clazz.id} value={clazz.name}>
              {clazz.name}
            </option>
          ))}
        </select>
        </div>

        <div className='TopicStyles'>
        <select size={5} value={this.state.selectedTitle} disabled={!this.state.selectedClass} onChange={this.handleRedirect}>
          <option value="">Select Title</option>
          {this.state.filteredTitles.map((title, index) => (
            <option key={index} value={title}>
              {title}
            </option>
          ))}
        </select>
        </div>

        <div className='DescriptionStyles'>
          <title>Description</title>
          <p>
          {this.state.title ? this.state.title.disc : 'Description not available'}
          </p>
        </div>
      </body>
    );
  }
}

export default Notes;