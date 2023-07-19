import { useState } from "react";
import { Box, useTheme } from "@mui/material";

import { ProgressBar } from "../../../components/common/ProgressBar";
import { BasicUserInfo } from "../../../components/common/auth/BasicUserInfo";
import { Terms } from "../../../components/common/auth/Terms";
import { Message } from "../../../components/common/Message";
import { AuthCred } from "../../../components/common/auth/AuthCred";
import { Identification } from "../../../components/common/auth/Identification";
import { AppHeader } from "../../../components/common/AppHeader";

const styles = {
  signupInfoContainer: {
    minHeight: 'calc(100vh - 66px)',
    display: "flex",
    flexDirection: "column",
    pt: 4
  },
};

export const SignupPage = () => {

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

  const [component, setComponent] = useState(0);

  const [authData, setAuthData] = useState(initialAuthData)

  const theme = useTheme()

  const handleChange = ({ data, newComponent, isLogin }) => {
    if (isLogin) {
      // dispatch to store
      // Here login and return
    }
    setAuthData(prevData => ({ ...prevData, ...data }));
    setComponent(newComponent);
  };



  const getComponentToRender = () => {
    const commonProps = { handleChange: handleChange, authData: authData }
    switch (component) {
      case 0:
        return <AuthCred type="signup" {...commonProps} />;
      case 1:
        return <Identification {...commonProps} />;
      case 2:
        return <BasicUserInfo {...commonProps} />;
      case 3:
        return <Terms handleChange={handleChange} />;
      case 4:
        return <Message />;
      default:
        return <BasicUserInfo {...commonProps} />;
    }
  };

  const onBack = () => {
    setComponent(prevComponent => prevComponent - 1)
  }

  const progress = component * 25

  const componentToRender = getComponentToRender();

  return (
    <Box >
      <AppHeader onBack={onBack} />
      <Box
        sx={{
          paddingX: theme.layout.padding,
          ...styles.signupInfoContainer
        }}
      >
        {component !== 0 && <ProgressBar progress={progress} />}
        {componentToRender}
      </Box>
    </Box >
  );
};
