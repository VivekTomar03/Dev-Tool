import React, { useState, useEffect } from 'react';

const RequestItem = ({ request, onClick, selectedRequest , Throttle}) => {


    const [loading, setLoading] = useState(true);
    const [status, setStatus] = useState('Pending');
    const [time, setTime] = useState('0B');
    useEffect(() => {
        const delay = Math.floor(Math.random() * 2000) + 1000;
         setLoading(true)
        const timer = setTimeout(() => {
          setLoading(false);
          setStatus(request.status);
          setTime(request.time);
        }, delay);
    
        return () => clearTimeout(timer);
      }, [request, Throttle]);
    

    return (
        <tr onClick={() => onClick(request)} className="cursor-pointer hover:bg-gray-700">
            <td className="p-2">{request.url || "Requesting..."}</td>
            {!selectedRequest && <>
                <td className="p-2">{loading ? "Pending" : status}</td>
                <td className="p-2">{request.method}</td>
                <td className="p-2">{request.type}</td>
                <td className="p-2">{request.size}</td>
                <td className="p-2">{loading ? "0B" : time}</td>
            </>}
        </tr>
    );
};

export default RequestItem;
