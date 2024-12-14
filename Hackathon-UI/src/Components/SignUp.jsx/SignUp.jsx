/* import { SignUp } from "@supabase/auth-ui-react"; */
import { supabase } from "../../superbaseClient";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import myImage from "../Navbar/1.png";
import Loader from "../Loader/loader";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [verify, setVerify] = useState(true);
  const nevigate = useNavigate();

  const handleSignIn = async (event) => {
    setLoading(true);
    try {
      const { user, session } = await supabase.auth.signInWithOtp({
        email: email,
        options: {
          shouldCreateUser: true,
        },
      });
      console.log(`email sent to ${email}`);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  const handleVerification = async () => {
    setVerify(true);
    try {
      const {
        data: { session },
        error,
      } = await supabase.auth.verifyOtp({
        email: email,
        token: password,
        type: "email",
      });
      nevigate("/dashboard");

      

      console.log("Signed up");
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  return (
    <section className="w-screen h-screen flex flex-col font-poppins items-center">
      <div className="flex flex-col">
        <img
          src={myImage}
          alt="GeoSpartans-Logo"
          className="h-32 w-32 mx-auto"
        />

        <h2 className="font-bold font-varaiable text-center text-2xl p-2">
          Sign in to your account
        </h2>
        <div className="">
          {/* send Email */}

          <label htmlFor="" className="mb-2  p-1  ">
            Email address
          </label>
          <br />
          <div className="flex flex-col">
            <input
              className="p-1 border border-neutral-700 rounded-md"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading ? true : false}
            />
            <button
              className="h-full w-full mx-auto bg-neutral-950 rounded-md mt-4 p-2 text-white"
              onClick={handleSignIn}
            >
              {loading ? <Loader /> : "Send Code"}
            </button>
          </div>
        </div>
        <div className="mt-6">
          {/* send Email */}

          <label htmlFor="" className="mb-2  p-1  ">
            Verification Code
          </label>
          <br />
          <div className="flex flex-col">
            <input
              className="p-1 border border-neutral-700 rounded-md"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="h-full w-full mx-auto bg-neutral-950 rounded-md mt-4 p-2 text-white"
              onClick={handleVerification}
            >
              {!verify ? <Loader /> : "Verify"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
