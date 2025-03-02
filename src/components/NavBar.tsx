"use client";

import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HIDDEN_ROUTES = ["/login", "/admin", "/some-other-page"];

const Navbar = () => {
  const pathname = usePathname();

  // Hide navbar on certain routes
  if (HIDDEN_ROUTES.includes(pathname)) {
    return null;
  }

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        {/* Home Button */}
        <IconButton edge="start" color="inherit" component={Link} href="/">
          <HomeIcon />
        </IconButton>

        <Box flexGrow={1} />

        {/* Settings Button */}
        <IconButton
          edge="end"
          color="inherit"
          component={Link}
          href="/settings"
        >
          <SettingsIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
