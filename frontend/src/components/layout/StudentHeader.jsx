import { useNavigate } from "react-router-dom";

function StudentHeader() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="container">
        <div
          className="logo"
          onClick={() =>
            navigate("/student/calendarview")
          }
        >
          Student Portal
        </div>
        <ul className="links">
          <li
            onClick={() =>
              navigate("/student/browseevents")
            }
          >
            Browse Events
          </li>
          <li
            onClick={() =>
              navigate("/student/joinedevents")
            }
          >
            Joined Events
          </li>
          <li
            onClick={() =>
              navigate("/student/calendarview")
            }
          >
            Calendar View
          </li>
          <li
            onClick={() =>
              navigate("/student/profile")
            }
          >
            {"My Profile"}
          </li>
        </ul>
      </div>
    </header>
  );
}

export default StudentHeader;
