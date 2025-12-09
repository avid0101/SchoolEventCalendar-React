import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HeaderNav.module.css';

function HeaderNav({ username }) {
  const navigate = useNavigate();

  const handleGoCreate = () => navigate('/event-manager/createvent');
  const handleGoManage = () => navigate('/event-manager/managevent');
  const handleGoCalendar = () => navigate('/event-manager/calendarview');
  const handleGoProfile = () => navigate('/event-manager/profile');

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo} onClick={handleGoCalendar} role="button" tabIndex={0}>
          Event Manager Portal
        </div>
        <ul className={styles.links}>
          <li onClick={handleGoCreate} role="button" tabIndex={0}>Create Event</li>
          <li onClick={handleGoManage} role="button" tabIndex={0}>Manage Events</li>
          <li onClick={handleGoCalendar} role="button" tabIndex={0}>Calendar View</li>
          <li onClick={handleGoProfile} role="button" tabIndex={0}>{username || 'User'}</li>
        </ul>
      </div>
    </header>
  );
}

export default HeaderNav;
