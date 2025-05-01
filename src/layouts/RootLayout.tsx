import { AppSidebar } from "@/components/app-sidebar";
import Navbar from "@/components/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main className="flex flex-col flex-1">
          <Navbar />
          <Outlet />
        </main>
      </SidebarProvider>

      <Toaster richColors position="top-right" />
    </>
  );
};

export default RootLayout;
