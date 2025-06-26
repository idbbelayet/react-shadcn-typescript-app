import { Badge } from "@/components/ui/badge";
import { RootState } from "@/redux/store";
import { Bell } from "lucide-react";
import { useSelector } from "react-redux";
function NotificationInfo() {
  console.log("NotificationInfo");
  const counterValue = useSelector((state: RootState) => state.counter.value);
  return (
    <div className="relative inline-block">
      <Bell className="h-4 w-4" />
      <Badge className="absolute -top-3 -right-2 rounded-full px-1.5 py-0 text-xs bg-primary">
        {counterValue}
      </Badge>
    </div>
  );
}

export default NotificationInfo;
