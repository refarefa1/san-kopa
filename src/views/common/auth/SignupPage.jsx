import { useState } from "react";
import { Box, useTheme } from "@mui/material";
import { AppHeader } from "../../../components/common/AppHeader";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../../store/actions/AuthActions";

const styles = {
  signupInfoContainer: {
    minHeight: 'calc(100vh - 66px)',
    display: "flex",
    flexDirection: "column",
    paddingTop: 4
  },
};

export const SignupPage = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();

  const initialAuthData = {
    email: '',
    password: '',
    isRememberMe: false,
    userType: null,
    firstName: '',
    lastName: '',
    description: '',
    avatar: null
  };

  const [authData, setAuthData] = useState(initialAuthData);

  const handleChange = (data = {}, isLogin) => {
    setAuthData(prevData => {
      const newAuthData = { ...prevData, ...data };
      console.log("🚀 ~ file: SignupPage.jsx:39 ~ handleChange ~ newAuthData:", newAuthData)
      if (isLogin) dispatch(login(newAuthData));
      return newAuthData;
    });
  };

  const onBack = () => {
    navigate(-1);
  };

  const context = { handleChange: handleChange, authData: authData, type: 'signup' };

  return (
    <Box >
      <AppHeader onBack={onBack} />
      <Box sx={{ paddingX: theme.layout.padding, ...styles.signupInfoContainer }}>
        <Outlet context={context} />
      </Box>
    </Box >
  );
};
