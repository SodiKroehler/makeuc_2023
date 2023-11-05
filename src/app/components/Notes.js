'use client'
import React, { Component, useEffect, useState } from 'react';
import {redirect} from 'next/navigation';
import { useAppDispatch, useAppSelector } from "./../lib/redux/hooks";
import {searchSlice} from './../lib/redux/searchSlice'

import './Notes.css'
import Navbar from './Navbar';


const Notes = () => {
  const dispatch = useAppDispatch();
  let searchState = useAppSelector((state) => state.searchReducer);
  const[schools, setSchools] = useState([])
  const[topics, setTopics] = useState([])
  const[classes, setClasses] = useState([])

    useEffect(() => {
      const callAPI = async () => {
        const query = await fetch('api/getSchools?userID' + searchState.userID)
        const repo = await query.json();
        console.log(repo);
        setSchools(repo.schools)
      }
      callAPI();
  }, [searchState.school]);

    useEffect(() => {
      const callAPI = async () => {
        const query = await fetch('api/getTopics?userID' + searchState.userID + '&schoolID=' + searchState.schoolID)
        const repo = await query.json();
        setTopics(repo.topic)
      }
      callAPI();
  }, [searchState.school]);

    useEffect(() => {
      const callAPI = async () => {
        const query = await fetch('api/getClasses?userID' + searchState.userID + '&schoolID=' + searchState.schoolID + '&topicID=' + searchState.topicID)
        const repo = await query.json();
        setClasses(repo.classes)
      }
      callAPI();
  }, [searchState.class]);

  const handleSchoolChange = (e) => {
    dispatch(searchSlice.actions.addSchoolQuery(e.id))
  };

  const handleTopicChange = (e) => {
    dispatch(searchSlice.actions.addTopicQuery(e.id))
  };

  const handleClassChange = (e) => {
    dispatch(searchSlice.actions.addClassQuery(e.id))
  };

  const handleRedirect = (e) => {
    redirect('/note/' + e.id)
  }

  return (
    <body className='body'>

      <div className='PageHeading'> <h1>ALL NOTES</h1></div>

      <div className='group-group'>
      <select className='form-group' value={searchState.school} onChange={handleSchoolChange}>
        <option value="">Select School</option>
        {schools.map((school) => (
          <option key={school.id} value={school.name}>
            {school.name}
          </option>
        ))}
      </select>
      
      <select className='form-group' disabled={searchState.school == ''} value={searchState.class} onChange={handleTopicChange}>
        <option value="">Select Topic</option>
        {topics.map((topic) => (
          <option key={topic.id} value={topic.name}>
            {topic.name}
          </option>
        ))}
      </select>
      
      <select className='form-group' disabled={searchState.topic == ''} value={searchState.class} onChange={handleClassChange}>
        <option value="">Select Class</option>
        {classes.map((clazz) => (
          <option key={clazz.id} value={clazz.name}>
            {clazz.name}
          </option>
        ))}
      </select>
      </div>

      <div className='TopicStyles'>
      <select className='TopicStyles' size={5} value={searchState.results[searchState.selectedNote]} disabled={false} onChange={handleRedirect}>
        <option value="">Select Title | Description</option>
        {searchState.results.map((title, index) => (
          <option className='bodyText' key={index} value={title}>
            {title} | {title.desc}
          </option>
        ))}
      </select>
      </div>
    </body>
  );

}

// class Notes extends Component {
//   constructor(props) {
//     super(props);
    
//     this.state = {
//       // selectedSchool: '',
//       // selectedTopic: '',
//       // selectedClass: '',
//       // selectedTitle: '',
//       schools: [],
//       topics: [],

//       // filteredTopics: [],
//       // filteredClasses: [],
//       // filteredTitles: [],
      
//     };
    
//   }

//   componentDidUpdate () {
//     const callAPISchools = async () => {
//       const query = await fetch('api/school?userID' + searchState.userID)
//       const repo = await query.json();
//       this.state.schools = repo.schools;
//     }
//   callAPISchools();

//     const callAPITopics = async () => {
//       const query = await fetch('api/school?userID=clokp4tzg0004soz46ntd21uy')
//       const repo = await query.json();
//       filteredTopics(repo.topics)
//   }
//   callAPITopics();

//   const callAPIClasses = async () => {
//     const query = await fetch('api/school?userID=clokp4tzg0004soz46ntd21uy')
//     const repo = await query.json();
//     filteredClasses(repo.classes)
// }
// callAPIClasses();

// const callAPITitles = async () => {
//   const query = await fetch('api/school?userID=clokp4tzg0004soz46ntd21uy')
//   const repo = await query.json();
//   filteredTitles(repo.titles)
// }
// callAPITitles();


//   }
//   //queries topics by selected school
//   // useEffect(() => {
//   //   const callAPI = async () => {
//   //       const query = await fetch('api/school?userID=clokp4tzg0004soz46ntd21uy')
//   //       const repo = await query.json();
//   //       filteredTopics(repo.topics)
//   //   }
//   //   callAPI();
//   // }, [this.state.selectedSchool]);

//   //queries classes by selected topic 
//   // useEffect(() => {
//   //   const callAPI = async () => {
//   //       const query = await fetch('api/school?userID=clokp4tzg0004soz46ntd21uy')
//   //       const repo = await query.json();
//   //       filteredClasses(repo.classes)
//   //   }
//   //   callAPI();
//   // }, [this.state.selectedTopic]);

//   //queries Titles by selected class 
//   // useEffect(() => {
//   //   const callAPI = async () => {
//   //       const query = await fetch('api/school?userID=clokp4tzg0004soz46ntd21uy')
//   //       const repo = await query.json();
//   //       filteredTitles(repo.titles)
//   //   }
//   //   callAPI();
//   // }, [this.state.selectedClass]);

//   handleSchoolChange = (e) => {
//     dispatch(searchSlice.actions.addSchoolQuery(e.id))
//     // this.setState({
//     //   selectedSchool: e.target.value,
//     //   selectedTopic: '',
//     //   selectedClass: '',
//     //   filteredTopics,
//     //   filteredClasses: [],
//     //   filteredTitles: [],
//     // });
//   };

//   handleTopicChange = (e) => {
//     dispatch(searchSlice.actions.addTopicQuery(e.id))
//     // this.setState({
//     //   selectedTopic: e.target.value,
//     //   selectedClass: '',
//     //   filteredClasses,
//     //   filteredTitles: [],
//     // });
//   };

//   handleClassChange = (e) => {
//     dispatch(searchSlice.actions.addClassQuery(e.id))
//     // this.setState({
//     //   selectedClass: e.target.value,
//     // });
//   };

//   handleRedirect = (e) => {
//     // redirect('/note/' + e.id)
//     redirect('/note/')
//   }

//   render() {
//     return (
//       <body className='body'>

//         <div className='PageHeading'> <h1>ALL NOTES</h1></div>

//         <div className='group-group'>
//         <select className='form-group' value={this.state.selectedSchool} onChange={this.handleSchoolChange}>
//           <option value="">Select School</option>
//           {this.state.schools.map((school) => (
//             <option key={school.id} value={school.name}>
//               {school.name}
//             </option>
//           ))}
//         </select>
        
//         <select className='form-group' disabled={!this.state.selectedSchool} value={this.state.selectedTopic} onChange={this.handleTopicChange}>
//           <option value="">Select Topic</option>
//           {this.state.filteredTopics.map((topic) => (
//             <option key={topic.id} value={topic.name}>
//               {topic.name}
//             </option>
//           ))}
//         </select>
        
//         <select className='form-group' disabled={!this.state.selectedTopic} value={this.state.selectedClass} onChange={this.handleClassChange}>
//           <option value="">Select Class</option>
//           {this.state.filteredClasses.map((clazz) => (
//             <option key={clazz.id} value={clazz.name}>
//               {clazz.name}
//             </option>
//           ))}
//         </select>
//         </div>

//         <div className='TopicStyles'>
//         <select className='TopicStyles' size={5} value={this.state.selectedTitle} disabled={!this.state.selectedClass} onChange={this.handleRedirect}>
//           <option value="">Select Title | Description</option>
//           {this.state.filteredTitles.map((title, index) => (
//             <option className='bodyText' key={index} value={title}>
//               {title} | {title.disc}
//             </option>
//           ))}
//         </select>
//         </div>
//       </body>
//     );
//   }
// }

export default Notes;