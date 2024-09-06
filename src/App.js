import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { PrivatePage } from "./Pages/PrivatePage/PrivatePage";
import { PublicPage } from "./Pages/PublicPage/PublicPage";
import { LoginPage } from "./Pages/LoginPage/LoginPage";

function App() {
  const { token } = React.useContext(AuthContext);
  return (
    <Routes>
      <Route path="/" element={token ? <PrivatePage /> : <PublicPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;

