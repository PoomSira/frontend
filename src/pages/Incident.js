import React from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import PlotPyComponent from "../components/PlotPyComponent.js";

const Incident = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow relative">
      <img
            src={`${process.env.PUBLIC_URL}/incident.jpg`}
            alt="incident"
            className="object-cover w-full h-full absolute top-0 left-0 z-0"
          />
        {/* <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-r from-green-500 via-geen-200 to-blue-500"></div> */}
        <div className="relative z-10">
          <Navbar />
        </div>
        <div className="absolute top-0 left-0 w-full h-1/2 flex items-center justify-center z-5">
          <h1 className="text-white text-6xl font-bold">
            Notice accident report in CBD
          </h1>
        </div>
        <div className="relative z-10 mt-[38vh] p-5">
          <PlotPyComponent />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Incident;
