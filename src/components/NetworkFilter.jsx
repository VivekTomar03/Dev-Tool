import React, { useContext } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { RequestsContext } from '../ContexApi/ApiContext';

const NetworkFilter = () => {
  const {setThrottle} = useContext(RequestsContext)
  return (
    <div className="flex items-center bg-devtools-bg h-10 px-5 gap-3 fixed w-full mt-10">
      <button className="hover:bg-devtools-hover p-1 rounded">
        <i className="fas fa-stop-circle text-devtools-text"></i>
      </button>
      <button className="hover:bg-devtools-hover p-1 rounded">
        <i className="fas fa-ban text-devtools-text"></i>
      </button>
      <button className="hover:bg-devtools-hover p-1 rounded">
        <i className="fas fa-filter text-devtools-text"></i>
      </button>
      <button className="hover:bg-devtools-hover p-1 rounded">
        <i className="fas fa-search text-devtools-text"></i>
      </button>
      <input type="checkbox" className="ml-2 text-devtools-text" />
      <span className="text-devtools-text ml-1">Preserve log</span>
      <input type="checkbox" className="ml-2 text-devtools-text" />
      <span className="text-devtools-text ml-1">Disable cache</span>
      <select onChange={(e) => setThrottle(e.target.value)}  className="bg-devtools-bg text-devtools-text border-devtools-border rounded px-3 py-2 outline-none">
          <option value={1000}>No Throttling</option>
          <option value={2000}>Fast 3G</option>
          <option value={3000}>Slow 3G</option>
          <option value={5000}>Custom</option>
        </select>
      <button className="hover:bg-devtools-hover p-1 rounded ml-2">
        <i className="fas fa-wifi text-devtools-text"></i>
      </button>
      <button className="hover:bg-devtools-hover p-1 rounded ml-2">
        <i className="fas fa-upload text-devtools-text"></i>
      </button>
      <button className="hover:bg-devtools-hover p-1 rounded ml-2">
        <i className="fas fa-download text-devtools-text"></i>
      </button>
      <button className="hover:bg-devtools-hover p-1 rounded ml-auto">
        <i className="fas fa-cog text-devtools-text"></i>
      </button>
    </div>
  );
};

export default NetworkFilter;
