import { useState } from "react";
import { Box, useTheme } from "@mui/material";
import { ProgressBar } from "../../../components/common/ProgressBar";
import { AppHeader } from "../../../components/common/AppHeader";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";

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
  const location = useLocation();
  const theme = useTheme()

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

  const [progress, setProgress] = useState(25)

  const updateProgress = (direction) => {
    let num = 20
    if (location.pathname.includes('organization')) {
      num = 25
    }
    setProgress(prevProgress => (prevProgress + (num * direction)))
  }
  const handleChange = ({ data, isLogin }) => {
    if (isLogin) {
      // dispatch to store
      // Here login and return
    }
    setAuthData(prevData => ({ ...prevData, ...data }));
  };

  const onBack = () => {
    updateProgress(-1)
    navigate(-1)
  }

  const context = { handleChange: handleChange, authData: authData, type: 'signup', progress: progress, updateProgress: updateProgress }

  return (
    <Box >
      <AppHeader onBack={onBack} />
      <Box sx={{ paddingX: theme.layout.padding, ...styles.signupInfoContainer }}>
        <Outlet context={context} />
      </Box>
    </Box >
  );
};
