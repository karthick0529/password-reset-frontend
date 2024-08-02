import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const API_URL = 'https://password-reset-task-1.onrender.com/api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/authenticate`, { email, password });
      localStorage.setItem('token', response.data.token);
      navigate('/data');
    } catch (error) {
      setMessage(error.response ? error.response.data.message : 'An error occurred.');
    }
  };

  return (
    <Container>
      <Typography variant="h4">LOGIN</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">Login</Button>
        {message && <Box mt={2}><Typography color="error">{message}</Typography></Box>}
      </form>
    </Container>
  );
};

export default Login;
