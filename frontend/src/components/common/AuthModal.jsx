import React from 'react';
import './AuthModal.css';

export default function AuthModal({ children, onClose }) {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget && onClose) onClose();
  };

  return (
    <div className="auth-modal-backdrop" onClick={handleBackdropClick} role="dialog" aria-modal="true">
      <div className="auth-modal-content">
        <button className="auth-modal-close" onClick={onClose} aria-label="Close">×</button>
        {children}
      </div>
    </div>
  );
}
