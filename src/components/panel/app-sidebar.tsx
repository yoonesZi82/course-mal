"use client";

import * as React from "react";
import {
  Bot,
  Clapperboard,
  Github,
  ListFilter,
  NotebookPen,
  Plus,
  Settings,
  Settings2,
  Smartphone,
  SquareTerminal,
} from "lucide-react";
import { Google } from "iconsax-reactjs";
import { NavMain } from "@/components/panel/nav-main";
import { NavOther } from "@/components/panel/nav-other";
import { NavUser } from "@/components/panel/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "yoones",
    email: "yoones.zamani8082@yahoo.com",
    avatar: "/avatars/yoones.jpg",
  },
  navMain: [
    {
      title: "Courses",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "List Courses",
          url: "/panel/courses",
          icon: ListFilter,
        },
        {
          title: "Add Course",
          url: "/panel/courses/add",
          icon: Plus,
        },
        {
          title: "Add Video to Course",
          url: "/panel/courses/add-video",
          icon: Clapperboard,
        },
        {
          title: "Settings",
          url: "/panel/courses/setting",
          icon: Settings,
        },
      ],
    },
    {
      title: "Blogs",
      url: "#",
      icon: NotebookPen,
      isActive: true,
      items: [
        {
          title: "List Blogs",
          url: "#",
          icon: ListFilter,
        },
        {
          title: "Add Blog",
          url: "#",
          icon: Plus,
        },
        {
          title: "Settings",
          url: "#",
          icon: Settings,
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      isActive: true,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
      ],
    },
    {
      title: "Bots",
      url: "#",
      icon: Bot,
      isActive: false,
      items: [
        {
          title: "List Bots",
          url: "#",
        },
        {
          title: "Add Bot",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
  ],
  connections: [
    {
      name: "Connect to google",
      url: "#",
      icon: Google,
      isActive: true,
    },
    {
      name: "Connect to github",
      url: "#",
      icon: Github,
      isActive: false,
    },
  ],
  applications: [
    {
      name: "Android",
      url: "#",
      icon: Smartphone,
    },
    {
      name: "IOS",
      url: "#",
      icon: Smartphone,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavOther title="Connections" other={data.connections} />
        <NavOther title="Applications" other={data.applications} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
