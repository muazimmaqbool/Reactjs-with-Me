import React, { useContext } from "react";
import { UserContext } from "./UserProvider";

const Profile = () => {
  const { loginUser, logout } = useContext(UserContext);
  console.log("loginUser:", loginUser);
  if (!loginUser) return <p>No user logged in.</p>;
  return (
    <div>
      <h3>Welcome, {loginUser.name}</h3>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Profile;
