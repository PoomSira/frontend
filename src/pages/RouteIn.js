import React from "react";
import Navbar from "../components/Navbar.js";

const RouteIn = () => {
  return (
    <div className="relative h-screen bg-slate-20">
      {/* Landing Section */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-r from-green-500 via-geen-200 to-blue-500"></div>
      <div className="relative z-10">
        <Navbar />
      </div>
      <div className="absolute top-0 left-0 w-full h-1/2 flex items-center justify-center z-5">
        <h1 className="text-white text-6xl font-bold">
          Explore safety route in CBD
        </h1>
      </div>

      {/* Grid Section */}
      {/* <div className="relative z-10 mt-[38vh] p-5">
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-4 bg-white shadow-md border border-zinc-300 rounded-md p-5">
            <img
              src={`${process.env.PUBLIC_URL}/street-map.jpg`}
              alt="Landing"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="col-span-1 bg-white shadow-md border border-zinc-300 rounded-md p-5"></div>
        </div>
      </div> */}
    </div>
  );
};

export default RouteIn;
