// RequestsContext.js
import React, { createContext, useState, useEffect, useCallback } from 'react';
import { fetchRequests } from '../services/requestService';


export const RequestsContext = createContext();

export const RequestsProvider = ({ children }) => {
  const [requests, setRequests] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [loading, setLoading] = useState(false);
  const [thriedParty, setThirdParty] = useState(true);
  const [Throttle, setThrottle] = useState("");
  const [filter, setFilter] = useState("All");
 const [searchTerm , setSearchTerm] = useState("")
  const updateRequestStatus = useCallback((id, status) => {
    setRequests((prevRequests) =>
      prevRequests.map((req) =>
        req.id === id ? { ...req, status } : req
      )
    );
  }, []);

  useEffect(() => {
    console.log(searchTerm, "asfadfsdafsdf")
    setLoading(true);
    const fetchData = async (filterOption) => {
      const data = await fetchRequests(thriedParty, updateRequestStatus);
      setLoading(false);
      if (filterOption !== "All") {
        const filteredData = data.filter((el) => {
          return filterOption ? el.type === filterOption : el;
        });
        setRequests(filteredData);
      } else {
        setRequests(data);
      }
      if(searchTerm){
        let newSearchQueryData  = data.filter((el) => {
            return  el.url.toLowerCase().includes(searchTerm.toLowerCase())
        } )

        setRequests(newSearchQueryData);
      }
    };

    if (filter === "All") {
      fetchData("All");
    } else if (filter === "Fetch/XHR") {
      fetchData("xhr");
    } else if (filter === "Doc") {
      fetchData("Doc");
    }
  }, [thriedParty, filter, updateRequestStatus ,searchTerm]);

  return (
    <RequestsContext.Provider
      value={{
        requests,
        selectedRequest,
        setSelectedRequest,
        loading,
        setLoading,
        Throttle,
        setThrottle,
        filter,
        setFilter,
        thriedParty,
        setThirdParty,
        setSearchTerm
      }}
    >
      {children}
    </RequestsContext.Provider>
  );
};
