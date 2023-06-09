import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { primaryColor } from "../../../global/Colors";
import { AuthForm } from "../../../components/common/auth/AuthForm";

const styles = {
  switchToSignupWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 1.5,
    mt: 5,
  },
};

export const AuthCred = ({ handleChange, type }) => {
  return (
      <>
        <Typography variant="h5" sx={{ textAlign: "center", color: primaryColor }}>
          {type === "login" ? "התחברות לחשבון קיים" : "יצירת חשבון חדש"}
        </Typography>
        <AuthForm handleChange={handleChange} type={type} />
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
