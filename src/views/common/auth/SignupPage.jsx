import { Container } from "@mui/material";
import { BasicUserInfo } from "../../../components/common/auth/BasicUserInfo";
import { SelectUserType } from "../../../components/common/auth/SelectUserType";
import { useReactiveAction } from "../../../hooks/useReactiveAction";
import { InstructorAdd } from "../../../components/instructor/InstructorAdd";
import { Terms } from "../../../components/common/auth/Terms";
import { Message } from "../../../components/common/Message";
import { OrganizationAdd } from "../../../components/organization/OrganizationAdd";
import { ProgressBar } from "../../../components/common/ProgressBar";
import { useEffect, useState } from "react";

export const SignupPage = () => {
  
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
  const [progressBarTrigger, progressBarDataHandler, currProcess] = useReactiveAction();
  const [currCmp, setCurrCmp] = useState()
  const [cmpName, setCmpName] = useState()

  const components = {
    'basicUserInfo': <BasicUserInfo type="signup" setCmpName={setCmpName}/>,
    'selectUserType': <SelectUserType progressBarTrigger={progressBarTrigger} />,
    'instructorSignup': <InstructorSignup />,
    'organizationSignup': <OrganizationSignup />,
  };

 useEffect(() => {
  setCmpName('basicUserInfo')
}, [])

useEffect(() => {
  setCurrCmp(components[cmpName])
 }, [cmpName])


  return (
    <Container sx={{ px: 4.5, my: 6.5 }}>
      <ProgressBar progressBarDataHandler={progressBarDataHandler} currProcess={currProcess} />
      {currCmp}
    </Container>
  );
};
