import React, { useCallback, useContext } from "react";
import { RequestsContext } from "../ContexApi/ApiContext";
import { debounce } from "../services/debounce";

const FilterRequestComponent = () => {
  const { setFilter, setSearchTerm } = useContext(RequestsContext);
  const handleFilter = (filter) => {
    setFilter(filter);
  };
  const debouncedSetSearchTerm = useCallback(
    debounce((value) => {
      setSearchTerm(value);
    }, 300),
    []
  );

  const handleChange = (e) => {
    debouncedSetSearchTerm(e.target.value);
  };

  return (
    <div className="fixed w-full mt-20 bg-devtools-bg p-2 rounded-md flex flex-wrap items-center space-x-4">
      <div className="flex items-center space-x-2">
        <svg
          className="text-devtools-text w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 4a1 1 0 012 0v2h14V4a1 1 0 112 0v2h2a1 1 0 011 1v3a1 1 0 01-.293.707l-7 7a1 1 0 01-1.414 0l-7-7A1 1 0 015 10V7a1 1 0 011-1h2V4a1 1 0 10-2 0v2H5V4a1 1 0 10-2 0v2H3V4z"
          />
        </svg>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Filter"
          className="bg-devtools-bg text-devtools-text border border-devtools-border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-devtools-border"
        />
      </div>
      <label className="flex items-center text-devtools-text">
        <input
          type="checkbox"
          className="form-checkbox text-devtools-text border-devtools-border focus:ring-devtools-border"
        />
        <span className="ml-2">Invert</span>
      </label>
      <label className="flex items-center text-devtools-text">
        <input
          type="checkbox"
          className="form-checkbox text-devtools-text border-devtools-border focus:ring-devtools-border"
        />
        <span className="ml-2">Hide data URLs</span>
      </label>
      <label className="flex items-center text-devtools-text">
        <input
          type="checkbox"
          className="form-checkbox text-devtools-text border-devtools-border focus:ring-devtools-border"
        />
        <span className="ml-2">Hide extension URLs</span>
      </label>

      <div className="flex space-x-2 mt-2">
        {["All", "Fetch/XHR", "Doc", "CSS", "JS", "Font", "Img", "Other"].map(
          (filter) => (
            <button
              onClick={() => handleFilter(filter)}
              key={filter}
              className="bg-devtools-bg text-devtools-text border border-devtools-border rounded-md px-2 py-1 focus:outline-none hover:bg-devtools-hover"
            >
              {filter}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default FilterRequestComponent;
