import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout";
import { usePath } from "./store";

export default function App() {
  const { path } = usePath();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {path.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Route>

        <Route path="/">
          <Route path="/login" element={<h1>Login</h1>} />
          <Route path="/register" element={<h1>Register</h1>} />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </div>
  );
}
