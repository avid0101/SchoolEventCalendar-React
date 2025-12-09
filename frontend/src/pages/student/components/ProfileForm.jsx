import React, { useState } from 'react';
import './ProfileForm.css';

const ProfileForm = ({ 
  editData, 
  onChange, 
  loading = false,
  errors = {},
  onSubmit,
  onLogout,
  message,
  title = "Profile Information",
  subtitle = "Update your personal details and password"
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit();
  };

  return (
    <div className="profile-form-container">
      {/* Message Alert - Now inside the main container */}
      {message && (
        <div className="message-alert">
          <div className="alert-content">
            <span className="alert-icon">ℹ️</span>
            <span className="alert-text">{message}</span>
          </div>
        </div>
      )}

      <div className="profile-form-header">
        <div className="header-icon">
          <div className="icon-circle">👤</div>
        </div>
        <h2 className="form-main-title">{title}</h2>
        <p className="form-main-subtitle">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="profile-form">
        {/* Personal Information Section */}
        <div className="form-section">
          <div className="section-label">
            <span className="section-number">01</span>
            <h3 className="section-title">Personal Information</h3>
          </div>
          
          <div className="form-grid">
            {/* First Name */}
            <div className="form-group">
              <div className="form-label-row">
                <label htmlFor="firstname" className="form-label">
                  First Name
                </label>
                <span className="required-indicator">Required</span>
              </div>
              <div className="input-container">
                <input
                  id="firstname"
                  type="text"
                  name="firstname"
                  value={editData.firstname || ''}
                  onChange={onChange}
                  className={`form-input ${errors.firstname ? 'input-error' : ''}`}
                  placeholder="John"
                  disabled={loading}
                  required
                />
                {errors.firstname && (
                  <div className="error-message">
                    <span className="error-icon">⚠</span>
                    {errors.firstname}
                  </div>
                )}
              </div>
            </div>

            {/* Middle Name */}
            <div className="form-group">
              <div className="form-label-row">
                <label htmlFor="middlename" className="form-label">
                  Middle Name
                </label>
                <span className="optional-indicator">Optional</span>
              </div>
              <div className="input-container">
                <input
                  id="middlename"
                  type="text"
                  name="middlename"
                  value={editData.middlename || ''}
                  onChange={onChange}
                  className="form-input"
                  placeholder="Michael"
                  disabled={loading}
                />
                <div className="input-hint">Leave blank if not applicable</div>
              </div>
            </div>

            {/* Last Name */}
            <div className="form-group">
              <div className="form-label-row">
                <label htmlFor="lastname" className="form-label">
                  Last Name
                </label>
                <span className="required-indicator">Required</span>
              </div>
              <div className="input-container">
                <input
                  id="lastname"
                  type="text"
                  name="lastname"
                  value={editData.lastname || ''}
                  onChange={onChange}
                  className={`form-input ${errors.lastname ? 'input-error' : ''}`}
                  placeholder="Doe"
                  disabled={loading}
                  required
                />
                {errors.lastname && (
                  <div className="error-message">
                    <span className="error-icon">⚠</span>
                    {errors.lastname}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Password Section */}
        <div className="form-section">
          <div className="section-label">
            <span className="section-number">02</span>
            <h3 className="section-title">Password Update</h3>
          </div>
          <p className="section-description">
            Update your password for enhanced security. Leave blank to keep your current password.
          </p>

          <div className="form-grid">
            {/* New Password */}
            <div className="form-group">
              <div className="form-label-row">
                <label htmlFor="password" className="form-label">
                  New Password
                </label>
                <span className="optional-indicator">Optional</span>
              </div>
              <div className="input-container">
                <div className="password-wrapper">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={editData.password || ''}
                    onChange={onChange}
                    className={`form-input ${errors.password ? 'input-error' : ''}`}
                    placeholder="••••••••"
                    disabled={loading}
                    autoComplete="new-password"
                  />
                  {/* In the New Password section */}
                  <button
                    type="button"
                    className="visibility-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={loading}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    <span className="toggle-icon">
                      {showPassword ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                          <line x1="1" y1="1" x2="23" y2="23" />
                        </svg>
                      ) : (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      )}
                    </span>
                    
                  </button>
                </div>
                {errors.password ? (
                  <div className="error-message">
                    <span className="error-icon">⚠</span>
                    {errors.password}
                  </div>
                ) : (
                  <div className="password-strength">
                    <div className="strength-meter">
                      <div 
                        className={`strength-bar ${editData.password ? (editData.password.length >= 8 ? 'strong' : 'weak') : ''}`}
                        style={{ width: editData.password ? `${Math.min(100, editData.password.length * 12.5)}%` : '0%' }}
                      ></div>
                    </div>
                    <div className="strength-hint">
                      {!editData.password ? 'Enter a password' :
                       editData.password.length < 8 ? 'Weak - Use 8+ characters' :
                       'Strong password ✓'}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Confirm Password */}
            <div className="form-group">
              <div className="form-label-row">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <span className="optional-indicator">Required if changing</span>
              </div>
              <div className="input-container">
                <div className="password-wrapper">
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={editData.confirmPassword || ''}
                    onChange={onChange}
                    className={`form-input ${errors.confirmPassword ? 'input-error' : ''}`}
                    placeholder="••••••••"
                    disabled={loading}
                    autoComplete="new-password"
                  />
                    {/* In the Confirm Password section */}
                  <button
                    type="button"
                    className="visibility-toggle"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    disabled={loading}
                    aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                  >
                    <span className="toggle-icon">
                      {showConfirmPassword ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                          <line x1="1" y1="1" x2="23" y2="23" />
                        </svg>
                      ) : (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      )}
                    </span>
                    
                  </button>
                  </div>
                  {errors.confirmPassword ? (
                    <div className="error-message">
                      <span className="error-icon">⚠</span>
                      {errors.confirmPassword}
                    </div>
                  ) : editData.password && editData.confirmPassword && (
                    <div className={`password-match ${editData.password === editData.confirmPassword ? 'match-success' : 'match-error'}`}>
                      <span className="match-icon">
                        {editData.password === editData.confirmPassword ? '✓' : '✗'}
                      </span>
                      <span className="match-text">
                        {editData.password === editData.confirmPassword ? 
                          'Passwords match' : 
                          'Passwords do not match'}
                      </span>
                    </div>
                )}
              </div>
            </div>
          </div>
        </div>

        
      </form>
    </div>
  );
};

export default ProfileForm;