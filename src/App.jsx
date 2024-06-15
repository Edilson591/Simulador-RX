import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import PublicRoutes from "./routes/Public/routesPublic";
import PrivateRoutes from "./routes/Private/routesPrivate";
import { AuthContext } from "./context/authContext";

function App() {
  const { auth } = useContext(AuthContext);

  return (
    <BrowserRouter>
      {/* <PublicRoutes /> */}
      {auth ? <PrivateRoutes /> : <PublicRoutes />}
    </BrowserRouter>
  );
}

export default App;
