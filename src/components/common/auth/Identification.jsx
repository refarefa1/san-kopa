import { Box, Button, Paper, Typography, useTheme } from "@mui/material";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import LocalFloristOutlinedIcon from "@mui/icons-material/LocalFloristOutlined";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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
  icon: {
    stroke: "#fff",
    fontSize: 68,
  },
  paperWrapper: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    gap: 3,
    mt: 2,
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 130,
    height: 140,
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

export const Identification = ({ handleChange }) => {
  const theme = useTheme();

  const currUser = useSelector((state) => state.authModule.loggedInUser);
  const [userType, setUserType] = useState();

  const handleClick = () => {
    //dispatch
    handleChange({ data: {}, newComponent: 2 });
  };

  return (
    <Box sx={styles.container}>
      {currUser && (
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
            <Paper variant="outlined" sx={styles.paper} onClick={() => setUserType("organization")}>
              <LocalFloristOutlinedIcon sx={{ fill: theme.palette.primary.main, ...styles.icon }} />
              <Typography variant="p" sx={styles.p}>
                עמותה
              </Typography>
            </Paper>
            <Paper variant="outlined" sx={styles.paper} onClick={() => setUserType("instructor")}>
              <PermIdentityOutlinedIcon sx={styles.icon} />
              <Typography variant="p" sx={styles.p}>
                מרצה
              </Typography>
            </Paper>
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
      )}
    </Box>
  );
};
