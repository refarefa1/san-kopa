import { Box, Typography, useTheme } from "@mui/material";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { AuthForm } from "../../../components/common/auth/AuthForm";

const styles = {
  switchToSignupWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 1.5,
    my: 3,
  },
  form: {
    display: "flex",
    flexDirection: 'column',
    flexGrow: 1
  }
};

export const AuthCred = () => {
  const context = useOutletContext();
  const { handleChange, type, authData } = context

  const navigate = useNavigate()
  const theme = useTheme()

  const onChange = (data) => {
    handleChange(data)
    if (type === 'signup') navigate('identification')
    else if (type === 'login') navigate('/') // Need to remove this line and validate login details in LoginPage
  }

  return (
    <>
      <Typography variant="h5" sx={{ textAlign: "center", color: theme.palette.primary.main }}>
        {type === "login" ? "התחברות לחשבון קיים" : "יצירת חשבון חדש"}
      </Typography>
      <AuthForm formSx={styles.form} handleChange={onChange} type={type} authData={authData} />
      <Box sx={styles.switchToSignupWrapper}>
        <Typography variant="p" color="text.disabled">
          {type === "login" ? "עוד אין לך חשבון?" : "כבר יש לך חשבון?"}
        </Typography>
        <Link to={type === "login" ? "/signup" : "/login"} style={styles.link}>
          {type === "login" ? "ליצירת חשבון" : "להתחברות"}
        </Link>
      </Box>
    </>
  );
};
