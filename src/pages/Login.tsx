import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";
import axios from "../api/axios";
import { useAuth } from "../auth/useAuth";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/login", { email, password });
      auth.login(res.data.token, res.data.user);
      auth.user = res.data.user;
      navigate("/");
    } catch {
      toast.warning("Invalid credentials");
    }
  };

  return (
    <Card className="w-[400px] mx-auto mt-20 p-4 shadow-sm rounded-md border">
      <CardHeader>
        <CardTitle>User Login</CardTitle>
        <CardDescription>
          Login application using email and password
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                type="password"
              />
            </div>
            <div className="flex items-center justify-end space-x-2   mt-4">
              <Button type="submit">Login</Button>
              <Link
                to="/login"
                className={buttonVariants({ variant: "outline" })}
              >
                Register
              </Link>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
