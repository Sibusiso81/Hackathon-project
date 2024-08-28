import { useState } from "react";
import { Auth } from "@supabase/auth-ui-react";

import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const handleSignIn = async (event) => {
    event.prevent;
    try {
      const { user, session } = await superbase.auth.SignIn({
        email,
        password,
      });
      console.log(user);
      console.log(session);
    } catch (error) {
      setError(error.message);
    }
  };

  //
  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const { user, session } = await superbase.auth.signUp({
        email,
        password,
      });
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <section>
      <div>
        <h1>Sign In / Sign Up</h1>
        <form>
          <label>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button onClick={handleSignIn}>Sign In</button>
          <button onClick={handleSignUp}>Sign Up</button>
        </form>
        <Auth
          supabaseUrl={supabaseUrl}
          supabaseKey={supabaseKey}
          theme="dark"
          provider="github"
          view="sign-in"
        />
      </div>
      <h1>sign In</h1>
    </section>
  );
}

export default App;
