import { authService } from "../../services/auth.service";

export function login(creds) {
  return async (dispatch, getState) => {
    try {
      const user = await authService.loginGoogle(creds)
      // dispatch({ type: "LOGIN", creds });
    } catch (err) {
      console.log(err);
    }
  };
}