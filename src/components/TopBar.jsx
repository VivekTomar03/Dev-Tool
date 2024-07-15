import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const TopBar = () => {
  return (
    <div className="flex items-center bg-devtools-bg h-10 px-2 text-devtools-text fixed w-full">
      <button className="hover:bg-devtools-hover p-1 rounded">
        <i className="fas fa-th-large"></i>
      </button>
      <div className="flex items-center space-x-4 ml-2">
        <span className="hover:bg-devtools-hover p-1 rounded">Elements</span>
        <span className="hover:bg-devtools-hover p-1 rounded">Console</span>
        <span style={{color:"orange"}} className="hover:bg-devtools-hover p-1 rounded">Network</span>
        <span className="hover:bg-devtools-hover p-1 rounded">Sources</span>
        <span className="hover:bg-devtools-hover p-1 rounded">Performance</span>
        <span className="hover:bg-devtools-hover p-1 rounded">Memory</span>
        <span className="hover:bg-devtools-hover p-1 rounded">Application</span>
        <span className="hover:bg-devtools-hover p-1 rounded">Security</span>
        <span className="hover:bg-devtools-hover p-1 rounded">Lighthouse</span>
        <span className="hover:bg-devtools-hover p-1 rounded">Recorder</span>
      </div>
      <div className="flex items-center ml-auto space-x-2">
        <button className="hover:bg-devtools-hover p-1 rounded">
          <i className="fas fa-times-circle"></i>
        </button>
        <button className="hover:bg-devtools-hover p-1 rounded">
          <i className="fas fa-exclamation-triangle"></i>
        </button>
        <button className="hover:bg-devtools-hover p-1 rounded">
          <i className="fas fa-comment"></i>
        </button>
        <button className="hover:bg-devtools-hover p-1 rounded">
          <i className="fas fa-cog"></i>
        </button>
        <button className="hover:bg-devtools-hover p-1 rounded">
          <i className="fas fa-ellipsis-v"></i>
        </button>
      </div>
    </div>
  );
};

export default TopBar;
