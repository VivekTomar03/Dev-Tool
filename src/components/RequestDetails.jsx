import React, { useContext, useState } from 'react';
import Tabs from './Tabs';
import { RequestsContext } from '../ContexApi/ApiContext';

const RequestDetails = () => {
  const { selectedRequest:request , setSelectedRequest } = useContext(RequestsContext)
  const [activeTab, setActiveTab] = useState('Headers');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Headers':
        return (
          <pre className="bg-devtools-hover p-2 rounded">
            {JSON.stringify(request?.headers, null, 2)}
          </pre>
        );
      case 'Response':
        return (
          <pre className="bg-devtools-hover p-2 rounded">
            {JSON.stringify(request?.response, null, 2)}
          </pre>
        );
      case 'Payload':
        return (
          <pre  className="bg-devtools-hover p-2 rounded w-full">
            {JSON.stringify(request?.payload, null, 2)}
          </pre>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{color:"white"}} className="p-4 bg-devtools-bg h-full w-full">
      <Tabs tabs={[ 'Headers', 'Response', 'Payload']} setSelectedRequest={setSelectedRequest} onSelect={setActiveTab} />
      <div style={{color:"white"}} className="mt-4 w-fit">{renderTabContent()}</div>
    </div>
  );
};

export default RequestDetails;
