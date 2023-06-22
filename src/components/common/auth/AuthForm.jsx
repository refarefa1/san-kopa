import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  TextField,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useFormRegister } from "../../../hooks/useFormRegister";
import { GoogleButton } from "./googleButton";

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

export const AuthForm = () => {
  const initialFields = { email: ``, password: ``, rememberMe: true };
  const [register, setAuthData, authData] = useFormRegister(initialFields);
  
  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log(authData);
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
      <TextField {...register(`password`, `password`)}
        label="סיסמה"
        variant="outlined"
        sx={styles.textInput}
      />
      <Box sx={styles.rememberMePswRecoverWrapper}>
        <FormControlLabel
          control={
            <Checkbox
            {...register(`rememberMe`, `checkbox`)}
            defaultChecked
              // checked={value}
            />
          }
          label="זכור אותי"
        />
        <Link to="/password-recovery" style={styles.link}>
          שכחת סיסמה?
        </Link>
      </Box>
      <Button type="submit" variant="contained" sx={styles.submitButton}>
        התחברות
      </Button>
    </form>
  );
};