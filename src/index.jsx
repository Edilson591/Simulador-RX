import React from "react";
import { createRoot } from "react-dom/client";
import Modal from "react-modal";
import GlobalStyles from "./styles.js";
import App from "./App.jsx";
import AuthProvider from "./context/authContext";
import { PacientInfoProvider } from "./hooks/pacientContext.jsx";

Modal.setAppElement("#root");

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <PacientInfoProvider>
        <GlobalStyles />
        <App />
      </PacientInfoProvider>
    </AuthProvider>
  </React.StrictMode>
);
