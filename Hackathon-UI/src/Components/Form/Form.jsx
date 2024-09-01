import React, { useState } from "react";
function Form() {
  const [cropType, setCropType] = useState("");
  const [farmSize, setFarmSize] = useState("");
  const [area, setArea] = useState("");
  const [season, setSeason] = useState("");
  const [dataSent, setDataSent] = useState(false);

  const handleSubmit = () => {
    fetch("https://api/UserInputModel", {
      method: "POST", // Specify the request method
      headers: {
        "Content-Type": "application/json", // Set the content type header
      },
      body: JSON.stringify({
        cropType: cropType,
        FarmSize: farmSize,
        Area: area,
        Season: season,
      }), // Convert the data to a JSON string
    })
      .then((response) => response.json()) // Parse the JSON response
      .then((data) => console.log(data)) // Handle the response data
      .catch((error) => console.error("Error:", error)); // Handle any errors
  };
  return (
    /* 
    Crop type
    farm size 
    area
    season
    my property
    */
    <section className="w-screen h-screen overflow-x-hidden">
      {!!dataSent ? (
        <div className="grid grid-cols-2 ites-center p-6 mt-10">
          <div className="col-span-1">
            <h1 className="p-10 pl-12 text-2xl font-bold font-varaiable mx-auto">
              Crop Yeild Prediction Form
            </h1>
          </div>
          <div className="col-span-1 flexflex-col">
            {/* Crop type */}
            <div class="w-full max-w-sm min-w-[200px] mt-4">
              <label class="block mb-1 text-sm text-slate-800">Crop Type</label>
              <input
                type="text"
                class="w-full h-10 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
                placeholder=""
                onChange={(e) => setCropType(e.target.value)}
              />
            </div>
            {/* farm size */}
            <div class="w-full max-w-sm min-w-[200px] mt-4">
              <label class="block mb-1 text-sm text-slate-800">Farm Size</label>
              <input
                type="text"
                class="w-full h-10 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
                placeholder="Enter your text"
                onChange={(e) => setFarmSize(e.target.value)}
              />
            </div>
            {/* area */}
            <div class="w-full max-w-sm min-w-[200px] mt-4">
              <label class="block mb-1 text-sm text-slate-800">Area</label>
              <input
                type="text"
                class="w-full h-10 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
                placeholder=""
                onChange={(e) => setArea(e.target.value)}
              />
            </div>
            {/* Season */}
            <div class="w-full max-w-sm min-w-[200px] mt-4">
              <label class="block mb-1 text-sm text-slate-800">Season</label>
              <input
                type="text"
                class="w-full h-10 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
                placeholder="Enter your text"
                onChange={(e) => setSeason(e.target.value)}
              />
            </div>
            <button
              className="h-10 w-1/2 mx-auto bg-neutral-950 rounded-md mt-4 p-2 text-white"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
          {/*  */}
        </div>
      ) : (
        <div></div>
      )}
    </section>
  );
}
export default Form;
