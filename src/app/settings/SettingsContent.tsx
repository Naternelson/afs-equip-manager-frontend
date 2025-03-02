"use client";

import {
  Box,
  Typography,
  Divider,
  Autocomplete,
  TextField,
  Switch,
} from "@mui/material";
import { useTheme as useAppTheme } from "@/context/ThemeContext";
import { createSettingsData } from "./settingsData";
import { SectionRefs } from "./types"; // ✅ Use shared type

export default function SettingsContent({
  sectionRefs,
}: {
  sectionRefs: SectionRefs;
}) {
  const { themeMode, setThemeMode } = useAppTheme();

  // Define actions for each setting
  const actions: Record<string, (value: string) => void> = {
    setThemeMode: (value) => setThemeMode(value),
    toggleCompactMode: (value) => console.log("Compact Mode:", value),
    changePassword: (value) => console.log("Change Password:", value),
    manageSessions: (value) => console.log("Manage Sessions:", value),
    enableNotifications: (value) => console.log("Enable Notifications:", value),
    languageSettings: (value) => console.log("Language Settings:", value),
  };

  // Generate settings structure
  const settingsSections = createSettingsData(sectionRefs, actions);

  return (
    <Box sx={{ flexGrow: 1, overflowY: "auto", pl: 4, height: "100%" }}>
      {settingsSections.map((section) => (
        <Box key={section.id} ref={sectionRefs[section.id]} sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            {section.title}
          </Typography>
          <Divider sx={{ mb: 2 }} />

          {section.controls.map((control) => (
            <Box
              key={control.id}
              ref={sectionRefs[control.id]}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              mb={2}
            >
              <Typography variant="body1">{control.label}</Typography>
              {control.type === "autocomplete" ? (
                <Autocomplete
                  options={control.options || []}
                  value={themeMode}
                  onChange={(_, newValue) =>
                    newValue && control.action?.(newValue)
                  }
                  renderInput={(params) => (
                    <TextField {...params} variant="outlined" size="small" />
                  )}
                  sx={{ width: 150 }}
                />
              ) : (
                <Switch
                  onChange={(e) =>
                    control.action?.(e.target.checked.toString())
                  }
                />
              )}
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
}
