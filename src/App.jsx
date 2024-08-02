import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, Container, AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Login from './components/Login';
import Register from './components/Register';
import ResetPasswordRequest from './components/ResetPasswordRequest';
import ResetPassword from './components/ResetPassword';
import ProtectedData from './components/ProtectedData';
import { useNavigate } from 'react-router-dom';



function App() {

  const navigate = useNavigate();

  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1,textAlign:"center" }}>
            PASSWORD RESET TASK
          </Typography>
          <Button color="inherit" onClick={() => navigate("login")}>Login</Button>
          <Button color="inherit" onClick={() => navigate("register")}>Register</Button>
          <Button color="inherit" onClick={() => navigate("reset-password-request")}>Reset Password</Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Box mt={3}>
        
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset-password-request" element={<ResetPasswordRequest />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
            <Route path="/data" element={<ProtectedData />} />
            <Route path="/" element={<Login />} />
          </Routes>
        
        </Box>
      </Container>
      
      </>
  );
}

export default App;
