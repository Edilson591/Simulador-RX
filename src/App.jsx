import React, { useContext } from "react";
import PublicRoutes from "./routes/Public/routesPublic";
import PrivateRoutes from "./routes/Private/routesPrivate";
import { AuthContext } from "./context/authContext";


function App() {
  const { auth } = useContext(AuthContext);
  
  return (
    <>
      {auth ? <PrivateRoutes /> : <PublicRoutes />}
    </>
  );
}

export default App;
