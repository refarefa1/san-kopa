import { Box, Button, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { IdentificationToggleBtn } from "../../../components/common/auth/IdentificationToggleBtn";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useTranslation } from "react-i18next";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
  padding: {
    display: "block",
    fontSize: 20,
    fontWeight: 400,
  },
  paperWrapper: {
    width: "fit-content",
    marginX: "auto",
    marginTop: 2,
  },
  continueButton: {
    width: "100%",
    fontSize: 20,
    paddingY: 1.5,
    marginTop: "auto",
    marginBottom: 4,
    borderRadius: 2,
  },
};

export const Identification = () => {

  const context = useOutletContext();
  const navigate = useNavigate();

  const { t } = useTranslation();

  const { handleChange, authData } = context;

  const theme = useTheme();

  const [userType, setUserType] = useState(authData.userType);

  const handleClick = () => {
    handleChange({ userType });
    navigate(`/signup/${userType}`);
  };


  return (
    <Box sx={styles.container}>
      <>
        <Typography variant="p" sx={{ ...styles.p, marginTop: 2 }}>
          {t('Auth:greet')}
        </Typography>
        <Typography variant="p" sx={styles.p}>
          {t('Auth:greetExtra')}
        </Typography>
        <Typography variant="h6" sx={{ marginTop: 2 }}>
          {t('Auth:identification')}
        </Typography>
        <Box sx={styles.paperWrapper}>
          <IdentificationToggleBtn userType={userType} setUserType={setUserType} />
        </Box>
        <Button
          variant="contained"
          sx={{ height: theme.sizes.inputHeight, ...styles.continueButton }}
          onClick={handleClick}
        >
          {t('System:continue')}
        </Button>
      </>
    </Box>
  );
};
