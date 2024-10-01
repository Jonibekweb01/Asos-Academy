import { createContext, useEffect, useState } from "react";

// Создаем контекст аутентификации
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));
  const [role, setRole] = useState(JSON.parse(localStorage.getItem("role")));

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", JSON.stringify(token));
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);
  useEffect(() => {
    if (token) {
      localStorage.setItem("role", JSON.stringify(token.data.role));
    } else {
      localStorage.removeItem("role");
    }
  }, [token, role]);

  return (
    <AuthContext.Provider value={{ token, setToken, role, setRole }}>
      {children}
    </AuthContext.Provider>
  );
};
