import React from "react";
import myImage from "../Navbar/1.png";
function Navbar() {
  return (
    <div className="flex flex-row justify-between font-poppins p-1">
      <div className="flex flex-row items-center ">
        <div className="bg-cover">
          <img
            className="p-1 rounded-full h-16 w-16 bg-cover"
            src={myImage}
            alt=""
          />
        </div>
        <h1 className="p-1 text-xl font-medium font-poppins">GeoSpartans</h1>
      </div>
      <div className="flex items-center pr-4">
        <ul className="flex flex-row space-x-4 items-center ">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Team">Team</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
