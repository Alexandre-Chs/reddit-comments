"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import type { Teams } from "@reddit-comments/types";
import { teamActive } from "../api/teams";
import { useRouter } from "@tanstack/react-router";
import { toast } from "sonner";

export function TeamSwitcher({ teams, userActiveTeam }: { teams: Teams[]; userActiveTeam: Teams | null }) {
  const [activeTeam, setActiveTeam] = React.useState(userActiveTeam ?? teams[0]);

  const router = useRouter();

  const handleActiveTeam = async (team: Teams) => {
    setActiveTeam(team);
    const response = await teamActive(team.id);
    if (!response.ok) {
      toast.error("An error occurred while switching teams, please try again");
      return;
    }

    toast.success(`Switched to team ${team.name}`);
    router.invalidate();
  };

  if (!activeTeam) return null;
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton className="w-fit px-1.5">
              <span className="truncate font-medium">{activeTeam.name}</span>
              <ChevronDown className="opacity-50" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64 rounded-lg" align="start" side="bottom" sideOffset={4}>
            <DropdownMenuLabel className="text-muted-foreground text-xs">Teams</DropdownMenuLabel>
            {teams.map((team) => (
              <DropdownMenuItem key={team.id} onClick={() => handleActiveTeam(team)} className="gap-2 p-2">
                {team.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
