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

import React from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

function Home() {
  return (
    <div className="flex flex-col max-h-screen">
      <div className="flex-grow relative">
        <img
          src={`${process.env.PUBLIC_URL}/landing.jpg`}
          alt="Landing"
          className="object-cover w-full h-full absolute top-0 left-0 z-0"
        />
        
        <div className="relative z-10">
          <Navbar />
        </div>

        <div className="relative z-10 mt-10 p-5 flex justify-center">
          <h1 className="text-white text-6xl font-bold">
            Cyclink: Safe Place for Cyclists
          </h1>
        </div>
      
        <div className="relative z-10 mt-10 p-5 flex justify-center">
        <div className="block rounded-lg bg-white text-black shadow-lg dark:bg-surface-dark relative w-4/5">
            <img
              className="rounded-lg w-full"
              src={`${process.env.PUBLIC_URL}/cycle2.jpg`}
              alt="cycle"
            />
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <p className="text-white text-center text-3xl bg-black bg-opacity-5 p-4 rounded-lg">
              Cylink is dedicated to enhancing the safety and enjoyment of cycling in the Melbourne CBD. 
              We aim to create a more cyclist-friendly environment by implementing effective safety measures 
              and raising public awareness about cycling safety. By encouraging more people to cycle, we can reduce 
              traffic congestion, improve air quality, and contribute to a significant reduction in carbon emissions. 
              Join us in making Melbourne a greener, healthier, and a more bike-friendly city.
              </p>
            </div>
          </div>
        </div>

        </div>

        <div className="relative z-10 mt-10 p-5 flex justify-center">
        <div className="block rounded-lg bg-white text-black shadow-lg dark:bg-surface-dark relative w-4/5">
            <img
              className="rounded-lg w-full"
              src={`${process.env.PUBLIC_URL}/city.jpg`}
              alt="city"
            />
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <p className="text-white text-center text-5xl bg-black bg-opacity-20 p-4 rounded-lg">
                In Victoria, <span className="font-bold">17.1%</span> of residents reported cycling in the past week, 
                while <span className="font-bold">38.7%</span> did so over the past year. This translates to approximately 
                <span className="font-bold"> 1,128,900</span> residents cycling in a typical week and 
                <span className="font-bold"> 2,562,000</span> cycling at least once annually.
              </p>
            </div>
          </div>
        </div>
       
               {/* New Card Section */}
               <div className="grid-cols-1 sm:grid md:grid-cols-3">
          <div className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white text-surface shadow-lg dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
            <a href="#!">
              <img
                className="rounded-t-lg"
                src={`${process.env.PUBLIC_URL}/eco.jpg`}
                alt="eco"
              />
            </a>
            <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight">Saving the world</h5>
              <p className="mb-4 text-base">
              If bikes and ebikes became 22% of all transport trips in all cities worldwide, greenhouse gas emissions and energy use would be 47% reduced by 2050
              </p>
            </div>
          </div>

          <div className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white text-surface shadow-lg dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
            <a href="#!">
              <img
                className="rounded-t-lg"
                src={`${process.env.PUBLIC_URL}/cost_saving.png`}
                alt="cost saving"
              />
            </a>
            <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight">Cost savings</h5>
              <p className="mb-4 text-base">
              Regular cyclists in Melbourne contribute to $780 million in cost savings
              </p>
            </div>
          </div>

          <div className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white text-surface shadow-lg dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
            <a href="#!">
              <img
                className="rounded-t-lg"
                src={`${process.env.PUBLIC_URL}/potential-trips.png`}
                alt="Potential Trips"
              />
            </a>
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium leading-tight">safety Concern</h5>
              <p className="mb-4 text-base">
              Concern for safety remain the primary barrier
              </p>
            </div>
          </div>


        </div>



      <Footer />
    </div>
  );
}

export default Home;
