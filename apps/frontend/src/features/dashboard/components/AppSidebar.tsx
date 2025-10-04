import { Home, MessageCircleMore, LayoutList, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Link, useRouteContext } from "@tanstack/react-router";
import { TeamSwitcher } from "./TeamSwitcher";

const contentItems = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Comments",
    url: "/comments",
    icon: MessageCircleMore,
  },
  {
    title: "Assigned Comments",
    url: "/assigned",
    icon: LayoutList,
  },
];

const footerItems = [
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const user = useRouteContext({ from: "/_app" });
  return (
    <Sidebar>
      <SidebarHeader>
        <TeamSwitcher teams={user.teams} userActiveTeam={user.activeTeam} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Reddit comments</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {contentItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        {footerItems.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild>
              <a href={item.url}>
                <item.icon />
                <span>{item.title}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarFooter>
    </Sidebar>
  );
}
