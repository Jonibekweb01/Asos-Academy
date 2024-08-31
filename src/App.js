import React, { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import { PrivatePage } from "./Pages/PrivatePage/PrivatePage";

function App() {
  const { token } = useContext(AuthContext);

  return <>{token ? <PrivatePage /> : <LoginPage />}</>;
}

export default App;
