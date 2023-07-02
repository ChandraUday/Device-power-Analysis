import axios from 'axios';

export const fetchDevicePowerLogs = async () => {
    try {
      const response = await axios.get(
        'https://docs.google.com/spreadsheets/d/1YWmiajsZebbaFf8jf4ea0Do7O_VSCbc5Z-vlMYHFOG0/export?format=csv'
      );
      return response.data; 
    } 
    catch (error) {
      console.error('Error fetching device power logs:', error);
      return null; 
    }
  };
  