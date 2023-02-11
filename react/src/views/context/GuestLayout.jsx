import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";

function GuestLayout() {
  const { token } = useStateContext();

  if (token) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      Default
      <Outlet />
    </div>
  );
}

export default GuestLayout;
