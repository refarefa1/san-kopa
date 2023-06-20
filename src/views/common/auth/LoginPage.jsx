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
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useState } from "react";
import { Link } from "react-router-dom";

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
  checkboxLinkWrapper: {
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
};

const LoginForm = () => {
  const EmailInput = () => (
    <TextField
      id="email"
      label="אימייל"
      variant="outlined"
      type="email"
      sx={styles.textInput}
    />
  );

  const PasswordInput = () => (
    <TextField
      id="password"
      label="סיסמה"
      variant="outlined"
      type="password"
      sx={styles.textInput}
    />
  );

  const RememberMeCheckbox = () => {
    const [isRememberMe, setIsRememberMe] = useState(true);

    const handleRememberMeToggle = () => {
      setIsRememberMe((prevIsRememberMe) => !prevIsRememberMe);
    };

    return (
      <FormControlLabel
        control={
          <Checkbox
            defaultChecked
            value={isRememberMe}
            onChange={handleRememberMeToggle}
          />
        }
        label="זכור אותי"
      />
    );
  };

  return (
    <Box>
      <EmailInput />
      <PasswordInput />
      <Box sx={styles.checkboxLinkWrapper}>
        <RememberMeCheckbox />
        <Link to="/password-recovery">שכחת סיסמה?</Link>
      </Box>
      <Button variant="contained" sx={styles.submitButton}>
        התחברות
      </Button>
    </Box>
  );
};

export const LoginPage = () => {
  return (
      <Container sx={{ px: 4.5, my: 6.5 }}>
        <Typography variant="h5" sx={{ textAlign: "center", color: "#6358d8" }}>
          התחברות לחשבון קיים
        </Typography>
        <Divider sx={{ mt: 4, mb: 1.25 }}>או</Divider>
        <LoginForm />
        <Box sx={styles.switchToSignupWrapper}>
          <Typography variant="p">עוד אין לך חשבון?</Typography>
          <Link to="/signup">ליצירת חשבון</Link>
        </Box>
      </Container>
  );
};