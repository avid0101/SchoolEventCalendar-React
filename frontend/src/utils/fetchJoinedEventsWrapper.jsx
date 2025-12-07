import { getJoinedEvents } from '../services/api';

export const fetchJoinedEventsWrapper = (username, setJoinedEvents, setLoading, setMessage) => {
  setLoading(true);
  getJoinedEvents(username)
    .then(res => {
      const data = Array.isArray(res) ? res : Array.isArray(res?.data) ? res.data : [];
      setJoinedEvents(data);
    })
    .catch(() => {
      setMessage('Error: Failed to fetch joined events');
      setJoinedEvents([]);
    })
    .finally(() => setLoading(false));
};
