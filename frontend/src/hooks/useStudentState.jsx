import { useState } from "react";
import useStudentUser from "./useStudentUser";

export default function useStudentState() {
  const { user, firstname, middlename, lastname } = useStudentUser();

  const [events, setEvents] = useState([]);
  const [joinedEvents, setJoinedEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [editData, setEditData] = useState({
    firstname: firstname || "",
    middlename: middlename || "",
    lastname: lastname || "",
    password: "",
    confirmPassword: "",
  });

  const typeUser = user?.typeUser;

  return {
    typeUser,
    events,
    setEvents,
    joinedEvents,
    setJoinedEvents,
    loading,
    setLoading,
    message,
    setMessage,
    selectedEvent,
    setSelectedEvent,
    editData,
    setEditData,
  };
}
