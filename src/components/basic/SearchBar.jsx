import React from 'react';
import './../../index.css';

function SearchBar({ searchQuery, setSearchQuery, extraStyle, placeholder = 'Search by name...' }) {
  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const searchStyle = {
    ...extraStyle,
    padding: '10px',
    fontSize: 16,
    width: 300,
    margiBottom: 20,
    border: '1px solid #ccc',
    borderRadius: 5,
  };

  return (
    <input
      type="text"
      style={searchStyle}
      // className="search-bar"
      placeholder={placeholder}
      onChange={handleSearch}
      value={searchQuery}
    />
  );
}

export default SearchBar;
