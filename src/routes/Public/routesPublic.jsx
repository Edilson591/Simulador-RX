import React from "react";
import { Routes, Route } from "react-router-dom";
import Signin from "../../pages/Signin/Signin";
import ForgotPassword from "../../pages/ForgetPassoword/ForgotPassword";


const PublicRoutes = () => {
  return (
      <Routes>
       <Route path="/" element={<Signin/>} />
       <Route path="/forgotpassoword" element={<ForgotPassword/>} />
      </Routes>
  );
};

export default PublicRoutes;
