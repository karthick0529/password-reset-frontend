import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Box } from '@mui/material';

const API_URL = 'https://password-reset-task-1.onrender.com/api';


const ProtectedData = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${API_URL}/data`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(response.data.message);
      } catch (error) {
        setData(error.response.data.message);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Typography variant="h4">Protected Data</Typography>
      {data && <Box mt={2}><Typography>{data}</Typography></Box>}
    </Container>
  );
};

export default ProtectedData;
