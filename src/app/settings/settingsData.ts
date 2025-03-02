import { RefObject } from "react";

export type SettingControl = {
  id: string;
  label: string;
  type: "switch" | "autocomplete"; // Expandable for more types later
  options?: string[]; // For dropdowns like theme selection
  action?: (value: string) => void; // Now strictly accepts strings
  ref: RefObject<HTMLDivElement>;
};

export type SettingSection = {
  id: string;
  title: string;
  controls: SettingControl[];
};

export const createSettingsData = (
  refs: Record<string, RefObject<HTMLDivElement>>,
  actions: Record<string, (value: string) => void> // Now only allows strings
): SettingSection[] => [
  {
    id: "appearance",
    title: "Appearance Settings",
    controls: [
      {
        id: "themeMode",
        label: "Theme Mode",
        type: "autocomplete",
        options: ["light", "dark"],
        action: actions.setThemeMode, // Now directly sets the theme
        ref: refs.themeMode,
      },
      {
        id: "compactMode",
        label: "Enable Compact Mode",
        type: "switch",
        action: actions.toggleCompactMode,
        ref: refs.compactMode,
      },
    ],
  },
  {
    id: "account",
    title: "Account Settings",
    controls: [
      {
        id: "changePassword",
        label: "Change Password",
        type: "switch",
        action: actions.changePassword,
        ref: refs.changePassword,
      },
      {
        id: "manageSessions",
        label: "Manage Sessions",
        type: "switch",
        action: actions.manageSessions,
        ref: refs.manageSessions,
      },
    ],
  },
  {
    id: "preferences",
    title: "Preferences",
    controls: [
      {
        id: "enableNotifications",
        label: "Enable Notifications",
        type: "switch",
        action: actions.enableNotifications,
        ref: refs.enableNotifications,
      },
      {
        id: "languageSettings",
        label: "Language Settings",
        type: "switch",
        action: actions.languageSettings,
        ref: refs.languageSettings,
      },
    ],
  },
];
