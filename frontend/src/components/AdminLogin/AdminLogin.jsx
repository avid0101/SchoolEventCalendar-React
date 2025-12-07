import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../Login/components/LoginForm';
import { login } from '../../services/api';
import './AdminLogin.css';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Call the backend API to authenticate
      const response = await login(username, password);
      const userData = response.data;

      console.log('Login response:', userData);

      // Check if user is an Admin (typeUser should be 'A' for admin)
      // OR if you're using EventManager as admin, check for 'E'
      if (userData.typeUser === 'E' || userData.typeUser === 'A') {
        // Store admin token and user data
        localStorage.setItem('admin_token', 'valid');
        localStorage.setItem('admin_user', JSON.stringify(userData));
        
        // Navigate to admin dashboard
        setTimeout(() => {
          navigate('/admin/dashboard');
        }, 100);
      } else {
        setError('Access denied. Admin privileges required.');
        setLoading(false);
      }
    } catch (err) {
      console.error('Login error:', err);
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
          Go back to Landing page <a href="/landing">click here</a>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;