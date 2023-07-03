import { Box, Button, Paper, Typography } from "@mui/material";
import { useEffect } from "react";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import LocalFloristOutlinedIcon from "@mui/icons-material/LocalFloristOutlined";
import { primaryColor } from "../../../global/Colors";
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
export const SelectUserType = ({ progressBarTrigger }) => {
  useEffect(() => {
    progressBarTrigger(33);
  }, []);
  
  return (
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
        <Paper variant="outlined" sx={styles.paper}>
          <LocalFloristOutlinedIcon sx={styles.icon} />
          <Typography variant="p" sx={styles.p}>
            עמותה
          </Typography>
        </Paper>
        <Paper variant="outlined" sx={styles.paper}>
          <PermIdentityOutlinedIcon sx={styles.icon} />
          <Typography variant="p" sx={styles.p}>
            מרצה
          </Typography>
        </Paper>
      </Box>
      <Button variant="contained" sx={styles.continueButton}>
        המשך
      </Button>
    </>
  );
};
