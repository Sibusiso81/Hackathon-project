import { useState } from "react";
import { Auth } from "@supabase/auth-ui-react";

import "./App.css";

function App() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const handleSignIn = async(event)=>{
    event.prevent
   try{
    const {user,session} = await superbaseClient.auth.SignIn({
      email,
      password,
    })
   }

  }
  return (
    <section>
      <div>
        <h1>Sign In / Sign Up</h1>
        <form>
          <label>Email:</label>
          <input type="email" id="email" value={email} onChange={setEmail(e.targt.value)} />
          <br />
          <label>Password:</label>
          <input type="password" id="password"  value={password} onChange={setPassword(e.targt.value)}/>
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
    </section>
  );
}

export default App;
