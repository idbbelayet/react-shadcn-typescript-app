import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { BellDot, LogOut } from "lucide-react";
import { useAuth } from "../auth/useAuth";
export default function Dashboard() {
  const { logout } = useAuth();

  return (
    <div className="flex flex-col items-center justify-start h-screen">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <h1>Welcome to Dashboard!</h1>
      <div className="flex gap-2 mt-4 mb-4">
        <Button onClick={logout}>
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
        <Button onClick={logout} variant={"outline"}>
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
        <Button variant={"link"} onClick={logout}>
          <BellDot className="mr-2 h-4 w-4" />
        </Button>
        <ThemeToggle />
      </div>

      <Switch />
    </div>
  );
}
