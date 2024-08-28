import { useState } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { superbase } from "./superbaseClient";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignIn = async (event) => {
    event.prevent;
    try {
      const { user, session } = await superbase.auth.SignIn({
        email,
        password,
      });
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignUp = async (event) => {
    try {
      const { user, session } = await superbase.auth.SignUp({
        email,
        password,
      });
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <Dashboard />
    </>
  );
}

export default App;
