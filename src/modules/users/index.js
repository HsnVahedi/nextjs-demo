import axios from "axios";

import Company from "../../models/company";
import Address from "../../models/address";
import User from "../../models/user";

const normalizeUser = (userData) => {
  const companyData = userData.company;
  const addressData = userData.address;
  const company = new Company(
    companyData.name,
    companyData.catchPhrase,
    companyData.bs
  );
  const address = new Address(
    addressData.street,
    addressData.suite,
    addressData.city,
    addressData.zipcode
  );
  const user = new User(
    userData.id,
    userData.username,
    userData.name,
    userData.email,
    address,
    userData.phone,
    userData.website,
    company
  );
  return user;
};

export const getUsers = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  const usersData = response.data;
  const users = [];
  for (let i = 0; i < usersData.length; i += 1) {
    const userData = usersData[i];
    users.push(normalizeUser(userData));
  }
  return users;
};

export const getUser = async (username) => {
  const users = await getUsers();
  return users.find((user) => {
    return user.username === username;
  });
};

export const searchUsers = async (name, email) => {
  const filterByName = (user) => {
    return name ? user.name.toLowerCase().includes(name.toLowerCase()) : true;
  };
  const filterByEmail = (user) => {
    return email
      ? user.email.toLowerCase().includes(email.toLowerCase())
      : true;
  };
  const users = await getUsers();
  return users.filter((user) => filterByName(user) && filterByEmail(user));
};
