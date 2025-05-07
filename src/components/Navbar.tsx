import UserInfo from "@/auth/UserInfo";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

import { RootState } from "@/redux/store";
import { Settings } from "lucide-react";
import { useSelector } from "react-redux";
import Logout from "./Logout";
import NotificationInfo from "./NotificationInfo";
import ThemeToggle from "./ThemeToggle";
import { Button } from "./ui/button";
function Navbar() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

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
            <NotificationInfo />
            <ThemeToggle />
            {
              <Popover>
                <PopoverTrigger className="cursor-pointer">
                  {isAuthenticated && <UserInfo />}
                </PopoverTrigger>
                <PopoverContent>
                  <ul className="flex flex-col space-y-2">
                    <li>{isAuthenticated && <UserInfo />}</li>
                    <Separator />
                    <li>
                      <Logout />
                    </li>
                  </ul>
                </PopoverContent>
              </Popover>
            }
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
