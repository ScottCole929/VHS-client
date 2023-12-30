import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { Authorized } from "./Authorized";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { AllTapes } from "./AllTapes";
import { TapeReviews } from "./TapeReviews";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<Authorized />}>
          <Route path="/" element={<AllTapes />} />
          <Route path="/review/:tapeId" element={<TapeReviews />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
