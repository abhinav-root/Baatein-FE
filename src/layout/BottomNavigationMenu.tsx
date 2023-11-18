import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import Paper from "@mui/material/Paper";

import HomeIcon from "@mui/icons-material/Home";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { NavLink } from "react-router-dom";
import { useTheme } from "@mui/material";

enum Navigation {
  "HOME" = 0,
  "CHAT" = 1,
  "NOTIFICATIONS" = 2,
  "SEARCH" = 3,
}

export default function BottomNavigationMenu() {
  const [value, setValue] = React.useState(Navigation.HOME);
  console.log({ value });
  const ref = React.useRef<HTMLDivElement>(null);
  const theme = useTheme();

  React.useEffect(() => {
    (ref.current as HTMLDivElement).ownerDocument.body.scrollTop = 0;
  }, [value]);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <NavLink to={"/feed"} style={{ display: "contents" }}>
            {({ isActive }) => (
              <BottomNavigationAction
                icon={<HomeIcon />}
                style={{ color: isActive ? theme.palette.primary.main : "" }}
              />
            )}
          </NavLink>

          <NavLink to={"/chat"} style={{ display: "contents" }}>
            {({ isActive }) => (
              <BottomNavigationAction
                icon={<ChatBubbleIcon fontSize="small" />}
                style={{ color: isActive ? theme.palette.primary.main : "" }}
              />
            )}
          </NavLink>

          <NavLink to={"/post"} style={{ display: "contents" }}>
            {({ isActive }) => (
              <BottomNavigationAction
                icon={<AddCircleOutlineIcon />}
                style={{ color: isActive ? theme.palette.primary.main : "" }}
              />
            )}
          </NavLink>

          <NavLink to={"/notifications"} style={{ display: "contents" }}>
            {({ isActive }) => (
              <BottomNavigationAction
                icon={<NotificationsIcon />}
                style={{ color: isActive ? theme.palette.primary.main : "" }}
              />
            )}
          </NavLink>

          <NavLink to={"/search"} style={{ display: "contents" }}>
            {({ isActive }) => (
              <BottomNavigationAction
                icon={<SearchIcon />}
                style={{ color: isActive ? theme.palette.primary.main : "" }}
              />
            )}
          </NavLink>
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
