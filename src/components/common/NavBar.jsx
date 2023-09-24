import { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Paper, useTheme } from "@mui/material";
import { useSelector } from 'react-redux';

const styles = {
  navbarContainer: {
    height: 72,
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 0,
  },
  navbar: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  item: {
    height: "100%",
    // "&.Mui-selected": {
    //   color: primaryColor,
    // },
  },
  guestItem: {
    height: "100%",
    color: "white",
    '&.Mui-selected': {
      color: 'white'
    }
  }
};

export const NavBar = (props) => {
  const { items, guestItems } = props;
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const setNewValue = (event, newValue) => {
    setValue(newValue);
  };

  const loggedInUser = useSelector((state) => state.authModule.user);
  
  return (
    <Paper
      sx={{ borderTop: `3px solid ${theme.palette.primary.main}`, ...styles.navbarContainer }}
      elevation={20}
    >
      {
        loggedInUser ?
          (<BottomNavigation sx={styles.navbar} showLabels value={value} onChange={setNewValue}>
            {items.map((item, idx) => (
              <BottomNavigationAction sx={styles.item} key={idx} label={item.label} icon={item.icon} />
            ))}
          </BottomNavigation>)
          :
          (<BottomNavigation sx={{ backgroundColor: `${theme.palette.primary.main}`, ...styles.navbar }} showLabels value={value} onChange={setNewValue}>
            {guestItems.map((item, idx) => (
              <BottomNavigationAction sx={styles.guestItem} key={idx} label={item.label} />
            ))}
          </BottomNavigation>)
      }

    </Paper >
  );
};