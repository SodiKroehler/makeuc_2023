import React, { useState } from 'react';
import './Notes.css';
import { Component } from 'react';



class SchoolList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        query: '',
        filteredSchools: schools,
      };
    }
  
    handleSearch = (e) => {
      const query = e.target.value.toLowerCase();
      const filteredSchools = schools.filter((school) =>
        school.name.toLowerCase().includes(query)
      );
      this.setState({ query, filteredSchools });
    };
  
    render() {
      return (
        <div>
          <input
            type="text"
            placeholder="Search for a school"
            onChange={this.handleSearch}
          />
          <ul>
            {this.state.filteredSchools.map((school) => (
              <li key={school.name}>
                <h3>{school.name}</h3>
                <ul>
                  {school.classes.map((course) => (
                    <li key={course.id}>{course.name}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
  
  export default SchoolList;