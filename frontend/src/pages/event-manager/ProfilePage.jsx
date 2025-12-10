import MessageAlert from "../../components/common/MessageAlert";
import ProfileForm from "./components/ProfileForm";
import { updateUser } from '../../services/api';

const ProfilePage = ({
  user,
  message,
  setMessage,
  editData,
  setEditData
}) => {
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData(prev => ({ ...prev, [name]: value }));
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();

    if (!editData.firstname.trim() || !editData.lastname.trim()) {
      setMessage('First and Last names are required.');
      setTimeout(() => setMessage(''), 3000);
      return;
    }

    if (
      (editData.password || editData.confirmPassword) &&
      editData.password !== editData.confirmPassword
    ) {
      setMessage('Error: Passwords do not match');
      setTimeout(() => setMessage(''), 3000);
      return;
    }

    const isUnchanged =
      editData.firstname === user.firstname &&
      editData.middlename === user.middlename &&
      editData.lastname === user.lastname &&
      !editData.password &&
      !editData.confirmPassword;

    if (isUnchanged) {
      setMessage('No changes made.');
      setTimeout(() => setMessage(''), 3000);
      return;
    }

    try {
      const updatedUser = {
        ...user,
        firstname: editData.firstname,
        middlename: editData.middlename,
        lastname: editData.lastname,
        ...(editData.password && { password: editData.password })
      };

      const response = await updateUser(user.userId, updatedUser);

      if (response?.userId) {
        setMessage('Profile updated successfully.');
        localStorage.setItem('user', JSON.stringify(response));
      } else {
        setMessage('Failed to update profile.');
      }
    } catch (error) {
      console.error('Update error:', error);
      setMessage('Failed to update profile.');
    }

    setTimeout(() => setMessage(''), 3000);
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/landing';
  };

  return (
    <>
      <MessageAlert message={message} />
      <ProfileForm
        editData={editData}
        onChange={handleEditChange}
        onSubmit={handleProfileUpdate}
        username={user.username}
      />
      <div className="profile-actions">
        <button
          onClick={handleProfileUpdate}
          className="eventmanagerUpdateProfileButton"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
            <polyline points="17 21 17 13 7 13 7 21" />
            <polyline points="7 3 7 8 15 8" />
          </svg>
          Update Profile
        </button>
        <button onClick={handleLogout} className="eventmanagerLogoutButton">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          Logout
        </button>
      </div>
    </>
  );
};

export default ProfilePage;