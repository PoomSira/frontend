// // src/pages/Home.js

// import React from "react";
// import Navbar from "../components/Navbar.js";
// import Footer from "../components/Footer.js";

// function Home() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <div className="flex-grow relative">
//       <img
//             src={`${process.env.PUBLIC_URL}/landing.jpg`}
//             alt="Landing"
//             className="object-cover w-full h-full absolute top-0 left-0 z-0"
//           />
//         {/* <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-r from-green-500 via-geen-200 to-blue-500"> */}

//         <div className="relative z-10">
//           <Navbar />
//         </div>
//         <div className="absolute top-0 left-0 w-full h-1/2 flex items-center justify-center z-5">
//           <h1 className="text-white text-6xl font-bold">
//             Cyclink: Safe Place for Cyclists
//           </h1>
//         </div>
//       </div>
//       <Footer />
//     </div>

//   );
// }

// export default Home;

// import React from "react";
// import Navbar from "../components/Navbar.js";
// import Footer from "../components/Footer.js";

// function Home() {
//   return (
//     <div className="flex flex-col max-h-screen">
//       <div className="flex-grow relative">
//         <img
//           src={`${process.env.PUBLIC_URL}/landing.jpg`}
//           alt="Landing"
//           className="object-cover w-full h-full absolute top-0 left-0 z-0"
//         />

//         <div className="relative z-10">
//           <Navbar />
//         </div>

//         <div className="relative z-10 mt-10 p-5 flex justify-center">
//           <h1 className="text-black text-6xl font-bold bg-white p-4 rounded-md">
//             Cyclink: <span className="text-green-500">Safe</span> Place for
//             Cyclists
//           </h1>
//         </div>

//         <div className="relative z-10 mt-10 p-5 flex justify-center">
//           <div className="block rounded-lg bg-white text-black shadow-lg dark:bg-surface-dark relative w-4/5"></div>
//         </div>
//       </div>
      

//       <div className="grid grid-cols-3 gap-4 p-5">
//         <div className="col-span-2 bg-white shadow-md border border-zinc-300 rounded-md ">
//           <img
//             className="rounded-lg w-full"
//             src={`${process.env.PUBLIC_URL}/cycle2.jpg`}
//             alt="cycle"
//           />
//         </div>

        

//         <div className="col-span-1 bg-white shadow-md border border-zinc-300 rounded-md p-5">
//           <h3 className="text-black text-3xl font-bold pb-5">
//             What we <span className="text-green-500">do</span>?
//           </h3>
//           <p className="text-white text-center text-xl bg-black p-4 rounded-lg">
//             <span className="text-green-500 font-bold">Cyclink</span> is
//             dedicated to enhancing the safety and enjoyment of cycling in the
//             Melbourne CBD. We aim to create a more cyclist-friendly environment
//             by implementing effective safety measures and raising public
//             awareness about cycling safety. By encouraging more people to cycle,
//             we can reduce traffic congestion, improve air quality, and
//             contribute to a significant reduction in carbon emissions. Join us
//             in making Melbourne a greener, healthier, and a more bike-friendly
//             city.
//           </p>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 gap-4 pr-5 pl-5">
//         <div className="col-span-1 bg-white shadow-md border border-zinc-300 rounded-md">
//           <div className="block rounded-lg bg-white text-black shadow-lg dark:bg-surface-dark relative">
//             <img
//               className="rounded-lg w-full"
//               src={`${process.env.PUBLIC_URL}/city.jpg`}
//               alt="city"
//             />
//             <div className="absolute inset-0 flex items-center justify-center p-6">
//               <p className="text-white text-center text-5xl bg-black bg-opacity-20 p-4 rounded-lg">
//                 In Victoria, <span className="font-bold">17.1%</span> of
//                 residents reported cycling in the past week, while{" "}
//                 <span className="font-bold">38.7%</span> did so over the past
//                 year. This translates to approximately
//                 <span className="font-bold"> 1,128,900</span> residents cycling
//                 in a typical week and
//                 <span className="font-bold"> 2,562,000</span> cycling at least
//                 once annually.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* New Card Section */}
//       <div className="grid grid-cols-1 gap-6 sm:grid md:grid-cols-3">
//         <div className="flex flex-col mx-3 mt-6 self-start rounded-lg bg-white text-surface shadow-md dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
//           <a href="#!">
//             <img
//               className="rounded-t-lg"
//               src={`${process.env.PUBLIC_URL}/eco.jpg`}
//               alt="eco"
//             />
//           </a>
//           <div className="flex flex-col flex-grow p-6">
//             <h5 className="mb-2 text-xl font-medium leading-tight">
//               Saving the world
//             </h5>
//             <p className="mb-4 text-base">
//               If bikes and ebikes became 22% of all transport trips in all
//               cities worldwide, greenhouse gas emissions and energy use would be
//               47% reduced by 2050
//             </p>
//           </div>
//         </div>

//         <div className="flex flex-col mx-3 mt-6 self-start rounded-lg bg-white text-surface shadow-lg dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
//           <a href="#!">
//             <img
//               className="rounded-t-lg"
//               src={`${process.env.PUBLIC_URL}/cost_saving.png`}
//               alt="cost saving"
//             />
//           </a>
//           <div className="flex flex-col flex-grow p-6">
//             <h5 className="mb-2 text-xl font-medium leading-tight">
//               Cost savings
//             </h5>
//             <p className="mb-4 text-base">
//               Regular cyclists in Melbourne contribute to $780 million in cost
//               savings
//             </p>
//           </div>
//         </div>

//         <div className="flex flex-col mx-3 mt-6 self-start rounded-lg bg-white text-surface shadow-lg dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
//           <a href="#!">
//             <img
//               className="rounded-t-lg"
//               src={`${process.env.PUBLIC_URL}/potential-trips.png`}
//               alt="Potential Trips"
//             />
//           </a>
//           <div className="flex flex-col flex-grow p-6">
//             <h5 className="mb-2 text-xl font-medium leading-tight">
//               Safety Concern
//             </h5>
//             <p className="mb-4 text-base">
//               Concern for safety remains the primary barrier
//             </p>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }

// export default Home;




import React, { useState } from "react";
import Footer from "../components/Footer.js";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Incident Reports", href: "/incident" },
  { name: "Safe Routes", href: "/route" },
  { name: "Geospatial", href: "/geospatial" },
];

function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white flex flex-col min-h-screen">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
             {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-black">
          <span className="text-green-500 bg-black rounded-xl">C</span>yclink
        </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link key={item.name} to={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </Link>
            ))}
          </div>
    
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Cyclink</span>
                <img
                  alt="Cyclink logo"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>

        
          </DialogPanel>
        </Dialog>
      </header>

      {/* Main Content */}
      <div className="relative isolate px-6 pt-14 lg:px-8 flex-grow bg-cover bg-center">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">

          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Cyclink<br/>Safe Place for Cyclists
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-900">
              Empowering cyclists with safe routes and incident updates for a worry-free ride.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#NavMenu"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#learn more" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>

{/* Navigation bar*/}
<div id="NavMenu" className="relative z-10 mt-10 p-5 flex justify-center">
  <div className="block rounded-lg bg-white text-black shadow-lg dark:bg-surface-dark relative w-4/5">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-5">
      <div className="flex flex-col items-center text-center justify-center">
        <a href="#why-cycle" className="text-black flex flex-col items-center">
          <img src={`${process.env.PUBLIC_URL}/bicycle.svg`} alt="Why Cycle" className="w-20 h-20 mb-2" />
          <h3 className="text-xl font-bold">Why Cycle?</h3>
        </a>
      </div>
      <div className="flex flex-col items-center text-center justify-center">
        <a href="#incidents" className="text-black flex flex-col items-center">
          <img src={`${process.env.PUBLIC_URL}/Incident-icon.png`} alt="Incidents" className="w-20 h-20 mb-2" />
          <h3 className="text-xl font-bold">Incidents</h3>
        </a>
      </div>
      <div className="flex flex-col items-center text-center justify-center">
        <a href="#safe-routes" className="text-black flex flex-col items-center">
          <img src={`${process.env.PUBLIC_URL}/map.png`} alt="Safe Routes" className="w-20 h-20 mb-2" />
          <h3 className="text-xl font-bold">Safe Routes</h3>
        </a>
      </div>
      <div className="flex flex-col items-center text-center justify-center">
        <a href="#geospatial-map" className="text-black flex flex-col items-center">
          <img src={`${process.env.PUBLIC_URL}/geospatial.png`} alt="Geospatial Map" className="w-20 h-20 mb-2" />
          <h3 className="text-xl font-bold">Geospatial Incident Map</h3>
        </a>
      </div>
    </div>
  </div>
</div>


{/*Card Section*/}
<div class="p-5" section id="why-cycle">
  <div class="flex flex-row justify-center gap-3">
    <div class="flex flex-col bg-white border shadow-xl rounded-xl w-full md:w-1/2 lg:w-1/4">
    <img src={`${process.env.PUBLIC_URL}why-cycle.png`} alt="Safe Routes"/>
      <div class="p-4 md:p-5">
        <h3 class="text-lg font-bold text-gray-800">Why Cycle?</h3>
        <p class="mt-1 text-gray-900">
          Not convinced bicycles are the way to go?
          <ul class="list-disc list-inside">
            <li>12,000 people cycle to work daily, saving $780 million.</li>
            <li>Approximately 270 minutes of cycling per week reduces mortality by 24%.</li>
            <li>Reduce carbon emissions and traffic congestion.</li>
          </ul>
        </p>
        <a class="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#why-cycle">
          Learn more
        </a>
      </div>
    </div>

    <div section id="incidents" class="flex flex-col bg-white border shadow-xl rounded-xl w-full md:w-1/2 lg:w-1/4">
   <img src={`${process.env.PUBLIC_URL}Incident.png`} alt="Incidents"/>
      <div class="p-4 md:p-5">
        <h3 class="text-lg font-bold text-gray-800">Incidents</h3>
        <p class="mt-1 text-gray-900">
          Your safety is our priority. Get the latest and most up-to-date information regarding any recent cycling incidents within the CBD so you can plan your trip with ease!
        </p>
        <a class="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="/incident">
          Explore
        </a>
      </div>
    </div>

    <div section id="safe-routes" class="flex flex-col bg-white border shadow-xl rounded-xl w-full md:w-1/2 lg:w-1/4">
     <img src={`${process.env.PUBLIC_URL}saftey-route.jpg`} alt="Saftey Route"/>
      <div class="p-4 md:p-5">
        <h3 class="text-lg font-bold text-gray-800">Safe Routes</h3>
        <p class="mt-1 text-gray-900">
          Get from Point A to B in a flash. Get the safest route recommendation and off you go! No risks, no worries.
        </p>
        <a class="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="/route">
          Explore
        </a>
      </div>
    </div>

    <div section id="geospatial-map" class="flex flex-col bg-white border shadow-xl rounded-xl w-full md:w-1/2 lg:w-1/4">
     <img src={`${process.env.PUBLIC_URL}geo-map.jpeg`} alt="Geospatial Map"/>
      <div class="p-4 md:p-5">
        <h3 class="text-lg font-bold text-gray-800">Geospatial Incident Map</h3>
        <p class="mt-1 text-gray-900">
          Worried about particular types of incidents or just want to know more about conditions to avoid? Filter incidents by year, zone, speed, and accident type using our handy Geospatial Incident Map.
        </p>
        <a class="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="/geospatial">
          Explore
        </a>
      </div>
      </div>
      </div>
      
   {/* New Card Section */}
        <div section id="learn more" className="grid grid-cols-1 gap-2 sm:grid md:grid-cols-4">
        
          <div className="flex flex-col mx-3 mt-6 self-start rounded-lg bg-white text-surface shadow-xl dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
           <a href="#!">
             <img
              className="rounded-t-lg"
              src={`${process.env.PUBLIC_URL}/city.jpg`}
              alt="eco"
            />
            </a>
            
          <div className="flex flex-col flex-grow p-4">
          
             <p className="mb-4 text-base">
                 In Victoria, <span className="font-bold">17.1%</span> of
                 residents reported cycling in the past week, while{" "}
               <span className="font-bold">38.7%</span> did so over the past
                year. This translates to approximately
                <span className="font-bold"> 1,128,900</span> residents cycling
                in a typical week and <span className="font-bold"> 2,562,000</span> cycling at least
                once annually.
              </p>
          </div>
        </div>
          
        <div className="flex flex-col mx-3 mt-6 self-start rounded-lg bg-white text-surface shadow-xl dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
           <a href="#!">
             <img
              className="rounded-t-lg"
              src={`${process.env.PUBLIC_URL}/eco.jpg`}
              alt="eco"
            />
          </a>
          <div className="flex flex-col flex-grow p-4">
            <h5 className="mb-2 text-xl font-medium leading-tight">
              Saving the world
            </h5>
            <p className="mb-4 text-base">
              If bikes and ebikes became 22% of all transport trips in all
              cities worldwide, greenhouse gas emissions and energy use would be
              47% reduced by 2050
            </p>
          </div>
        </div>

        <div className="flex flex-col mx-3 mt-6 self-start rounded-lg bg-white text-surface shadow-xl dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
          <a href="#!">
            <img
              className="rounded-t-lg"
              src={`${process.env.PUBLIC_URL}/cost_saving.png`}
              alt="cost saving"
            />
          </a>
          <div className="flex flex-col flex-grow p-4">
            <h5 className="mb-2 text-xl font-medium leading-tight">
              Cost savings
            </h5>
            <p className="mb-4 text-base">
              Regular cyclists in Melbourne contribute to $780 million in cost
              savings
            </p>
          </div>
        </div>

        <div className="flex flex-col mx-3 mt-6 self-start rounded-lg bg-white text-surface shadow-xl dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
          <a href="#!">
            <img
              className="rounded-t-lg"
              src={`${process.env.PUBLIC_URL}/potential-trips.png`}
              alt="Potential Trips"
            />
          </a>
          <div className="flex flex-col flex-grow p-4">
            <h5 className="mb-2 text-xl font-medium leading-tight">
              Safety Concern
            </h5>
            <p className="mb-4 text-base">
              Concern for safety remains the primary barrier
            </p>
          </div>
        </div>
      </div>


  </div>



      <Footer />
    </div>
  );
}

export default Home;
