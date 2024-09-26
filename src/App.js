import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { PrivatePage } from "./Pages/PrivatePage/PrivatePage";
import { PublicPage } from "./Pages/PublicPage/PublicPage";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import { AdminPage } from "./Pages/AdminPage/AdminPage";

function App() {
  const { token, role } = React.useContext(AuthContext);
  useEffect(() => {
    console.log(token);
    console.log(role);
  }, [token, role]);
  return (
    <Routes>
      <Route
        path="/"
        element={
          token ? (
            role === "admin" ? (
              <AdminPage />
            ) : (
              <PrivatePage />
            )
          ) : (
            <PublicPage />
          )
        }
      />
      {/* Маршрут для страницы входа */}
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
