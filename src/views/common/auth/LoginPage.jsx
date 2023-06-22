import { Box, Container, Typography } from "@mui/material";
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
export const LoginPage = () => {
  return (
    <Container sx={{ px: 4.5, my: 6.5 }}>
      <Typography
        variant="h5"
        sx={{ textAlign: "center", color: primaryColor }}
      >
        התחברות לחשבון קיים
      </Typography>
      <AuthForm />
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
