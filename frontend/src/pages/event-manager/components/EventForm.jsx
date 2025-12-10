import './EventForm.css';

const EventForm = ({ formData, onChange, onSubmit, onClear, editMode }) => {
  return (
    <form onSubmit={onSubmit} className="formContainer">
      <div className="form-header">
        <div className="form-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        </div>
        <div>
          <h2>{editMode ? 'Edit Event' : 'Create New Event'}</h2>
          <p className="form-subtitle">
            {editMode 
              ? 'Update the event details below' 
              : 'Fill in the information to create a new event'}
          </p>
        </div>
      </div>

      <div className="form-grid">
        <div className="formGroup full-width">
          <label htmlFor="title">Event Title *</label>
          <input
            id="title"
            name="title"
            value={formData.title || ''}
            onChange={onChange}
            placeholder="e.g., Annual Science Fair"
            required
          />
        </div>

        <div className="formGroup full-width">
          <label htmlFor="description">Description *</label>
          <textarea
            id="description"
            name="description"
            value={formData.description || ''}
            onChange={onChange}
            placeholder="Describe your event in detail..."
            rows="4"
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="eventDate">Event Date *</label>
          <div className="input-with-icon">
            <input
              id="eventDate"
              type="date"
              name="eventDate"
              value={formData.eventDate || ''}
              onChange={onChange}
              required
            />
          </div>
        </div>

        <div className="formGroup">
          <label htmlFor="location">Location *</label>
          <div className="input-with-icon">
            <input
              id="location"
              name="location"
              value={formData.location || ''}
              onChange={onChange}
              placeholder="e.g., School Auditorium"
              required
            />
          </div>
        </div>

        <div className="formGroup">
          <label htmlFor="startTime">Start Time *</label>
          <div className="input-with-icon">
            <input
              id="startTime"
              type="time"
              name="startTime"
              value={formData.startTime || ''}
              onChange={onChange}
              required
            />
          </div>
        </div>

        <div className="formGroup">
          <label htmlFor="endTime">End Time *</label>
          <div className="input-with-icon">
            <input
              id="endTime"
              type="time"
              name="endTime"
              value={formData.endTime || ''}
              onChange={onChange}
              required
            />
          </div>
        </div>
      </div>

      <div className="formActions">
        <button type="submit" className="submitButton">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          {editMode ? 'Update Event' : 'Create Event'}
        </button>
        <button type="button" onClick={onClear} className="clearButton">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EventForm;