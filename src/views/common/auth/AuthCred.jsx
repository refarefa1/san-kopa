import { Box, Typography, useTheme } from "@mui/material";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { AuthForm } from "../../../components/common/auth/AuthForm";
import { useTranslation } from "react-i18next";

const styles = {
  switchToSignupWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 1.5,
    marginY: 3,
  },
  form: {
    display: "flex",
    flexDirection: 'column',
    flexGrow: 1
  }
};

export const AuthCred = () => {
  const context = useOutletContext();
  const { handleChange, type, authData } = context;

  const navigate = useNavigate();
  const theme = useTheme();
  const { t } = useTranslation();

  const onChange = (data) => {
    handleChange(data);
    if (type === 'signup') navigate('identification');
    else if (type === 'login') navigate('/'); // Need to remove this line and validate login details in LoginPage
  };

  return (
    <>
      <Typography variant="h5" sx={{ textAlign: "center", color: theme.palette.primary.main }}>
        {type === "login" ? t('Auth:existingAccount') : t('Auth:newAccount')}
      </Typography>
      <AuthForm formSx={styles.form} handleChange={onChange} type={type} authData={authData} />
      <Box sx={styles.switchToSignupWrapper}>
        <Typography variant="p" color="text.disabled">
          {type === "login" ? t('Auth:noAccount') : t('Auth:accountExists')}
        </Typography>
        <Link to={type === "login" ? "/signup" : "/login"} style={styles.link}>
          {type === "login" ? t('Auth:toSignup') : t('Auth:toConnect')}
        </Link>
      </Box>
    </>
  );
};
