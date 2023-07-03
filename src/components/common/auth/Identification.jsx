import { Box, Button, Paper, Typography } from "@mui/material";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import LocalFloristOutlinedIcon from "@mui/icons-material/LocalFloristOutlined";
import { primaryColor } from "../../../global/Colors";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../../store/actions/AuthActions";

const styles = {
  p: {
    display: "block",
    fontSize: 20,
    fontWeight: 400,
  },
  icon: {
    fill: primaryColor,
    stroke: "#fff",
    fontSize: 68,
  },
  paperWrapper: { display: "flex", width: "100%", justifyContent: "space-between", mt: 2 },
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
    mt: 3.25,
    borderRadius: 3,
  },
};

export const Identification = ({ handleChange }) => {
  const dispatch = useDispatch()
  const currUser = useSelector((state) => state.authModule.loggedInUser);
  const [userType, setUserType] = useState();

  const handleClick = () => {
    dispatch(updateUser(currUser._Id, {userType: userType}))
    handleChange({ data: {}, newComponent: 2 });
  };

  return (
    <>
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
              <LocalFloristOutlinedIcon sx={styles.icon} />
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
          <Button variant="contained" sx={styles.continueButton} onClick={handleClick}>
            המשך
          </Button>
        </>
      )}
    </>
  );
};
