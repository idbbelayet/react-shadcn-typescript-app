import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { Route, Routes } from "react-router";
import { ProtectedRoute } from "./auth/ProtectedRoute";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Registration from "./pages/Registration";
export default function App() {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main className="flex flex-col flex-1">
          <Navbar />

          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/about"
              element={
                <ProtectedRoute>
                  <About />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
      </SidebarProvider>

      <Toaster richColors position="top-right" />
    </>
  );
}
