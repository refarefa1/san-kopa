import { HttpService } from "./HttpService";

const USERS_KEY = "usersDB";

const login = async (creds) => {
  const users = await HttpService.query(USERS_KEY);
  const { email, password } = creds;
  const currUser = users.find((user) => {
    return email === user.email && password === user.password;
  });
  return currUser

  // if (password === currUser.password) {
  //   localStorage.setItem(USERS_KEY, JSON.stringify(users));
  //   return currUser
  // }
  // return null;
};

const _createUsers = () => {
  const users = [
    {
      email: "lala@gmail.com",
      password: "lala",
    },
  ];
  const currUsers = localStorage.getItem(USERS_KEY);
  if (!currUsers) localStorage.setItem(USERS_KEY, JSON.stringify(users));
};
_createUsers();

export const authService = {
  login,
};
