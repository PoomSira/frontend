import React from "react";
import Navbar from "../components/Navbar.js";
import MapboxMap from "../components/MapboxMap.js";
import Footer from "../components/Footer.js";

const RouteIn = () => {
  const isRoutePage = window.location.pathname === "/route";
  console.log("Is route page:", isRoutePage);
  console.log("Current path:", window.location.pathname);
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <div className="z-10 w-full backdrop-blur-sm bg-white/70">
        <div className="relative z-10">
          <Navbar />
          <h1 className="text-black text-6xl font-bold p-4 rounded-md">
            Explore <span className="text-green-500">safety</span> route in CBD
          </h1>
        </div>
        <div className="z-10 w-full max-w-screen-xl mx-auto bg-white shadow-md border border-zinc-300 rounded-md p-5 mb-4 items-center">
          <div className="flex justify-center items-center w-full h-full">
            <MapboxMap showDirections={isRoutePage} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RouteIn;
