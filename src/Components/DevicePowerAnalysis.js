import React, { useEffect, useState } from 'react';
import { fetchDevicePowerLogs } from '../services/api';


const DevicePowerAnalysis = () => {

    const [devicePowerLogs, setDevicePowerLogs] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
          const data = await fetchDevicePowerLogs();
          if (data) {
            setDevicePowerLogs(data);
          }
        };
    
        fetchData();
      }, []);

      return (
        <div>
          <h1>Device Power Analysis</h1>
          
        </div>
      );
    };
    
    export default DevicePowerAnalysis;