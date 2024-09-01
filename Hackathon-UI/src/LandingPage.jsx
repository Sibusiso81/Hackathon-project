import React from "react";
import { useState } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { supabase } from "./superbaseClient";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Team from "./Components/Team/Team";
import SignUp from "./Components/SignUp.jsx/SignUp";

function LandingPage() {
  return (
    <main className="overflow-x-hidden">
      <Home />
      <About />
      <Team />
      <SignUp />
    </main>
  );
}

export default LandingPage;
