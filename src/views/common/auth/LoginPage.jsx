import { Box, useTheme } from "@mui/material";
import { AppHeader } from "../../../components/common/AppHeader";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../../store/actions/AuthActions";

const styles = {
  loginContainer: {
    minHeight: 'calc(100vh - 66px)',
    display: "flex",
    flexDirection: "column",
    paddingTop: 4
  },
};

export const LoginPage = () => {

  const theme = useTheme();
  const dispatch = useDispatch();

  const authData = {
    email: '',
    password: '',
    isRememberMe: false
  };

  const handleChange = (data) => {
    dispatch(login(data));
  };

  const context = { type: 'login', authData: authData, handleChange: handleChange };

  return (
    <Box>
      <AppHeader />
      <Box sx={{ paddingX: theme.layout.padding, ...styles.loginContainer }}>
        <Outlet context={context} />
      </Box>
    </Box>
  );
};
