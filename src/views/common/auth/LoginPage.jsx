import { useState } from "react";
import { AuthCreds } from "../../../components/common/auth/AuthCreds";
import { Container } from "@mui/material";

export const LoginPage = () => {
  const [currType] = useState("login");

  return (
    <Container sx={{ px: 4.5, my: 6.5 }}>
      <AuthCreds type={currType} />
    </Container>
  );
};
