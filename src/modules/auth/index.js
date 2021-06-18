import { getUsers } from "../users";

export const storeUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getUser = () => {
  try {
    const userData = localStorage.getItem("user");
    return JSON.parse(userData);
  } catch (err) {
    return null;
  }
};

export const removeUser = () => {
  localStorage.setItem("user", JSON.stringify(null));
};

export const getUserByCredentials = async (name, username) => {
  const users = await getUsers();
  const user = users.find((u) => u.name === name && u.username === username);
  // console.log(JSON.stringify(user));
  return user;
};
