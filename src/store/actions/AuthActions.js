import { authService } from "../../services/AuthService";

export function login(creds) {
  return async (dispatch, getState) => {
    try {
      const user = await authService.login(creds)
      dispatch({ type: "SET_LOGGED_USER", user });
    } catch (err) {
      console.error('error login', err);
    }
  };
}