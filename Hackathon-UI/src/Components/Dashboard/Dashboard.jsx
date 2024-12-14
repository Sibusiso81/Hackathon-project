import React, { useState } from "react";
import { SignUp } from "@supabase/auth-ui-react";
import { supabase } from "../../superbaseClient";
import Navbar from "../Navbar/Navbar";
import myImage from "../Navbar/1.png";
import { Link, useNavigate } from "react-router-dom";
import Form from "../Form/Form";

function Dashboard() {
  const [view, setView] = useState("");
  const nevigate = useNavigate();

  return (
    <section className="w-screen h-screen overflow-x-hidden">
      <div className="flex flex-row justify-between font-poppins p-1">
        <div className="flex flex-row items-center ">
          <div className="bg-cover">
            <img
              className="p-1 rounded-full h-16 w-16 bg-cover"
              src={myImage}
              alt="logo"
            />
          </div>
          <h1 className="p-1 text-xl font-medium font-poppins">GeoSpartans</h1>
        </div>
        <div className="flex items-center pr-4">
          <ul className="flex flex-row space-x-4 items-center ">
            <li className="pr-4">
              <a href="#home">
                <Link to={"/chatbot"}>Chatbot</Link>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Form />
    </section>
  );
}

export default Dashboard;
