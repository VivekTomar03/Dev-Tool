import React from 'react';

const RequestFilter = ({ filter, setFilter }) => {
  return (
    <div className="p-4 border-b border-gray-700">
      <select
        className="bg-gray-800 text-white p-2 rounded"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="">All</option>
        <option value="XHR">XHR</option>
        <option value="JS">JS</option>
        <option value="CSS">CSS</option>
      </select>
    </div>
  );
};

export default RequestFilter;
