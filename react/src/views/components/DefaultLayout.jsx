import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";

function DefaultLayout() {
  const { user, token } = useStateContext();

  if (!token) {
    return <Navigate to="/login" />;
  }
  return (
    <div id="defaultLayout">
      <aside>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/users">User</Link>
      </aside>
      <div className="content">
        <header>
          <div>Header</div>
          <div>User information</div>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DefaultLayout;
