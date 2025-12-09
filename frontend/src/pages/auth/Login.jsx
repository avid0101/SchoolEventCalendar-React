import React, { useState } from 'react';
import './Login.css';
import Header from '../../components/layout/Header';
import BackButton from '../../components/common/BackButton';
import LoginForm from './LoginForm';
import { useLoginHandler } from '../../hooks/useLoginHandler';
import { useNavigation } from '../../hooks/useNavigation';

export default function Login({ isModal = false, onClose }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { handleLogin, error, loading } = useLoginHandler();
  const { navigateToHome } = useNavigation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleLogin(username, password);
  };

  if (!isModal) {
    return (
      <div className="landing-page auth-full">
        <Header />
        <div className="loginContainer">
          {!isModal && <BackButton onClick={onClose ? onClose : navigateToHome} />}

          <LoginForm
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            error={error}
            loading={loading}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="loginContainer">
      {isModal && (
        <button className="auth-card-close" onClick={onClose} aria-label="Close">×</button>
      )}

      <LoginForm
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        error={error}
        loading={loading}
        onSubmit={handleSubmit}
      />
    </div>
  );
}