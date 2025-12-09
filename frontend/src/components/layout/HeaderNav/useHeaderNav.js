import { useNavigate } from 'react-router-dom';

export function useHeaderNav() {
  const navigate = useNavigate();

  const handleGoCreate = () => navigate('/event-manager/createvent');
  const handleGoManage = () => navigate('/event-manager/managevent');
  const handleGoCalendar = () => navigate('/event-manager/calendarview');
  const handleGoProfile = () => navigate('/event-manager/profile');

  return {
    handleGoCreate,
    handleGoManage,
    handleGoCalendar,
    handleGoProfile,
  };
}
