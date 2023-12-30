import { Navigate, Outlet } from "react-router-dom";
import { NavBar } from "./Navbar.jsx";
import React from "react";

export const Authorized = () => {
  if (localStorage.getItem("rare_token")) {
    return (
      <>
        <NavBar />
        <main className="flex items-center justify-center">
          <Outlet />
        </main>
      </>
    );
  }
  return <Navigate to="/login" replace />;
};
