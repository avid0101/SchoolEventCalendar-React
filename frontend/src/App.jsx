import React from 'react';
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import LandingPage from './pages/public/LandingPage';
import About from './pages/public/About';
import Contact from './pages/public/Contact';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import AuthModal from './components/common/AuthModal';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import ProtectedRoute from './pages/admin/ProtectedRoute';
import EventManager from './pages/event-manager/EventManager';
import StudentDashboard from './pages/student/StudentDashboard';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // If a `background` location was set in state, use it to render the
  // underlying page while showing a modal on top.
  const state = location.state;
  const background = state && state.background;

  return (
    <>
      <Routes location={background || location}>
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

      {background && (
        <Routes>
          <Route path="/login" element={
            <AuthModal onClose={() => navigate(-1)}>
              <Login isModal={true} onClose={() => navigate(-1)} />
            </AuthModal>
          } />
          <Route path="/register" element={
            <AuthModal onClose={() => navigate(-1)}>
              <Register isModal={true} onClose={() => navigate(-1)} />
            </AuthModal>
          } />
        </Routes>
      )}
    </>
  );
}

export default App;     
