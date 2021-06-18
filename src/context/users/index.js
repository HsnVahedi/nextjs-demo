import { createContext, useContext } from "react";

const UsersContext = createContext();

export const UsersProvider = ({ children, users }) => {
  return (
    <UsersContext.Provider value={users}>{children}</UsersContext.Provider>
  );
};

export const useUsers = () => {
  const users = useContext(UsersContext);
  return users;
};
