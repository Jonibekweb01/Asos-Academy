import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { PrivatePage } from "./Pages/PrivatePage/PrivatePage";
import { PublicPage } from "./Pages/PublicPage/PublicPage";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import { AdminPage } from "./Pages/AdminPage/AdminPage";

function App() {

  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicPage />
        }
      />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
