import { Box, Container, useTheme } from "@mui/material";
import { useState } from "react";
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
  const [component, setComponent] = useState(0);

  const theme = useTheme()

  const handleChange = ({ data, newComponent }) => {
    console.log(data);
    setComponent(newComponent);
  };

  const getComponentToRender = () => {
    switch (component) {
      case 0:
        return <AuthCred type="signup" handleChange={handleChange} />;
      case 1:
        return <Identification handleChange={handleChange} />;
      case 2:
        return <BasicUserInfo handleChange={handleChange} />;
      case 3:
        return <Terms handleChange={handleChange} />;
      case 4:
        return <Message />;
      default:
        return <BasicUserInfo handleChange={handleChange} />;
    }
  };

  const componentToRender = getComponentToRender();

  const getProgress = () => {
    return component * 25;
  };

  return (
    <Box >
      <AppHeader />
      <Box
        sx={{
          paddingX: theme.layout.padding,
          ...styles.signupInfoContainer
        }}
      >
        {component !== 0 && <ProgressBar progress={getProgress()} />}
        {componentToRender}
      </Box>
    </Box >
  );
};
