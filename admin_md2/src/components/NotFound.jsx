import React from "react";
import { Outlet } from "react-router-dom";

function NotFound() {
  return (
    <div>
      {" "}
      <Outlet />
      404 Page Not Found
    </div>
  );
}

export default NotFound;
