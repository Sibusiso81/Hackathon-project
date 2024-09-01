import React from "react";

function Navbar() {
  return (
    <div className="flex flex-row justify-between font-poppins">
      <div className="flex flex-row items-center ">
        <div className="bg-cover">
          <img
            className="p-1 rounded-full h-16 w-16 bg-cover"
            src="	https://i.imgur.com/XISpy7h.png"
            alt=""
          />
        </div>
        <h1 className="p-1 text-xl font-medium font-poppins">GeoSpartans</h1>
      </div>
      <div className="flex items-center p-4">
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
