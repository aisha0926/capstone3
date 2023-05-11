import { Navigate } from "react-router-dom";
import UserContext from "../UserContext";
import { useContext, useEffect } from "react";

export default function Logout() {
  //   localStorage.clear(); - remove this since its already in App.js
  const { setUser, unsetUser } = useContext(UserContext);

  //for clearing the local storage information
  unsetUser();

  useEffect(() => {
    setUser({
      id: null,
      isAdmin: null,
    });
  }, []);

  return <Navigate to="/login" />;
}
