import { Box, Button, Checkbox, Divider, FormControlLabel, FormHelperText, TextField, useTheme } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
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
    mt: 'auto',
    borderRadius: 2,
  },
  link: {
    color: "#1725AE",
    textDecoration: "underline",
  },
};

export const AuthForm = (props) => {

  const {
    handleChange,
    type,
    formSx,
    authData
  } = props

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const theme = useTheme()

  const { email, password, isRememberMe } = authData

  const initialFields = {
    email,
    password,
    isRememberMe
  };

  const [register, setUserCred, userCred] = useFormRegister(initialFields);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (type === 'login') {
      dispatch(login(userCred))
      navigate('/')
    }
    else {
      // dispatch(signup(userCred))
      handleChange({ data: { ...userCred }, newComponent: 1 })
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ ...formSx }}>
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
      <Button
        type="submit"
        variant="contained"
        sx={{
          height: theme.sizes.inputHeight,
          ...styles.submitButton
        }}
      >
        התחברות
      </Button>
    </form>
  );
};
