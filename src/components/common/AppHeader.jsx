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
    paddingY: 1,
  },
};

export const AppHeader = (props) => {
  const { onBack } = props

  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();

  const loggedInUser = useSelector((state) => state.authModule.loggedInUser);
  const [isAuthPage, setIsAuthPage] = useState(
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
      {isAuthPage && (
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

      {loggedInUser && !isAuthPage &&
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
