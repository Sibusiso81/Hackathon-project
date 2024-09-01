import { useState } from "react";
import { Auth, SignIn } from "@supabase/auth-ui-react";
import { supabase } from "./superbaseClient";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return <Outlet />;
}

export default App;
