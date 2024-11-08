import React from 'react';

const Filter = ({ setTitleFilter, setRatingFilter }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        onChange={(e) => setTitleFilter(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        onChange={(e) => setRatingFilter(e.target.value)}
      />
    </div>
  );
};

export default Filter;