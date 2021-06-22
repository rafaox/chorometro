import React from "react";

import { Stack } from "@chakra-ui/react";

import { NavSection } from "./NavSection";
import { NavLink } from "./NavLink";

import { IoMdTrophy } from "react-icons/io";
import { FaSadCry } from "react-icons/fa";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start" position="absolute">
      <NavSection title="GERAL">
        <Stack spacing="6">
          <NavLink icon={FaSadCry} href="/">Choro</NavLink>
          <NavLink icon={IoMdTrophy} href="/ranking">Ranking</NavLink>
        </Stack>
      </NavSection>
    </Stack>
  );
}