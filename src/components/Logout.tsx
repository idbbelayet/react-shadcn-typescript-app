import { logoutSuccess } from "@/redux/authSlice";
import { AppDispatch } from "@/redux/store";
import { LogOut } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import Axios from "../api/axios";
import { Button } from "./ui/button";
function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await Axios.post("/auth/logout");
      if (res.status === 200) {
        dispatch(logoutSuccess());
      }
      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button
      variant={"ghost"}
      className="w-full justify-start"
      onClick={handleSubmit}
    >
      <LogOut className="mr-2 h-4 w-4" />
      Logout
    </Button>
  );
}

export default Logout;
