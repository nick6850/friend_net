import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

//pages
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Layout from "./layout/Layout";
import Friend from "./pages/Friend/Friend";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="friend/:username" element={<Friend />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
