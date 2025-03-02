"use client";

import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  Drawer,
} from "@mui/material";
import { useState } from "react";

const SETTINGS_CATEGORIES = [
  {
    id: "appearance",
    label: "Appearance",
    controls: [
      { id: "themeToggle", label: "Theme Mode" },
      { id: "compactMode", label: "Enable Compact Mode" },
    ],
  },
  {
    id: "account",
    label: "Account",
    controls: [
      { id: "changePassword", label: "Change Password" },
      { id: "manageSessions", label: "Manage Sessions" },
    ],
  },
  {
    id: "preferences",
    label: "Preferences",
    controls: [
      { id: "enableNotifications", label: "Enable Notifications" },
      { id: "languageSettings", label: "Language Settings" },
    ],
  },
];

interface SettingsSidebarProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
  onSelectControl: (controlId: string) => void;
  drawerOpen: boolean;
  onCloseDrawer: () => void;
}

export default function SettingsSidebar({
  selectedCategory,
  onSelectCategory,
  onSelectControl,
  drawerOpen,
  onCloseDrawer,
}: SettingsSidebarProps) {
  return (
    <Drawer
      variant="permanent"
      open={drawerOpen}
      onClose={onCloseDrawer}
      sx={{
        width: "250px",
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: "250px",
          boxSizing: "border-box",
          borderRight: "1px solid #ccc",
        },
      }}
    >
      <Typography variant="h6" sx={{ p: 2 }}>
        Settings
      </Typography>
      <Divider />
      <List>
        {SETTINGS_CATEGORIES.map((category) => (
          <Box key={category.id}>
            <ListItemButton
              selected={selectedCategory === category.id}
              onClick={() => onSelectCategory(category.id)}
            >
              <ListItemText primary={category.label} />
            </ListItemButton>
            <List sx={{ pl: 3 }}>
              {category.controls.map((control) => (
                <ListItemButton
                  key={control.id}
                  onClick={() => onSelectControl(control.id)}
                >
                  <ListItemText
                    primary={`• ${control.label}`}
                    sx={{ fontSize: "0.875rem", color: "gray" }}
                  />
                </ListItemButton>
              ))}
            </List>
          </Box>
        ))}
      </List>
    </Drawer>
  );
}
