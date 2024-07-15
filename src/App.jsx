import React, { useState, useEffect, useContext } from "react";
import { fetchRequests } from "./services/requestService";
import RequestItem from "./components/RequestItem";
import RequestDetails from "./components/RequestDetails";
import CheckboxComponent from "./components/CheckboxComponent";
import FilterRequest from "./components/FilterRequest";
import NetworkFilter from "./components/NetworkFilter";
import TopBar from "./components/TopBar";
import { RequestsContext } from "./ContexApi/ApiContext";

const App = () => {
  const {
    requests,
    selectedRequest,
    setSelectedRequest,
    loading,
    setLoading,
    Throttle,
  } = useContext(RequestsContext);

  return (
    <>
      <TopBar />
      <NetworkFilter />
      <FilterRequest />
      <CheckboxComponent />
      <div className=" flex p-4 bg-devtools-bg h-screen pt-52">
        <div
          className={
            selectedRequest ? "w-1/3 overflow-auto" : "w-full overflow-auto"
          }
        >
          <table className="w-full text-left bg-devtools-bg text-gray-300">
            <thead>
              <tr>
                <th className="p-2">Name</th>
                {!selectedRequest && (
                  <>
                    <th className="p-2">Status</th>
                    <th className="p-2">Type</th>
                    <th className="p-2">Initiator</th>
                    <th className="p-2">Size</th>
                    <th className="p-2">Time</th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {requests.map((request) => (
                <RequestItem
                  Throttle={Throttle}
                  setLoading={setLoading}
                  loading={loading}
                  selectedRequest={selectedRequest}
                  key={request.id}
                  request={request}
                  onClick={setSelectedRequest}
                />
              ))}
            </tbody>
          </table>
        </div>
        {selectedRequest && (
          <div tyle={{ color: "white" }} className="w-1/2 overflow-scroll">
            {selectedRequest ? (
              <RequestDetails />
            ) : (
              <div className="p-4 text-center text-devtools-text text-cyan-50">
                Select a request to view details
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default App;
