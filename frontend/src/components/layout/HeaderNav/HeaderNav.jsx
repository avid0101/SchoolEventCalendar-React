import React from 'react';
import styles from './HeaderNav.module.css';
import { useHeaderNav } from './useHeaderNav';

function HeaderNav() {
  const { handleGoCreate, handleGoManage, handleGoCalendar, handleGoProfile } = useHeaderNav();

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
          <li onClick={handleGoProfile} role="button" tabIndex={0}>User</li>
        </ul>
      </div>
    </header>
  );
}

export default HeaderNav;
