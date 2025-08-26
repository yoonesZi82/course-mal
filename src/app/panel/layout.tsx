import { AppSidebar } from "@/components/panel/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import HeaderPanel from "./components/header/header-panel";

export default function LayoutPanel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-col gap-4 w-full">
        <HeaderPanel />
        <main className="pb-4 w-full container">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
