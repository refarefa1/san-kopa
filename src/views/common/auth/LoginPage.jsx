import { AuthCred } from "../../../components/common/auth/AuthCred";
import { Container } from "@mui/material";

export const LoginPage = () => {
  return (
    <Container sx={{ px: 4.5, my: 6.5 }}>
      <AuthCred type='login' handleChange={() => {return}} />
    </Container>
  );
};
