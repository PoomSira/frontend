import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar.js";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import tt from "@tomtom-international/web-sdk-maps";

const RouteIn = () => {
  const mapElement = useRef();
  const [map, setMap] = useState(null);

  useEffect(() => {
    const ttMap = tt.map({
      key: "7abimzQOcxJ0GMskhLcvoai4bAA1Zb4s", // Replace with your TomTom API key
      container: mapElement.current,
      center: [144.9631, -37.8136], // Default center coordinates [longitude, latitude]
      zoom: 10,
    });

    setMap(ttMap);

    return () => {
      if (ttMap) {
        ttMap.remove();
      }
    };
  }, []);

  return (
    <div className="relative h-screen bg-slate-20">
      {/* Landing Section */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-r from-green-500 via-green-200 to-blue-500"></div>
      <div className="relative z-10">
        <Navbar />
      </div>
      <div className="absolute top-0 left-0 w-full h-1/2 flex items-center justify-center z-5">
        <h1 className="text-white text-6xl font-bold">
          Explore safety route in CBD
        </h1>
      </div>

      {/* Grid Section */}
      <div className="relative z-10 mt-[38vh] p-5">
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-4 bg-white shadow-md border border-zinc-300 rounded-md p-5">
            {/* Display TomTom map here */}
            <div
              ref={mapElement}
              className="w-full h-full"
              style={{ height: "500px" }}
            ></div>
          </div>
          <div className="col-span-1 bg-white shadow-md border border-zinc-300 rounded-md p-5"></div>
        </div>
      </div>
    </div>
  );
};

export default RouteIn;
