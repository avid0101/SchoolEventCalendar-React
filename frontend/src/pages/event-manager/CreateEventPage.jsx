import { useNavigate } from 'react-router-dom';
import MessageAlert from '../../components/common/MessageAlert';
import EventForm from './components/EventForm';
import { postEvent, putEvent } from '../../services/api';
import { fetchEventsWrapper } from '../../utils/fetchEventsWrapper';

const CreateEventPage = ({
  events,
  setEvents,
  message,
  setMessage,
  loading,
  setLoading,
  formData,
  setFormData,
  editMode,
  setEditMode,
  editEventId,
  setEditEventId
}) => {
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      eventName: formData.title,
      eventDescription: formData.description,
      eventSchedule: formData.eventDate,
      startTime: formData.startTime + ":00",
      endTime: formData.endTime + ":00",
      eventLocation: formData.location,
      eventIsActive: true
    };

    try {
      if (editMode && editEventId) {
        await putEvent(editEventId, payload);
        setMessage('Event updated successfully!');
      } else {
        await postEvent(payload);
        setMessage('Event created successfully!');
      }

      await fetchEventsWrapper(setEvents, setLoading, setMessage);
      clearForm();
      navigate('/event-manager/managevent');
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }

    setTimeout(() => setMessage(''), 3000);
  };

  const clearForm = () => {
    setFormData({
      title: '',
      description: '',
      eventDate: '',
      startTime: '',
      endTime: '',
      location: ''
    });
    setEditMode(false);
    setEditEventId(null);
  };

  return (
    <>
      <h2>{editMode ? 'Edit Event' : 'Create New Event'}</h2>
      <MessageAlert message={message} />
      <EventForm
        formData={formData}
        onChange={handleInputChange}
        onSubmit={handleSubmit}
        onClear={clearForm}
        editMode={editMode}
      />
    </>
  );
};

export default CreateEventPage;