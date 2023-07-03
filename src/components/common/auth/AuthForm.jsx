import { Box, Button, Checkbox, Divider, FormControlLabel, FormHelperText, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { useFormRegister } from "../../../hooks/useFormRegister";
import { GoogleButton } from "./googleButton";
import { useDispatch } from "react-redux";
import { login } from "../../../store/actions/AuthActions";

const styles = {
  textInput: {
    mt: 2.5,
    width: "100%",

    "& .muirtl-9ddj71-MuiInputBase-root-MuiOutlinedInput-root": {
      borderRadius: 3,
    },
    "& .muirtl-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
      padding: 1.5,
    },
  },
  rememberMePswRecoverWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    mt: 3.25,
  },
  submitButton: {
    width: "100%",
    fontSize: 20,
    py: 1.5,
    mt: 3.25,
    borderRadius: 3,
  },
  link: {
    color: "#1725AE",
    textDecoration: "underline",
  },
};

export const AuthForm = ({ type, setCmpName }) => {
  const dispatch = useDispatch();

  const initialFields = { email: ``, password: ``, rememberMe: true };
  const [register, setCreds, creds] = useFormRegister(initialFields);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    dispatch(login(creds));
    setCmpName('selectUserType')
  };

  return (
    <form onSubmit={handleSubmit}>
      <GoogleButton />
      <Divider sx={{ mt: 4, mb: 1.25 }}>או</Divider>
      <TextField
        {...register(`email`, `email`)}
        label="אימייל"
        variant="outlined"
        type="email"
        autoComplete="email"
        sx={styles.textInput}
      />
      <TextField
        {...register(`password`, `password`)}
        label="סיסמה"
        variant="outlined"
        sx={styles.textInput}
        helperText={type === 'signup' ? 'על הסיסמה להכיל 8 תוים לפחות' : ''}
        />
      <Box sx={styles.rememberMePswRecoverWrapper}>
        <FormControlLabel
          control={<Checkbox {...register(`rememberMe`, `checkbox`)} defaultChecked />}
          label="זכור אותי"
        />
        {type === "login" && (
          <Link to="/password-recovery" style={styles.link}>
            שכחת סיסמה?
          </Link>
        )}
      </Box>
      <Button type="submit" variant="contained" sx={styles.submitButton}>
        התחברות
      </Button>
    </form>
  );
};
