"use client";
import React from "react";
import { ChevronRight, type LucideIcon } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
      icon?: LucideIcon;
    }[];
  }[];
}) {
  const pathname = usePathname();
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          const isActive = pathname === item.url;

          return (
            <React.Fragment key={item.title}>
              {item.items ? (
                <Collapsible
                  disabled={!item.isActive}
                  className="group/collapsible"
                  asChild
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton
                        tooltip={item.title}
                        className="cursor-pointer"
                      >
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                        <ChevronRight className="ml-auto group-data-[state=open]/collapsible:rotate-90 transition-transform duration-200" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items?.map((subItem) => {
                          const isActive = pathname === subItem.url;
                          return (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton asChild>
                                <Link
                                  href={subItem.url}
                                  className="relative flex items-center gap-2 px-3 py-2 rounded-md font-medium text-muted-foreground hover:text-primary text-sm transition-colors"
                                >
                                  {isActive && (
                                    <motion.div
                                      layoutId="activeBackground"
                                      className="absolute inset-0 bg-muted-foreground/10 rounded-md"
                                      transition={{
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 18,
                                      }}
                                    />
                                  )}

                                  {isActive && (
                                    <motion.div
                                      layoutId="activeIndicator"
                                      className="top-0 left-0 absolute bg-primary rounded-r-xl w-1 h-full"
                                      transition={{
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 18,
                                      }}
                                    />
                                  )}

                                  {subItem.icon && (
                                    <subItem.icon className="z-10 relative !size-4 !text-black dark:!text-white" />
                                  )}

                                  <span className="z-10 relative">
                                    {subItem.title}
                                  </span>
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          );
                        })}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ) : (
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className="relative transition-colors"
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeBackground"
                          className="absolute inset-0 bg-muted-foreground/10 rounded-md"
                          transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 18,
                          }}
                        />
                      )}

                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="top-0 left-0 absolute bg-primary rounded-r-xl w-1 h-full"
                          transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 18,
                          }}
                        />
                      )}
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )}
            </React.Fragment>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
