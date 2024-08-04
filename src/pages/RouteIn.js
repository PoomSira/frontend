import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar.js";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import tt from "@tomtom-international/web-sdk-maps";
import ttServices from "@tomtom-international/web-sdk-services";
import Footer from "../components/Footer.js";

const RouteIn = () => {
  const mapElement = useRef();
  const [map, setMap] = useState(null);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const melbourneCBD = [144.9631, -37.8136];
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const ttMap = tt.map({
      key: "7abimzQOcxJ0GMskhLcvoai4bAA1Zb4s", // Replace with your TomTom API key
      container: mapElement.current,
      center: melbourneCBD, // Corrected center coordinates [longitude, latitude]
      zoom: 10,
    });

    setMap(ttMap);

    return () => {
      if (ttMap) {
        ttMap.remove();
      }
    };
  }, []);

  const geocode = async (address) => {
    try {
      const response = await ttServices.services.fuzzySearch({
        key: "7abimzQOcxJ0GMskhLcvoai4bAA1Zb4s", // Replace with TomTom API key
        query: address,
      });

      console.log(`Geocode response for "${address}":`, response);

      if (response && response.results && response.results.length > 0) {
        const { lng, lat } = response.results[0].position;
        console.log(`Position for "${address}":`, { lng, lat });
        return [lng, lat]; // Ensure longitude is first, then latitude
      } else {
        throw new Error(`Geocoding failed for address: ${address}`);
      }
    } catch (error) {
      console.error(`Geocoding error: ${error}`);
      throw error;
    }
  };

  const calculateBoundingBox = (coordinates) => {
    let minX, minY, maxX, maxY;

    for (const coord of coordinates) {
      if (minX === undefined || coord[0] < minX) {
        minX = coord[0];
      }
      if (minY === undefined || coord[1] < minY) {
        minY = coord[1];
      }
      if (maxX === undefined || coord[0] > maxX) {
        maxX = coord[0];
      }
      if (maxY === undefined || coord[1] > maxY) {
        maxY = coord[1];
      }
    }

    return [
      [minX, minY],
      [maxX, maxY],
    ];
  };

  const addMarker = (lngLat, icon, map) => {
    const markerElement = document.createElement("div");
    markerElement.className = "marker";
    markerElement.style.backgroundImage = `url(${icon})`;
    markerElement.style.backgroundSize = "cover";
    markerElement.style.width = "30px";
    markerElement.style.height = "30px";

    const marker = new tt.Marker({
      element: markerElement,
    })
      .setLngLat(lngLat)
      .addTo(map);

    return marker;
  };

  const handleRoute = async (e) => {
    e.preventDefault();

    try {
      const fromCoords = await geocode(from);
      const toCoords = await geocode(to);

      console.log(`From coordinates: ${fromCoords}`);
      console.log(`To coordinates: ${toCoords}`);

      ttServices.services
        .calculateRoute({
          key: "7abimzQOcxJ0GMskhLcvoai4bAA1Zb4s",
          locations: `${fromCoords.join(",")}:${toCoords.join(",")}`,
        })
        .then((routeData) => {
          console.log("Full route data:", routeData);
          const geojson = routeData.toGeoJson();

          console.log("GeoJSON route data:", geojson);

          if (!geojson) {
            throw new Error("Route data is missing");
          }

          const coordinates = geojson.features[0].geometry.coordinates;
          const bbox = calculateBoundingBox(coordinates);

          const routeLayer = {
            id: "route",
            type: "line",
            source: {
              type: "geojson",
              data: geojson,
            },
            paint: {
              "line-color": "#4a90e2",
              "line-width": 6,
            },
          };

          if (map.getLayer("route")) {
            map.removeLayer("route");
            map.removeSource("route");
          }

          map.addLayer(routeLayer);
          map.fitBounds(bbox, { padding: 20 });

          // Remove existing markers
          markers.forEach((marker) => marker.remove());

          // Add markers for the start and end points
          const newMarkers = [
            addMarker(fromCoords, "/marker-location.png", map), // Add marker png
            addMarker(toCoords, "/marker-location.png", map), // Add marker png
          ];

          setMarkers(newMarkers);
        })
        .catch((error) => {
          console.error(`Route calculation error: ${error}`);
        });
    } catch (error) {
      console.error(`Error in handleRoute: ${error}`);
    }
  };

  return (
    <div className="relative h-screen bg-slate-20">
      {/* Landing Section */}
      <div className="flex-grow relative">
      <img
            src={`${process.env.PUBLIC_URL}/routes.jpg`}
            alt="Routes"
            className="object-cover w-full h-full absolute top-0 left-0 z-0"
          />

      {/* <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-r from-green-500 via-geen-200 to-blue-500"></div> */}
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
          <div className="col-span-1 bg-white shadow-md border border-zinc-300 rounded-md p-5">
            <form onSubmit={handleRoute}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="from"
                >
                  From
                </label>
                <input
                  id="from"
                  type="text"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter starting location"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="to"
                >
                  To
                </label>
                <input
                  id="to"
                  type="text"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter destination"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Direction
              </button>
            </form>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default RouteIn;
