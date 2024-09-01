import React from "react";
import Navbar from "../Navbar/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <section
        className="font-inter flex flex-col w-screen h-screen items-center justify-center"
        id="Home"
      >
        <div className="text-center  flex flex-col  ">
          <h1 className="text-3xl font-bold p-4 font-varaiable">
            Leverage Cutting edge technologies
            <br />
            Grow smart and harvest Big.
          </h1>

          <a
            href=""
            className="bg-neutral-950 text-white h-ful w-32 rounded-lg p-2 mx-auto"
          >
            Sign up
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;
