import React from "react";
import { Outlet } from "react-router-dom";

function GuestLayout() {
  return (
    <div>
      For guest users only
      <Outlet />
    </div>
  );
}

export default GuestLayout;
