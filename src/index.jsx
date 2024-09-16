import React from "react";
import { createRoot } from "react-dom/client";
import Modal from "react-modal";
import App from "./App.jsx";
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from './styles.js'

import AuthProvider from "./context/authContext";
import { PacientInfoProvider } from "./hooks/pacientContext.jsx";

Modal.setAppElement("#root");


createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <PacientInfoProvider>
          <GlobalStyles/>
          <App /> 
        </PacientInfoProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);

