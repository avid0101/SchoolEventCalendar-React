import { useMemo } from "react";

export default function useStudentUser() {
  const rawUser = localStorage.getItem("user");
  const user = useMemo(() => (rawUser ? JSON.parse(rawUser) : null), [rawUser]);

  const username = user?.username;
  const firstname = user?.firstname;
  const middlename = user?.middlename;
  const lastname = user?.lastname;

  return { user, username, firstname, middlename, lastname };
}
