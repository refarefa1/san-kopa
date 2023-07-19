import { Box, Button, Paper, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { IdentificationToggleBtn } from "./IdentificationToggleBtn";
import { useFormRegister } from "../../../hooks/useFormRegister";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
  p: {
    display: "block",
    fontSize: 20,
    fontWeight: 400,
  },
  paperWrapper: {
    width: "fit-content",
    mx: "auto",
    mt: 2,
  },
  continueButton: {
    width: "100%",
    fontSize: 20,
    py: 1.5,
    mt: "auto",
    mb: 4,
    borderRadius: 2,
  },
};

export const Identification = (props) => {
  const {
    handleChange,
    authData
  } = props

  const theme = useTheme();

  const [userType, setUserType] = useState(authData.userType);

  const handleClick = () => {
    handleChange({ data: { userType }, newComponent: 2 });
  };


  return (
    <Box sx={styles.container}>
      <>
        <Typography variant="p" sx={{ ...styles.p, mt: 2 }}>
          איזה כיף שהתחלת בתהליך ההרשמה!
        </Typography>
        <Typography variant="p" sx={styles.p}>
          זה יקח רק כמה דקות
        </Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>
          באת לכאן בתור?
        </Typography>
        <Box sx={styles.paperWrapper}>
          <IdentificationToggleBtn userType={userType} setUserType={setUserType} />
        </Box>
        <Button
          variant="contained"
          sx={{
            height: theme.sizes.inputHeight,
            ...styles.continueButton,
          }}
          onClick={handleClick}
        >
          המשך
        </Button>
      </>
    </Box>
  );
};
