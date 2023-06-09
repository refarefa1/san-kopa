import { Box, Container } from "@mui/material";
import { useState } from "react";
import { ProgressBar } from "../../../components/common/ProgressBar";
import { BasicUserInfo } from "../../../components/common/auth/BasicUserInfo";
import { Terms } from "../../../components/common/auth/Terms";
import { Message } from "../../../components/common/Message";
import { AuthCred } from "../../../components/common/auth/AuthCred";
import { Identification } from "../../../components/common/auth/Identification";

const styles = {
  signupInfoContainer: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
};

export const SignupPage = () => {
  const [component, setComponent] = useState(0);

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
    <Container sx={{ px:2 }}>
      <Box sx={styles.signupInfoContainer}>
        {component !== 0 && <ProgressBar progress={getProgress()} />}
        {componentToRender}
      </Box>
    </Container>
  );
};
