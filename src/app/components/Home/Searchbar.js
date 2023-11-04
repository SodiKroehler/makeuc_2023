import React, { useState } from 'react';

const Searchbar = () => {
  // State to store the input value
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle the input change
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to handle the form submission
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Implement your search logic here or redirect to a search results page
    console.log('Search Query:', searchQuery);
  };

  return (
    <div style={{ textAlign: 'center', paddingTop: '20vh' }}>
      <div style={{ fontSize: '48px', color: 'white' }}>NotesAnywhere</div>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Search"
          style={{
            width: '100%',
            maxWidth: '560px',
            padding: '15px 20px',
            fontSize: '18px',
            borderRadius: '24px',
            border: '1px solid #ddd',
            marginTop: '20px'
          }}
        />
      </form>
    </div>
  );
};

export default Searchbar;
