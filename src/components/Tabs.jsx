import React, { useState } from 'react';

const Tabs = ({ tabs, onSelect , setSelectedRequest }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    onSelect(tab);
  };

  return (
    <div style={{color:"white"}} className="flex space-x-4 border-b border-gray-500 font-bold">
      <button onClick={() => setSelectedRequest(null)}>X</button>
      {tabs.map((tab) => (
        <button
        tyle={{color:"white"}}
          key={tab}
          className={`px-4 py-2 ${tab === activeTab ? 'border-b-2 border-blue-500' : ''}`}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
