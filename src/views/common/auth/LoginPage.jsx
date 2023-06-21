import jwt_decode from "jwt-decode";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { primaryColor } from "../../../global/Colors";

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
  switchToSignupWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 1.5,
    mt: 5,
  },
  link: {
    color: "#1725AE",
    textDecoration: "underline",
  },
  googleBtn: {
    "#google-signin > *": {
      width: "100%"
    },
    width: '100%',
    marginBlockStart: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
};

const LoginForm = () => {
  // const [formData, setFormData] = useState();

  const handleSubmit = (ev) => {
    ev.preventDefault()
  }
  
  const EmailInput = () => {
    const [email, setEmail] = useState("");
    const handleEmailChange = ({ target }) => {
      setEmail(target.value);
    };
    return (
      <TextField
        name="email"
        label="אימייל"
        variant="outlined"
        type="email"
        autoComplete="email"
        sx={styles.textInput}
        onChange={handleEmailChange}
        value={email}
      />
    );
  };

  const PasswordInput = () => {
    const [password, setPassword] = useState("");

    const handlePasswordChange = ({ target }) => {
      setPassword(target.value);
    };
    return (
      <TextField
        name="password"
        label="סיסמה"
        variant="outlined"
        type="password"
        sx={styles.textInput}
        onChange={handlePasswordChange}
        value={password}
      />
    );
  };

  const RememberMeCheckbox = () => {
    const [isRememberMe, setIsRememberMe] = useState(true);

    const handleRememberMeToggle = () => {
      setIsRememberMe((prevIsRememberMe) => !prevIsRememberMe);
    };

    return (
      <FormControlLabel
        control={
          <Checkbox
            name="rememberMe"
            value={isRememberMe}
            onChange={handleRememberMeToggle}
            checked={isRememberMe}
          />
        }
        label="זכור אותי"
      />
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <EmailInput />
      <PasswordInput />
      <Box sx={styles.rememberMePswRecoverWrapper}>
        <RememberMeCheckbox />
        <Link to="/password-recovery" style={styles.link}>
          שכחת סיסמה?
        </Link>
      </Box>
      <Button
      type="submit"
        variant="contained"
        sx={styles.submitButton}
      >
        התחברות
      </Button>
    </form>
  );
};

export const LoginPage = () => {

  const handleCallbackResponse = (response) => {
    const userObject = jwt_decode(response.credential);
    console.log(userObject);
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "826486200841-iq0u5i8ssr23k4da9j8jct0cdv791brm.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("google-signin"), {
      theme: "outline",
      width: "100%",
    });
  }, []);

  return (
    <Container sx={{ px: 4.5, my: 6.5 }}>
      <Typography
        variant="h5"
        sx={{ textAlign: "center", color: primaryColor }}
      >
        התחברות לחשבון קיים
      </Typography>
      <div id="google-signin" style={styles.googleBtn}></div>
      <Divider sx={{ mt: 4, mb: 1.25 }}>או</Divider>
      <LoginForm />
      <Box sx={styles.switchToSignupWrapper}>
        <Typography variant="p" color="text.disabled">
          עוד אין לך חשבון?
        </Typography>
        <Link to="/signup" style={styles.link}>
          ליצירת חשבון
        </Link>
      </Box>
    </Container>
  );
};
