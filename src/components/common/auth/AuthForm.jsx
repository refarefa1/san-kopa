import { Box, Button, Divider, useTheme } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useFormRegister } from "../../../hooks/useFormRegister";
import { GoogleButton } from "./googleButton";
import { useDispatch } from "react-redux";
import { StandardInput } from "../inputs/StandardInput";
import { InputTypes } from "../../../types/inputs";
import { useTranslation } from "react-i18next";

const styles = {
  textInput: {
    marginTop: 2.5,
    width: "100%",

    "& .muirtl-9ddj71-MuiInputBase-root-MuiOutlinedInput-root": {
      borderRadius: 3,
    },
    "& .muirtl-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
      padding: 1.5,
    },
  },
  rememberMePswRecoverWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 3.25,
  },
  submitButton: {
    width: "100%",
    fontSize: 20,
    paddingY: 1.5,
    marginTop: 'auto',
    borderRadius: 2,
  },
  link: {
    color: "#1725AE",
    textDecoration: "underline",
  },
};

export const AuthForm = (props) => {
  const { handleChange, type, formSx, authData } = props;

  const theme = useTheme();
  const { t } = useTranslation();

  const [register, setUserCred, userCred] = useFormRegister(authData);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const isLogin = type === 'login';
    handleChange(userCred, isLogin);
  };

  return (
    <form onSubmit={handleSubmit} style={{ ...formSx }}>
      <GoogleButton />
      <Divider sx={{ marginTop: 4, marginBottom: 1.25 }}>או</Divider>
      <StandardInput
        type={InputTypes.EMAIL}
        label={t('Auth:email')}
        autoComplete="email"
        sx={styles.textInput}
        register={register}
        id='email'
      />
      <StandardInput
        type={InputTypes.PASSWORD}
        label={t('Auth:password')}
        sx={styles.textInput}
        helperText={type === 'signup' ? t('Auth:passwordHelperText') : ''}
        register={register}
        id='password'
      />
      <Box sx={styles.rememberMePswRecoverWrapper}>
        <StandardInput
          type={InputTypes.CHECKBOX}
          label={t('Auth:rememberMe')}
          register={register}
          id="isRememberMe"
        />
        {type === "login" && (
          <Link to="/password-recovery" style={styles.link}>
            {t('Auth:forgotPassword')}
          </Link>
        )}
      </Box>
      <Button
        type="submit"
        variant="contained"
        sx={{
          height: theme.sizes.inputHeight,
          ...styles.submitButton
        }}>
        {type === 'login' ? t('System:connect') : t('System:signup')}
      </Button>
    </form>
  );
};
