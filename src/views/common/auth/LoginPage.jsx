import { Box, useTheme } from "@mui/material";
import { AppHeader } from "../../../components/common/AppHeader";
import { AuthCred } from "./AuthCred";

const styles = {
  loginContainer: {
    minHeight: 'calc(100vh - 66px)',
    display: "flex",
    flexDirection: "column",
    pt: 4
  },
};

export const LoginPage = () => {

  const theme = useTheme()

  const authData = {
    email: '',
    password: '',
    isRememberMe: false
  }

  return (
    <Box>
      <AppHeader />
      <Box sx={{
        paddingX: theme.layout.padding,
        ...styles.loginContainer
      }}>
        <AuthCred type='login' authData={authData} />
      </Box>
    </Box>
  );
};
