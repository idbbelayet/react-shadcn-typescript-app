import { JSX } from "react";
import { Navigate } from "react-router";
import { useAuth } from "./useAuth";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};
