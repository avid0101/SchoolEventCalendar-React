import { useEffect } from 'react';
import { fetchEventsWrapper } from '../utils/fetchEventsWrapper';
import { fetchJoinedEventsWrapper } from '../utils/fetchJoinedEventsWrapper';

export default function useStudentEffects(user, {
  setEvents,
  setJoinedEvents,
  setLoading,
  setMessage,
  setEditData
}) {
  // Fetch events once on mount
  useEffect(() => {
    if (!user?.username) return;

    fetchEventsWrapper(setEvents, setLoading, setMessage);
    fetchJoinedEventsWrapper(user.username, setJoinedEvents, setLoading, setMessage);
  }, []); // only run once

  // Initialize profile edit data once
  useEffect(() => {
    if (!user) return;

    setEditData({
      firstname: user.firstname || '',
      middlename: user.middlename || '',
      lastname: user.lastname || '',
      password: '',
      confirmPassword: ''
    });
  }, []); // only run once
}
