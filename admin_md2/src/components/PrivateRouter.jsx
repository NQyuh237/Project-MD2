import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import NotFound from "./NotFound";
import Login from "./Login";
const isLogin = JSON.parse(localStorage.getItem("adminLogin"));
console.log(isLogin);
function PrivateRouter() {
  return isLogin ? <Login /> : <NotFound />;
}

export default PrivateRouter;
