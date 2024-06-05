import React from "react";
import { createRoot } from "react-dom/client";
import GlobalStyles from "./styles.js";
import App from "./App.jsx";
import  AuthProvider   from "./context/authContext";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <GlobalStyles />
      <App />
    </AuthProvider>
  </React.StrictMode>
);