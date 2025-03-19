import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/profile" element={<h1>Profiel</h1>} />
          <Route path="/chats" element={<h1>Chats</h1>} />
          <Route path="/groups" element={<h1>Groups</h1>} />
          <Route path="/contacts" element={<h1>Contacts</h1>} />
          <Route path="/settings" element={<h1>Settings</h1>} />
        </Route>

        <Route>
          <Route path="/login" element={<h1>Login</h1>} />
          <Route path="/register" element={<h1>Register</h1>} />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </div>
  );
}
