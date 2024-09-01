/* import { SignUp } from "@supabase/auth-ui-react"; */
import { supabase } from "../../superbaseClient";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
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
      setLoading(false);

      console.log(`email sent to ${email}`);
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  const handleVerification = async () => {
    setLoading(true);
    try {
      const {
        data: { session },
        error,
      } = await supabase.auth.verifyOtp({
        email: email,
        token: password,
        type: "email",
      });
      setLoading(false);
      nevigate("/dashboard");
      console.log("Signed up");
      toast("Verification Sent");
    } catch (error) {
      setLoading(false);
      setError(error.message);
      console.log(error);
    }
  };

  return (
    <section className="w-screen h-screen flex flex-col font-poppins">
      <div className="flex flex-col  my-10">
        <div className="grid grid-cols-2 ites-center p-6 mt-10">
          <div className="col-span-1">
            <h1 className="p-10 text-2xl font-bold font-varaiable ">Sign up</h1>
          </div>
          <div className="col-span-1">
            <div className="">
              {/* send Email */}

              <label htmlFor="" className="mb-2 text-3xl p-1  ">
                Email:
              </label>
              <br />
              <div className="flex flex-col">
                <input
                  className="p-1 border border-neutral-700 rounded-md"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                />
                <button
                  className="h-full w-1/2 mx-auto bg-neutral-500 rounded-md mt-4 p-2"
                  onClick={handleSignIn}
                >
                  Send Code
                </button>
              </div>
            </div>
            <div className="mt-6">
              {/* send Email */}

              <label htmlFor="" className="mb-2 text-3xl p-1  ">
                Verification Code
              </label>
              <br />
              <div className="flex flex-col">
                <input
                  className="p-1 border border-neutral-700 rounded-md"
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                />
                <button
                  className="h-full w-1/2 mx-auto bg-neutral-500 rounded-md mt-4 p-2"
                  onClick={handleVerification}
                >
                  Verify Code
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
