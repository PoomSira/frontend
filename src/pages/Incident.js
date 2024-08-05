import React from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

const Incident = () => {
  const [selectedOption, setSelectedOption] = useState("plot1.png");
  const [content, setContent] = useState(
    "Out of the total bicycle accidents (16k) that occurred between 2012-2023, 54.9% of the cyclist who met with an accident are in the age range of 30-59 years."
  );

  const handleSelectionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    switch (selectedValue) {
      case "plot1.png":
        setContent(
          "Out of the total bicycle accidents (16k) that occurred between 2012-2023, 54.9% of the cyclists who met with an accident are in the age range of 30-59 years."
        );
        break;
      case "plot2.png":
        setContent(
          "The severity of injuries from bicycle accidents shows that 60% resulted in minor injuries, while 25% were severe."
        );
        break;
      case "plot3.png":
        setContent(
          "The number of bicycle accidents peaks during the afternoon, with 40% occurring between 12 PM and 3 PM."
        );
        break;
      case "plot4.png":
        setContent(
          "Accidents are more frequent in areas with speed zones of 30-40 km/h, accounting for 45% of all incidents."
        );
        break;
      default:
        setContent(
          "Out of the total bicycle accidents (16k) that occurred between 2012-2023, 54.9% of the cyclists who met with an accident are in the age range of 30-59 years."
        );
    }
  };

  return (
    <div className="flex flex-col max-h-screen">
      <div className="flex-grow relative">
        <img
          src={`${process.env.PUBLIC_URL}/incident.jpg`}
          alt="Landing"
          className="object-cover w-full h-full absolute top-0 left-0 z-0"
        />

        <div className="relative z-10">
          <Navbar />
        </div>
        <div className="absolute top-0 left-0 w-full h-1/2 flex items-center justify-center z-5">
          <h1 className="text-black text-6xl font-bold bg-white p-4 rounded-md">
            Cyclink: <span className="text-green-500">Safe</span> Place for
            Cyclists
          </h1>
        </div>
        <div className="relative z-10 mt-[38vh] p-5"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Incident;
