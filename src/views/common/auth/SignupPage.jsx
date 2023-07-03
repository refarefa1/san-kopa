import { Container } from "@mui/material";
import { InstructorAdd } from "../../../components/instructor/InstructorAdd";
import { Terms } from "../../../components/common/auth/Terms";
import { Message } from "../../../components/common/Message";
import { OrganizationAdd } from "../../../components/organization/OrganizationAdd";
import { ProgressBar } from "../../../components/common/ProgressBar";
import { useState } from "react";
import { AuthCreds } from "../../../components/common/auth/AuthCreds";
import { Identification } from "../../../components/common/auth/Identification";

const InstructorSignup = () => {
  return (
    <section className="InstructorSignup-page-container">
      <h1>InstructorSignup page</h1>
      <InstructorAdd />
      <Terms />
      <Message />
    </section>
  );
};

const OrganizationSignup = () => {
  return (
    <section className="OrganizationSignup-page-container">
      <h1>OrganizationSignup page</h1>
      <OrganizationAdd />
      <Terms />
      <Message />
    </section>
  );
};

export const SignupPage = () => {
  const [component, setComponent] = useState(0);

  const handleChangeSignupPage = ({ data, newComponent }) => {
    setComponent(newComponent);
  };

  const getComponentToRender = () => {
    switch (component) {
      case 0:
        return <AuthCreds type="signup" handleChange={handleChangeSignupPage} />;
      case 1:
        return (
          <Identification
            handleChange={handleChangeSignupPage}
          />
        );
      case 2:
        return <InstructorSignup handleChange={handleChangeSignupPage} />;
      case 3:
        return <OrganizationSignup handleChange={handleChangeSignupPage} />;
      default:
        return <AuthCreds type="signup" handleChange={handleChangeSignupPage} />;
    }
  };

  const componentToRender = getComponentToRender();

  const getProgress = () => {
    return component * 33.33;
  };

  return (
    <Container sx={{ px: 4.5, my: 6.5 }}>
      {component > 0 && <ProgressBar progress={getProgress()} />}
      {componentToRender}
    </Container>
  );
};
