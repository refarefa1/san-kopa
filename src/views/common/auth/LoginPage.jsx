import { useState } from "react";
import { BasicUserInfo } from "../../../components/common/auth/BasicUserInfo";
import { Container } from "@mui/material";

export const LoginPage = () => {
  const [currType] = useState("login");

  return (
    <Container sx={{ px: 4.5, my: 6.5 }}>
      <BasicUserInfo type={currType} />
    </Container>
  );
};
