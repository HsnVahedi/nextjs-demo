import { createContext, useContext, useState } from "react";

import { getUser, storeUser, removeUser } from "../../modules/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getUser());
  const loginUser = (newUser) => {
    storeUser(newUser);
    setUser(newUser);
  };
  const logoutUser = () => {
    removeUser();
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
