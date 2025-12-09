import React, { useContext, useEffect } from 'react';
import { DashboardContext } from '../../context/DashboardContext.jsx';
import FormInput from '../../components/common/FormInput';
import LoadingButton from '../../components/common/LoadingButton';
import MessageDisplay from '../../components/common/MessageDisplay';

export default function CreateEventManager({ onBack }) {
  const {
    formData,
    setFormData,
    editMode,
    handleUserSubmit,
    resetForms,
    setEditMode,
    setEditId,
    message,
    loading,
    activeSection,
    setActiveSection
  } = useContext(DashboardContext);

  // Automatically return to event manager table after successful update
  useEffect(() => {
    if (!editMode && activeSection === 'viewEventManagers') {
      onBack();
    }
  }, [editMode, activeSection, onBack]);

  const handleCancel = () => {
    resetForms();
    setEditMode(false);
    setEditId(null);
    setActiveSection('viewEventManagers');
    onBack();
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await handleUserSubmit(e, false); // false = isEventManager
    onBack();
  };

  return (
    <div className="create-eventmanager-form-wrapper">
      <form onSubmit={handleFormSubmit}>
        <div className="admin-form-header">
          <h2>{editMode ? 'Edit Event Manager' : 'Create Event Manager'}</h2>
        </div>
        
        <p className="form-subtitle">
          {editMode 
            ? 'Update the account details and permissions below.' 
            : 'Fill in the details below to register a new event manager.'}
        </p>

        <MessageDisplay message={message} />

        <div className="admin-form-grid">
          <div className="section-divider">Account Credentials</div>

          <FormInput
            id="username"
            label="Username"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            required
            placeholder="e.g. manager123"
          />

          <FormInput
            id="password"
            label="Password"
            type="password"
            value={formData.password || ''}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required={!editMode}
            placeholder={editMode ? "Leave blank to keep current" : "Min. 6 characters"}
          />

          <div className="section-divider">Personal Information</div>

          <div className="name-row">
            <FormInput
              id="firstName"
              label="First Name"
              value={formData.firstname}
              onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
              required
              placeholder="First Name"
            />

            <FormInput
              id="middleName"
              label="Middle Name"
              value={formData.middlename}
              onChange={(e) => setFormData({ ...formData, middlename: e.target.value })}
              placeholder="Middle Name"
            />

            <FormInput
              id="lastName"
              label="Last Name"
              value={formData.lastname}
              onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
              required
              placeholder="Last Name"
            />
          </div>
        </div>

        <div className="form-actions">
          <button type="button" className="back-btn" onClick={handleCancel}>
            Cancel
          </button>
          
          <LoadingButton
            type="submit"
            className="registerButton"
            loading={loading}
            loadingText={editMode ? 'Updating...' : 'Registering...'}
          >
            {editMode ? 'Update Manager' : 'Create Manager'}
          </LoadingButton>
        </div>
      </form>
    </div>
  );
}