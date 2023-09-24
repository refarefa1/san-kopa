import { Button, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Logo } from "../../svgs/Logo";
import { BackArrow } from "../../svgs/BackArrow";
import { useState } from "react";
import { ProfileImgPlaceholder } from "../../svgs/ProfileImgPlaceholder";

const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "sticky",
    top: 0,
  },
  loginBtn: {
    borderRadius: 4,
    px: 2,
    py: 1,
  },
};

export const AppHeader = (props) => {

  const { onBack } = props
  console.log("🚀 ~ file: AppHeader.jsx:29 ~ AppHeader ~ props:", props)

  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();

  const loggedInUser = useSelector((state) => state.authModule.loggedInUser);
  const [isLocationLoginSignup, setIsLocationLoginSignup] = useState(
    location.pathname.includes("login") || location.pathname.includes("signup")
  );

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <Box
      sx={{
        px: theme.layout.padding,
        height: theme.sizes.headerHeight,
        bgcolor: theme.palette.primary.main,
        zIndex: theme.sizes.headerZIndex,
        ...styles.header,
      }}
    >
      {isLocationLoginSignup && (
        <Box onClick={onBack}>
          <BackArrow />
        </Box>
      )}

      {!loggedInUser && location.pathname === "/" && (
        <Button
          sx={{
            color: theme.palette.secondary.main,
            borderColor: theme.palette.secondary.main,
            ...styles.loginBtn,
          }}
          onClick={handleClick}
          variant="outlined"
        >
          כניסה
        </Button>
      )}

      {loggedInUser && !isLocationLoginSignup &&
        <Box sx={{ display: "flex" }}>
          {loggedInUser.profileImgUrl &&
            <img src={loggedInUser.profileImgUrl}></img>
          }
          {!loggedInUser.profileImgUrl && <ProfileImgPlaceholder />}
        </Box>}

      <Logo />
    </Box>
  );
};
