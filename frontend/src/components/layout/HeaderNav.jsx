import { useNavigate } from "react-router-dom";

function HeaderNav() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="container">
        <div
          className="logo"
          onClick={() =>
            navigate("/event-manager/calendarview")
          }
        >
          Event Manager Portal
        </div>
        <ul className="links">
          <li
            onClick={() =>
              navigate("/event-manager/createvent")
            }
          >
            Create Event
          </li>
          <li
            onClick={() =>
              navigate("/event-manager/managevent")
            }
          >
            Manage Events
          </li>
          <li
            onClick={() =>
              navigate("/event-manager/calendarview")
            }
          >
            Calendar View
          </li>
          <li
            onClick={() =>
              navigate("/event-manager/profile")
            }
          >
            {"User"}
          </li>
        </ul>
      </div>
    </header>
  );
}

export default HeaderNav;
