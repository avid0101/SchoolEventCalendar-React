import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../Login/components/LoginForm';
import './AdminLogin.css';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    console.log('Login attempt:', { username, password }); // Debug log

    // Simple admin check
    if (username.trim() === 'admin' && password.trim() === 'admin') {
      console.log('Login successful!'); // Debug log
      
      // ✅ Store token on successful login
      localStorage.setItem('admin_token', 'valid');
      
      // Small delay to ensure localStorage is set
      setTimeout(() => {
        navigate('/schooleventcalendar/admindashboard');
      }, 100);
    } else {
      console.log('Login failed - invalid credentials'); // Debug log
      setError('Invalid admin credentials. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="loginWrapper">
      <div className="loginContainer">
        <LoginForm
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          error={error}
          loading={loading}
          onSubmit={handleLogin}
          headerTitle="Admin Login"
          headerSubtitle="Enter admin credentials to access dashboard"
          hideSignupLink={true}
        />

        <div className="landingpageback">
          Go back to Landing page <a href="/schooleventcalendar/landing">click here</a>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;