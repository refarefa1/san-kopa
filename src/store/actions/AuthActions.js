import { authService } from "../../services/AuthService";

export function login(creds) {
  return async (dispatch, getState) => {
    try {
      const user = await authService.login(creds)
      dispatch({ type: "SET_USER", user });
    } catch (err) {
      console.error('error login', err);
    }
  };
}

export function updateUser(userId, fields) {
  return async (dispatch, getState) => {
    try {
      const user = await authService.updateUser(userId, fields)
      const newUser = {...user, ...fields}
      dispatch({ type: "SET_USER", newUser });
    } catch (err) {
      console.error('error login', err);
    }
  };
}