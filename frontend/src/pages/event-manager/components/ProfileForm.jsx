const ProfileForm = ({ editData, onChange, onSubmit }) => {
  return (
    <>
      <div className="profile-header">
        <div className="profile-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
        <div className="profile-info">
          <h2>Profile Dashboard</h2>
          <p>Manage your personal information and account settings</p>
        </div>
      </div>

      <form onSubmit={onSubmit} className="profileForm">
        <div className="form-section-divider">
          <span className="divider-line"></span>
          <span className="divider-text">Personal Information</span>
          <span className="divider-line"></span>
        </div>

        <div className="profile-form-grid">
          <div className="formGroup">
            <label htmlFor="firstname">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              First Name
            </label>
            <input
              id="firstname"
              name="firstname"
              value={editData.firstname}
              onChange={onChange}
              placeholder="Enter first name"
              required
            />
          </div>

          <div className="formGroup">
            <label htmlFor="middlename">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              Middle Name
            </label>
            <input
              id="middlename"
              name="middlename"
              value={editData.middlename}
              onChange={onChange}
              placeholder="Enter middle name"
            />
          </div>

          <div className="formGroup">
            <label htmlFor="lastname">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              Last Name
            </label>
            <input
              id="lastname"
              name="lastname"
              value={editData.lastname}
              onChange={onChange}
              placeholder="Enter last name"
              required
            />
          </div>
        </div>

        <div className="form-section-divider">
          <span className="divider-line"></span>
          <span className="divider-text">Security Settings</span>
          <span className="divider-line"></span>
        </div>

        <div className="profile-form-grid">
          <div className="formGroup full-width">
            <label htmlFor="password">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              New Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={editData.password}
              onChange={onChange}
              placeholder="Leave blank to keep current password"
            />
            <span className="input-hint">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
              Only fill this if you want to change your password
            </span>
          </div>

          <div className="formGroup full-width">
            <label htmlFor="confirmPassword">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              value={editData.confirmPassword}
              onChange={onChange}
              placeholder="Confirm your new password"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default ProfileForm;