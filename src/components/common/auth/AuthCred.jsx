import { Box, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { AuthForm } from "../../../components/common/auth/AuthForm";

const styles = {
  switchToSignupWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 1.5,
    my: 3,
  },
};

export const AuthCred = (props) => {
  const {
    handleChange,
    type
  } = props

  const theme = useTheme()
  const formSx = {
    display: "flex",
    flexDirection: 'column',
    flexGrow: 1
  }

  return (
    <>
      <Typography variant="h5" sx={{ textAlign: "center", color: theme.palette.primary.main }}>
        {type === "login" ? "התחברות לחשבון קיים" : "יצירת חשבון חדש"}
      </Typography>
      <AuthForm formSx={formSx} handleChange={handleChange} type={type} />
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
