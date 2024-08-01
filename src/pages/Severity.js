import React from "react";
import Navbar from "../components/Navbar.js";

const Severity = () => {
  return (
    <div
      className="relative  h-screen
    "
    >
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-r from-green-500 via-geen-200 to-blue-500"></div>
      <div className="relative z-10">
        <Navbar />
      </div>
      <div className="absolute top-0 left-0 w-full h-1/2 flex items-center justify-center z-5">
        <h1 className="text-white text-6xl font-bold">
          Discover severity distribution
        </h1>
      </div>
    </div>
  );
};

export default Severity;