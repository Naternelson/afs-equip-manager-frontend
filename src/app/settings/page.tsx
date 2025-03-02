"use client";

import { useState, useMemo, useRef, RefObject } from "react";
import { Container, Box, IconButton, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import SettingsSidebar from "./SettingsSidebar";
import SettingsContent from "./SettingsContent";
import { createSettingsData } from "./settingsData";
import { SectionRefs } from "./types"; // ✅ Use shared type

export default function SettingsPage() {
  const [selectedCategory, setSelectedCategory] =
    useState<string>("appearance");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // ✅ 1. Use `useMemo` to create refs *before* rendering (prevents hydration mismatch)
  const sectionRefs: SectionRefs = useMemo(() => {
    const refs: SectionRefs = {};
    const settingsSections = createSettingsData({}, {}); // ✅ Don't pass refs here

    settingsSections.forEach((section) => {
      refs[section.id] = useRef<HTMLDivElement>(
        null
      ) as RefObject<HTMLDivElement>;
      section.controls.forEach((control) => {
        refs[control.id] = useRef<HTMLDivElement>(
          null
        ) as RefObject<HTMLDivElement>;
      });
    });

    return refs;
  }, []); // ✅ Ensures refs are created before rendering

  // ✅ 2. Scroll handler (ensures correct scrolling)
  const handleScroll = (id: string) => {
    const ref = sectionRefs[id]?.current;
    if (ref instanceof HTMLDivElement) {
      ref.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.hash = id; // Fallback for deep linking
    }
    setDrawerOpen(false); // Close drawer on mobile
  };

  return (
    <Container maxWidth="lg">
      <Box display="flex" height="80vh" mt={4}>
        {/* Mobile Drawer Toggle */}
        {isMobile && (
          <IconButton
            onClick={() => setDrawerOpen(true)}
            sx={{ position: "absolute", top: 10, left: 10 }}
          >
            <MenuIcon />
          </IconButton>
        )}

        {/* Sidebar Navigation (Fully Dynamic) */}
        <SettingsSidebar
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onSelectControl={handleScroll}
          drawerOpen={drawerOpen}
          onCloseDrawer={() => setDrawerOpen(false)}
        />

        {/* Settings Content - Now receiving the correctly structured sectionRefs */}
        <SettingsContent sectionRefs={sectionRefs} />
      </Box>
    </Container>
  );
}
