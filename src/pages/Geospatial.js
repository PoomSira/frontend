import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar.js";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import tt from "@tomtom-international/web-sdk-maps";
import ttServices from "@tomtom-international/web-sdk-services";
import Papa from "papaparse";
import Footer from "../components/Footer.js";

const Geospatial = () => {
  const mapElement = useRef();
  const [map, setMap] = useState(null);
  const melbourneCBD = [144.9631, -37.8136];

  const colorMap = {
    "Bicycle Route": "hsla(202, 100%, 50%, 1)",
    "Low Severity": "#650099", // Purple
    "Medium Severity": "#FEFF32", // Yellow
    "High Severity": "#FE0000", // Red
  };

  const [filters, setFilters] = useState({
    year: "",
    speedZone: "",
    accidentType: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const getColorBySeverity = (severity) => {
    switch (severity) {
      case "1":
        return "#650099"; // Purple
      case "2":
        return "#FEFF32"; // Yellow
      case "3":
        return "#FE0000"; // Red
      default:
        return "#0000ff"; // Blue
    }
  };

  const filterAccidents = (accident) => {
    const { year, speedZone, accidentType } = filters;
    console.log("Accident object:", accident); // Log the entire object
    console.log("ACCIDENT_DATE:", accident.ACCIDENT_DATE);
    console.log("Year filter:", year);

    if (year) {
      if (!accident.ACCIDENT_DATE || !accident.ACCIDENT_DATE.startsWith(year)) {
        console.log(`Year filter does not match: ${accident.ACCIDENT_DATE}`);
        return false;
      } else {
        console.log(`Year filter matches: ${accident.ACCIDENT_DATE}`);
      }
    }

    if (speedZone) {
      if (!accident.SPEED_ZONE || accident.SPEED_ZONE !== speedZone) {
        console.log(`Speed zone filter does not match: ${accident.SPEED_ZONE}`);
        return false;
      } else {
        console.log(`Speed zone filter matches: ${accident.SPEED_ZONE}`);
      }
    }

    if (accidentType) {
      if (
        !accident.ACCIDENT_TYPE_DESC ||
        accident.ACCIDENT_TYPE_DESC !== accidentType
      ) {
        console.log(
          `Accident type filter does not match: ${accident.ACCIDENT_TYPE_DESC}`
        );
        return false;
      } else {
        console.log(
          `Accident type filter matches: ${accident.ACCIDENT_TYPE_DESC}`
        );
      }
    }

    return true;
  };

  useEffect(() => {
    const ttMap = tt.map({
      key: "7abimzQOcxJ0GMskhLcvoai4bAA1Zb4s", // Replace with TomTom API key
      container: mapElement.current,
      center: melbourneCBD,
      zoom: 12,
    });

    ttMap.on("load", () => {
      // Load GeoJSON data and add it to the map
      fetch(
        "/bicycle-routes-including-informal-on-road-and-off-road-routes.geojson"
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log("GeoJSON data loaded:", data);

          ttMap.addLayer({
            id: "bicycle-routes",
            type: "line",
            source: {
              type: "geojson",
              data: data,
            },
            paint: {
              "line-color": "hsla(202, 100%, 50%, 1)",
              "line-width": 3,
            },
          });

          console.log("GeoJSON layer added to map");
        })
        .catch((error) => {
          console.error("Error loading GeoJSON data:", error);
        });

      // Load and parse the CSV file for accident nodes
      fetch("/node_acc_cbd.csv")
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.text();
        })
        .then((csvText) => {
          console.log("CSV data loaded:", csvText);

          Papa.parse(csvText, {
            header: true,
            complete: (results) => {
              const accidentData = results.data;
              console.log("Parsed accident data:", accidentData);

              // Filter accident nodes
              const filteredAccidents = accidentData.filter(filterAccidents);

              // Add accident nodes to the map
              filteredAccidents.forEach((accident, index) => {
                const { LATITUDE, LONGITUDE, SEVERITY } = accident;
                console.log(
                  `Accident ${index} - Lat: ${LATITUDE}, Lng: ${LONGITUDE}`
                );
                if (LATITUDE && LONGITUDE) {
                  const lat = parseFloat(LATITUDE);
                  const lng = parseFloat(LONGITUDE);

                  if (!isNaN(lat) && !isNaN(lng)) {
                    const color = getColorBySeverity(SEVERITY);

                    const markerElement = document.createElement("div");
                    markerElement.style.backgroundColor = color;
                    markerElement.style.width = "15px";
                    markerElement.style.height = "15px";
                    markerElement.style.borderRadius = "50%";

                    new tt.Marker({
                      element: markerElement,
                    })
                      .setLngLat([lng, lat])
                      .addTo(ttMap);
                    console.log(
                      `Marker added at [${lng}, ${lat}] with color ${color}`
                    );
                  } else {
                    console.warn(
                      `Invalid coordinates for accident ${index}: [${lng}, ${lat}]`
                    );
                  }
                } else {
                  console.warn(`Missing coordinates for accident ${index}`);
                }
              });

              console.log("Accident nodes added to map");
            },
            error: (error) => {
              console.error("Error parsing CSV data:", error);
            },
          });
        })
        .catch((error) => {
          console.error("Error fetching CSV data:", error);
        });
    });

    setMap(ttMap);

    return () => {
      if (ttMap) {
        ttMap.remove();
      }
    };
  }, [filters]);

  return (
    <div className="relative h-screen bg-slate-20">
      {/* Landing Section */}
      <div className="flex-grow relative">
        <img
          src={`${process.env.PUBLIC_URL}/geospa.jpg`}
          alt="GeoSpatial"
          className="object-cover w-full h-full absolute top-0 left-0 z-0"
        />

        <div className="relative z-10">
          <Navbar />
        </div>
        <div className="absolute top-0 left-0 w-full h-1/2 flex items-center justify-center z-5">
          <h1 className="text-black text-6xl font-bold bg-white p-4 rounded-md">
            Explore <span className="text-green-500">safety</span> route in CBD
          </h1>
        </div>

        <div className="relative z-10 mt-[25vh] p-5">
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-4 bg-white shadow-md border border-zinc-300 rounded-md p-1">
              {/* Display TomTom map here */}
              <div
                ref={mapElement}
                className="w-full h-full"
                style={{ height: "500px" }}
              ></div>
            </div>
            <div className="col-span-1 bg-white shadow-md border border-zinc-300 rounded-md p-5">
              <form>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="year"
                  >
                    Year
                  </label>
                  <select
                    id="year"
                    name="year"
                    value={filters.year}
                    onChange={handleFilterChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="">All</option>
                    <option value="2012">2012</option>
                    <option value="2013">2013</option>
                    <option value="2014">2014</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="speedZone"
                  >
                    Speed Zone
                  </label>
                  <select
                    id="speedZone"
                    name="speedZone"
                    value={filters.speedZone}
                    onChange={handleFilterChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="">All</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                    <option value="60">60</option>
                    <option value="999">Unknown</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="accidentType"
                  >
                    Accident Type
                  </label>
                  <select
                    id="accidentType"
                    name="accidentType"
                    value={filters.accidentType}
                    onChange={handleFilterChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="">All</option>
                    <option value="Collision with vehicle">
                      Collision with vehicle
                    </option>
                    <option value="Struck Pedestrian">Struck Pedestrian</option>
                    <option value="Collision with a fixed object">
                      Collision with a fixed object
                    </option>
                    <option value="No collision and no object struck">
                      No collision and no object struck
                    </option>
                  </select>
                </div>
              </form>

              {/* Legend Section */}
              <div className="bg-white shadow-md border border-zinc-300 rounded-md p-5 mt-5">
                <h2 className="text-gray-700 text-lg font-bold mb-4">
                  Severity Level
                </h2>
                {Object.entries(colorMap).map(([label, color]) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      margin: "5px 0",
                    }}
                  >
                    <div
                      style={{
                        width: label === "Bicycle Route" ? "20px" : "20px",
                        height: label === "Bicycle Route" ? "5px" : "20px",
                        backgroundColor: color,
                        marginRight: "10px",
                        borderRadius: label === "Bicycle Route" ? "0" : "50%",
                      }}
                    ></div>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Geospatial;
