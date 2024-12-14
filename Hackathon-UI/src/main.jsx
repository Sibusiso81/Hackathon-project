import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "./LandingPage.jsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import Chatbot from "./Components/ChatBot/chatbot.jsx";
/* import Dashboard from "./Components/Dashboard/Dashboard.jsx"; */

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<LandingPage />}></Route>
      <Route path="dashboard" element={<Dashboard />}></Route>
      {/* Add Chatbot to routes */}
      <Route path="chatbot" element={<Chatbot />}></Route>
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
