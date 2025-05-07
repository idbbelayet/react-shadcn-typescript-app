import { RootState } from "@/redux/store";
import { createContext } from "react";
import { useSelector } from "react-redux";

interface User {
  id: string;
  name: string;
  email: string;
  fullName: string;
  userId: number;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user?: User | null;
}

export const AuthContext = createContext<AuthContextType>(null!);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
};
