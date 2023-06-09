import { HttpService } from "./HttpService";

const USERS_KEY = "usersDB";

const login = async (userCred) => {
  const users = await HttpService.query(USERS_KEY);
  const user = users.find((user) => user.email === userCred.email)
  return {...user, rememberMe: userCred.rememberMe}
};

const _createUsers = () => {
  const users = [
    {
      _id: "user101",
      email: "lala@gmail.com",
      password: "lala",
      rememberMe: true,
    },
    {
      _id: "user102",
      email: "puki@gmail.com",
      password: "puki",
      rememberMe: true,
    },
  ];
  const currUsers = localStorage.getItem(USERS_KEY);
  if (!currUsers) localStorage.setItem(USERS_KEY, JSON.stringify(users));
};
_createUsers();

export const authService = {
  login,
};
