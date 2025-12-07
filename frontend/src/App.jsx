import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import StudentDashboard from './components/StudentDashboard/StudentDashboard';
import AdminLogin from './components/AdminLogin/AdminLogin';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import EventManager from './components/EventManager/EventManager';
import About from './components/LandingPage/components/About';
import Contact from './components/LandingPage/components/Contact';
import ProtectedRoute from './components/AdminDashboard/components/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/landing" />} />
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
      <Route path="/event-manager/*" element={<EventManager />} />
      <Route path="/student/*" element={<StudentDashboard />} />
    </Routes>
  );
}

export default App;     
