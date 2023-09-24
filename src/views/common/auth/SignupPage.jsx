import { useState } from "react";
import { Box, useTheme } from "@mui/material";
import { ProgressBar } from "../../../components/common/ProgressBar";
import { AppHeader } from "../../../components/common/AppHeader";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const styles = {
  signupInfoContainer: {
    minHeight: 'calc(100vh - 66px)',
    display: "flex",
    flexDirection: "column",
    pt: 4
  },
};

export const SignupPage = () => {

  const navigate = useNavigate()

  const initialAuthData = {
    email: '',
    password: '',
    isRememberMe: false,
    userType: null,
    firstName: '',
    lastName: '',
    about: '',
    avatar: null
  }

  const [authData, setAuthData] = useState(initialAuthData)

  const theme = useTheme()

  const handleChange = ({ data, isLogin }) => {
    if (isLogin) {
      // dispatch to store
      // Here login and return
    }
    setAuthData(prevData => ({ ...prevData, ...data }));
  };

  const onBack = () => {
    navigate(-1)
  }

  const context = { handleChange: handleChange, authData: authData, type: 'signup' }

  return (
    <Box >
      <AppHeader onBack={onBack} />
      <Box sx={{ paddingX: theme.layout.padding, ...styles.signupInfoContainer }}>
        <Outlet context={context} />
      </Box>
    </Box >
  );
};
