import { useAuth } from "@/auth/useAuth";
import UserInfo from "@/auth/UserInfo";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Bell, LogOut, Settings } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Button } from "./ui/button";
function Navbar() {
  const { logout, isAuthenticated } = useAuth(); // Assuming you have a way to get the current user
  return (
    <div>
      <nav className="p-2 border-b bg-sidebar ">
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold">
            <SidebarTrigger className="rounded-full " />
          </div>
          <ul className="flex space-x-4">
            {/* <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li> */}
          </ul>
          <div className="flex items-center space-x-4">
            <Button
              variant={"ghost"}
              className="rounded-full active:animate-ping"
            >
              <Settings className="h-4 w-4" />
            </Button>
            <Button
              variant={"ghost"}
              className="rounded-full active:animate-ping"
            >
              <Bell className="h-4 w-4" />
            </Button>
            <ThemeToggle />
            {isAuthenticated && (
              <Popover>
                <PopoverTrigger className="cursor-pointer">
                  <UserInfo />
                </PopoverTrigger>
                <PopoverContent>
                  <ul className="flex flex-col space-y-2">
                    <li>
                      <UserInfo />
                    </li>

                    <Separator />

                    <li>
                      <Button
                        onClick={logout}
                        variant={"ghost"}
                        className="w-full justify-start"
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        Logout
                      </Button>
                    </li>
                  </ul>
                </PopoverContent>
              </Popover>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
