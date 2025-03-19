import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="h-100 col-12 bg-danger d-flex">
      <nav className="d-flex flex-column">
        <Link to={"/profile"}>profile</Link>
        <Link to={"/chats"}>chats</Link>
        <Link to={"/groups"}>groups</Link>
        <Link to={"/contacts"}>contacts</Link>
        <Link to={"/settings"}>settings</Link>
      </nav>
      <Outlet />
      <h1>Messages</h1>
    </div>
  );
}
