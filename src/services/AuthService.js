import { HttpService } from "./HttpService";
import { UtilService } from "./UtilService";

const USERS_KEY = "usersDB";

const login = async (userCred) => {
  const users = await HttpService.query(USERS_KEY);
  const user = users.find((user) => user.email === userCred.email);
  delete user.password;
  return user;
};

const getEmptyUser = () => {
  return {
    id: UtilService.generateId(),
    type: null,
    email: '',
    password: '',
    isRememberMe: false,
    firstName: '',
    lastName: '',
    description: '',
    avatar: null
  };
};

const _createUsers = () => {
  const users = [
    {
      _id: "user101",
      email: "lala@gmail.com",
      password: "lala",
      isRememberMe: true,
    },
    {
      _id: "user102",
      email: "puki@gmail.com",
      password: "puki",
      isRememberMe: true,
    },
  ];
  const currUsers = localStorage.getItem(USERS_KEY);
  if (!currUsers) localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

_createUsers();

export const authService = {
  login,
  getEmptyUser
};
