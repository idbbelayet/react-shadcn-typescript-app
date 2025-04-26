import { createContext, useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  fullName: string;
  userId: number;
}

interface AuthContextType {
  token: string | null;
  login: (token: string, user: User) => void;
  logout: () => void;
  isAuthenticated: boolean;
  user?: User | null;
}

export const AuthContext = createContext<AuthContextType>(null!);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(() =>
    sessionStorage.getItem("token")
  );
  const [user, setUser] = useState<User | null>(() =>
    sessionStorage.getItem("user")
      ? JSON.parse(sessionStorage.getItem("user")!)
      : null
  );

  const login = (newToken: string, newUser: User) => {
    sessionStorage.setItem("token", newToken);
    sessionStorage.setItem("user", JSON.stringify(newUser));
    setToken(newToken);
    setUser(newUser);
  };

  const logout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    setToken(null);
    setUser(null);
  };

  const isAuthenticated = !!token;
  return (
    <AuthContext.Provider
      value={{ token, login, logout, isAuthenticated, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};
