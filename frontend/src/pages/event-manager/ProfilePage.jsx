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
    window.location.href = '/login';
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
      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        <button
          onClick={handleProfileUpdate}
          className="eventmanagerUpdateProfileButton"
        >
          Update
        </button>
        <button onClick={handleLogout} className="eventmanagerLogoutButton">
          Logout
        </button>
      </div>
    </>
  );
};

export default ProfilePage;