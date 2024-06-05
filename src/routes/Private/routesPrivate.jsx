import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../../pages/Home/Home.jsx"

const PrivateRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
  );
};

export default PrivateRoutes;
