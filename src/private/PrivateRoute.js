import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { dataLogin } from "../data/Login";

export default function PrivateRoute() {
  return dataLogin.isLogin ? <Outlet /> : <Navigate to="/" />;
}
