import React, { createContext, useState } from "react";

//useContext hook example with multiple files

//used inside LoginHome.jsx
export const UserContext = createContext();
const UserProvider = ({ children }) => {
  const [loginUser, setloginUser] = useState(null);
  const login = (name) => {
    setloginUser({ name });
  };

  const logout = () => {
    setloginUser(null);
  };
  return (
    <UserContext.Provider value={{ loginUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
