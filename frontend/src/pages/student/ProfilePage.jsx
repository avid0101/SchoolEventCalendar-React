import MessageAlert from "../../components/common/MessageAlert";
import ProfileForm from "./components/ProfileForm";

const ProfilePage = ({
  firstname,
  middlename,
  lastname,
  editData,
  onChange,
  onSubmit,
  message,
  onLogout,
}) => (
  <div>
    
    <MessageAlert message={message} />
    <ProfileForm
      editData={editData}
      onChange={onChange}
      firstname={firstname}
      middlename={middlename}
      lastname={lastname}
    />
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <button
        onClick={onSubmit}
        className="submit-button"
      >
        Update
      </button>
      <button onClick={onLogout} className="logout-button">
        Logout
      </button>
    </div>
  </div>
);

export default ProfilePage;
