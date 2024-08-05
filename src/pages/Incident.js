// import React from "react";
// import Navbar from "../components/Navbar.js";
// import Footer from "../components/Footer.js";
// import PlotPyComponent from "../components/PlotPyComponent.js";

// const Incident = () => {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <div className="flex-grow relative">
//         <img
//           src={`${process.env.PUBLIC_URL}/incident.jpg`}
//           alt="incident"
//           className="object-cover w-full h-full absolute top-0 left-0 z-0"
//         />
//         {/* <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-r from-green-500 via-geen-200 to-blue-500"></div> */}
//         <div className="relative z-10">
//           <Navbar />
//         </div>
//         <div className="absolute top-0 left-0 w-full h-1/2 flex items-center justify-center z-5">
//           <h1 className="text-black text-6xl font-bold bg-white p-4 rounded-md">
//             Accident <span className="text-green-500">report</span> in CBD
//           </h1>
//         </div>
//         <div className="relative z-10 mt-[38vh] p-5"></div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Incident;


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

        <div className="relative z-10">
          <Navbar />
        </div>


        <div className="absolute top-0 left-0 w-full h-1/2 flex items-center justify-center z-5">
          <h1 className="text-black text-6xl font-bold bg-white p-4 rounded-md">
            Accident <span className="text-green-500">report</span> in CBD
          </h1>
        </div>

        
        <div className="relative z-10 mt-[38vh] p-5">
          <div className="grid grid-cols-1 sm:grid md:grid-cols-2">
            <div className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-md text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
              <a href="#!">
                <img
                  className="rounded-t-lg"
                  src={`${process.env.PUBLIC_URL}/plot1.png`}
                  alt="Plot1"
                />
              </a>
              <div className="p-6">
                <h5 className="mb-2 text-xl font-medium leading-tight">Bicycle Accidents</h5>
                <p className="mb-4 text-base">
                Out of the total bicycle accidents (16k) that occurred between 2012-2023, 54.9% of the cyclist who met 
                with an accident are in the age range of 30-59 years.
                </p>
              </div>
            </div>

            <div className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-md text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
              <a href="#!">
                <img
                  className="rounded-t-lg"
                  src={`${process.env.PUBLIC_URL}/plot2.png`}
                  alt="Plot2"
                />
              </a>
              <div className="p-6">
                <h5 className="mb-2 text-xl font-medium leading-tight">Injuries</h5>
                <p className="mb-4 text-base">
                The percentage of fatalities and serious injuries in bicycle accidents 
                rises sharply for individuals aged 30 and above, peaking at 20% for those aged 70 and above.
                </p>
              </div>
            </div>

            <div className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-md text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
              <a href="#!">
                <img
                  className="rounded-t-lg"
                  src={`${process.env.PUBLIC_URL}/plot3.png`}
                  alt="Plot3"
                />
              </a>
              <div className="p-6">
                <h5 className="mb-2 text-xl font-medium leading-tight">Bicycle incidents during weekdays and weekends</h5>
                <p className="mb-4 text-base">
                The data also highlights distinct patterns in bicycle accidents between weekdays and weekends, as well as at
                 different times of the day. During weekdays, accidents peak at 7 AM and again in the afternoon between 5 
                 and 6 PM. On weekends, accidents tend to peak between 9 and 10 AM, then gradually decrease throughout the 
                 day.
                </p>
              </div>
            </div>

            <div className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-md text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
              <a href="#!">
                <img
                  className="rounded-t-lg"
                  src={`${process.env.PUBLIC_URL}/plot4.png`}
                  alt="plot4"
                />
              </a>
              <div className="p-6">
                <h5 className="mb-2 text-xl font-medium leading-tight">Number of accidents occurred on different speed zones</h5>
                <p className="mb-4 text-base">
                Historical data reveals that a significant number of bicycle accidents occur during daylight hours, particularly on 
                routes with a designated speed zone of 60 km/h. The top three speed zones where accidents are most prevalent are 40 km/h, 
                50 km/h, and 60 km/h.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>



      <Footer />
    </div>
  );
};

export default Incident;
