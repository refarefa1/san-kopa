import LocalFloristOutlinedIcon from "@mui/icons-material/LocalFloristOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Typography, useTheme } from "@mui/material";

const styles = {
  btnsWrapper: {
    display: "flex",
    gap: 3
  },
  icon: {
    stroke: "#fff",
    fontSize: 68,
  },
  padding: {
    display: "block",
    fontSize: 20,
    fontWeight: 400,
  },
  toggleButton: {
    borderRadius: "20px !important",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 130,
    height: 140,
    padding: 0,
  },
};
export const IdentificationToggleBtn = (props) => {
  const { userType, setUserType } = props;
  const theme = useTheme();

  const handleChange = (ev, newUserType) => {
    setUserType(newUserType);
  };

  const children = [
    <ToggleButton
      value="organization"
      key="organization"
      sx={{ border: `solid 1px ${theme.palette.primary.main} !important`, ...styles.toggleButton }}
    >
      <LocalFloristOutlinedIcon sx={{ fill: theme.palette.primary.main, ...styles.icon }} />
      <Typography variant="p" sx={{color: theme.palette.primary.main, ...styles.p}}>
        עמותה
      </Typography>{" "}
    </ToggleButton>,
    <ToggleButton
      value="instructor"
      key="instructor"
      sx={{ border: `solid 1px ${theme.palette.primary.main} !important`, ...styles.toggleButton }}
    >
      <PermIdentityOutlinedIcon sx={{ fill: theme.palette.primary.main, ...styles.icon }} />
      <Typography variant="p" sx={{color: theme.palette.primary.main, ...styles.p}}>
        מרצה
      </Typography>{" "}
    </ToggleButton>,
  ];

  const control = {
    value: userType,
    onChange: handleChange,
    exclusive: true,
  };

  return (
    // <Stack spacing={2} alignItems="center">
    <ToggleButtonGroup size="small" {...control} aria-label="Small sizes" sx={styles.btnsWrapper}>
      {children}
    </ToggleButtonGroup>
    // </Stack>
  );
};
