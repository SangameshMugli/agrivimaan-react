import React ,{useEffect}from "react";
import CardHolder from "./CardHolder";
import p1 from "../images/p1.png";
import p2 from "../images/p2.png";
import p3 from "../images/p3.png";
import p4 from "../images/p4.png";
import bg from "../images/Agriculturebg.png";
import efficiency from "../images/efficiency.png";
import farming from "../images/farming.png";
import time from "../images/time.png";
import safety from "../images/safety.png";
import g4 from "../images/g4.png";
import a1 from "../images/a1.png";
import a2 from "../images/a2.png";
import a3 from "../images/a3.png";
import a4 from "../images/a4.png";


function Agriculture() {

  const cardsData = [
    {
      image: p1,
      title: "Pesticides Spraying",
      description: [
        "Drones minimize the quantity of chemicals used by targeting treatments, reducing the environmental impact.",
        "Drone spraying is faster and more efficient, covering large areas quickly and allowing farmers to complete spraying tasks in a shorter time.",
        "Drone spraying reduces human exposure to potentially harmful chemicals, creating a safer working environment.",
      ],
    },
    {
      image: p2,
      title: "Crop Monitoring and Management",
      description: [
        "Drones identify early signs of stress, diseases, or nutrient deficiencies in crops, allowing prompt intervention.",
        "Record and analyze crop damages for accurate insurance settlement. Data from drones enable farmers to take corrective actions promptly, addressing specific crop issues.",
        "Drones help farmers track crop growth and identify any deviations or problem areas.",
      ],
    },
    {
      image: p3,
      title: "Precision Agriculture",
      description: [
        "Drones apply fertilizers only where needed, reducing waste and optimizing nutrient use.",
        "Drones target areas with pests or diseases, minimizing chemical usage.",
        "Drones optimize water usage based on crop health and moisture data, reducing waste.",
      ],
    },
    {
      image: p4,
      title: "Environmental Monitoring",
      description: [
        "Drones analyze soil erosion patterns, aiding in implementing soil conservation measures.",
        "Drones collect and analyze water samples to assess the impact of farming activities on water quality.",
        "Drones monitor erosion, water quality, and vegetation, allowing farmers to evaluate their environmental impact.",
      ],
    },
  ];

  return (
    <div className="font-para2">
      <div className="relative">
        <div>
          <img src={bg} alt="" className="h-[600px] w-full object-cover" />
        </div>
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
          <h2 className="text-2xl md:text-5xl text-blue-600 font-semibold">
            Drone-as-a-Service
          </h2>
        </div>
      </div>

      {/* break-1 */}

      <div className="bg-white py-8">
        <h2 className=" text-center text-sm md:text-3xl p-4 font-semibold">
          Agriculture
        </h2>
        <p className=" text-center text-sm md:text-2xl p-4 font-medium">
          Increase productivity and efficiency of acres of farmland with drone
          solutions
        </p>
        <div className="p-4 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 font-para">
          {cardsData.map((card, index) => (
            <CardHolder
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
      {/* break-2 */}
      <div className="bg-white py-10">
        <div className="text-center font-para2">
          <h2 className="text-3xl text-blue-600 font-semibold">OUR EXPERTISE</h2>
          <p className="text-2xl pt-4 pb-10">
            Empowering Farmers with Precision Drones
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 sm:px-10 lg:px-20 font-para2">
          <div className="border-2 rounded-2xl hover:scale-105 duration-300 hover:cursor-pointer">
            <img
              src={g4}
              alt=""
              className="rounded-t-2xl w-full h-64 object-cover"
            />
            <p className="text-lg p-4 font-semibold">
              Scaling New Heights in Indian Agriculture: 25000+ Farms
              Transformed by Drones
            </p>
          </div>

          <div className="border-2 rounded-2xl hover:scale-105 duration-300 hover:cursor-pointer">
            <img
              src={a2}
              alt=""
              className="rounded-t-2xl w-full h-64 object-cover"
            />
            <p className="text-lg p-4 font-semibold">
              Unveiling Unprecedented Detail: Data Capture at 2mm/pixel Ground
              Sampling Resolution
            </p>
          </div>

          <div className="border-2 rounded-2xl hover:scale-105 duration-300 hover:cursor-pointer">
            <img
              src={a1}
              alt=""
              className="rounded-t-2xl w-full h-64 object-cover"
            />
            <p className="text-lg p-4 font-semibold">
              Precise AI/ML Models: Counting Plants, Analyzing Uniformity, and
              Detecting Tassels with Accuracy
            </p>
          </div>
        </div>
      </div>

      {/* break-3 */}

      <div className="bg-custom-blue py-10 text-white font-para3">
        <div>
          <div className="text-center px-4 sm:px-10 md:px-80">
            <h2 className="text-blue-600 text-3xl font-semibold">HOW WE DELIVER</h2>
            <p className="text-2xl md:text-2xl py-4">
              Bringing Precision to Your Fields Delivering Agricultural
              Excellence with Drones
            </p>
          </div>
        </div>

        <div className="p-4 sm:p-10 flex flex-col sm:flex-row justify-evenly gap-4 sm:gap-10">
          <div>
            <img
              src={a3}
              alt=""
              className="border-4 border-white rounded-xl h-80 w-full object-cover hover:scale-105 duration-300 hover:cursor-pointer"
            />
          </div>
          <div>
            <img
              src={a4}
              alt=""
              className="border-4 rounded-xl border-white h-80 w-full object-cover hover:scale-105 duration-300 hover:cursor-pointer"
            />
          </div>
        </div>

        <div className="px-4 sm:px-10 py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
          <div className="border-2 bg-white text-orange-500 p-6 sm:p-10 rounded-2xl">
            <h2 className="text-xl text-black font-para2 font-semibold">Data Collection:</h2>
            <p className="text-lg py-2">
              High-resolution imagery and multispectral data capture. Analyze
              crop health, soil conditions, and more. Inform decisions, boost
              productivity.
            </p>
            <p className="text-lg py-2">
              Utilizing advanced sensors and aerial platforms, high-resolution
              imagery and multispectral data collection offer a comprehensive
              view of agricultural fields.
            </p>
          </div>

          <div className="border-2 bg-white text-orange-500 p-6 sm:p-10 rounded-2xl">
            <h2 className="text-xl text-black font-para2 font-semibold">Data Processing & Analysis:</h2>
            <p className="text-lg py-2">
              Agri drones perform data processing and analysis to extract
              meaningful insights from captured data.
              <ul className="text-lg list-disc list-inside px-4 sm:px-6">
                <li>
                  They use advanced algorithms and software to analyze crop
                  health, detect pests or diseases, measure vegetation indices,
                  and generate maps for precision agriculture.
                </li>
                <li>
                  Identify problem areas, and make data-driven decisions for
                  improved crop management.
                </li>
              </ul>
            </p>
          </div>

          <div className="border-2 bg-white text-orange-500 p-6 sm:p-10 rounded-2xl">
            <h2 className="text-xl text-black font-para2 font-semibold">Data Delivery:</h2>
            <p className="text-lg py-2">
              SkyDeck: Share, Analyze, and Generate High-Precision Field Maps.
              Collaborate, Annotate, and Gain Insights for Enhanced Farm
              Management. Simplify Decision-Making with Actionable Reports on
              Farm Health and Yield Potential.
            </p>
            <p className="text-lg py-2">
              SkyDeck seamlessly integrates data delivery with real-time
              analytics, enabling users to access and interpret high-precision
              field maps effortlessly.
            </p>
          </div>
        </div>
      </div>

      {/* break-4 */}
      <div className="bg-white py-10 font-para2">
        <div className="text-center px-96">
          <h2 className="text-3xl text-blue-600 font-semibold">BENEFITS</h2>
          <p className="text-2xl py-8">
            Embrace the Benefits of Drones for Enhanced Efficiency and Higher
            Yields
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10 justify-items-center">
          <div className="hover:cursor-pointer">
            <img
              src={efficiency}
              alt=""
              className="h-32 border-4 p-2 rounded-[20px] hover:scale-105 duration-300 mx-auto md:mx-0"
            />
            <h2 className="text-lg font-semibold py-2 hover:text-sky-500">
              Enhanced Efficiency
            </h2>
          </div>
          <div className="hover:cursor-pointer">
            <img
              src={farming}
              alt=""
              className="h-32 border-4 p-2 rounded-[20px] hover:scale-105 duration-300 mx-auto md:mx-0"
            />
            <h2 className="text-lg font-semibold py-2 hover:text-sky-500 ">
              Precision Farming
            </h2>
          </div>
          <div className="hover:cursor-pointer">
            <img
              src={time}
              alt=""
              className="h-32 border-4 p-2 rounded-[20px] hover:scale-105 duration-300 mx-auto md:mx-0"
            />
            <h2 className="text-lg font-semibold py-2 hover:text-sky-500">
              Time and Cost Savings
            </h2>
          </div>
          <div className="hover:cursor-pointer">
            <img
              src={safety}
              alt=""
              className="h-32 border-4 p-2 rounded-[20px] hover:scale-105 duration-300 mx-auto md:mx-0"
            />
            <h2 className="text-lg font-semibold py-2 hover:text-sky-500">
              Elevating Farm Safety
            </h2>
          </div>
        </div>
      </div>

      {/* break-5 */}
      <div className="bg-card font-para2">
        <div className="bg-card py-10">
          <div className="text-center py-10">
            <h2 className="text-3xl text-blue-600 font-semibold py-2">RESOURCES</h2>
            <p className="text-2xl pt-4">
              Unlock Accurate Data Insights with our End-to-End Drone Solutions
            </p>
          </div>
          <div className="flex justify-evenly pb-10">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/zUwYQ7BU1vw"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className=" hover:scale-105 duration-300"
            ></iframe>

            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/45XG7shHHpQ"
              title="YouTube video player"
              allow=" autoplay;   "
              allowFullScreen
              className=" hover:scale-105 duration-300"
            ></iframe>
          </div>
        </div>
      </div>

      {/* break-6 */}

      <div id="booknow" className="bg-white w-full py-12">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl py-8 font-semibold">Connect With Us</h2>
        </div>
        <form
          action=""
          className="bg-white text-black p-8 rounded-lg mx-4 md:mx-20 lg:mx-60 font-form"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <input
              type="text"
              placeholder="Name*"
              className="border-2 w-full py-2 px-4 mb-4 rounded hover:border-black"
            />
            <input
              type="email"
              placeholder="Email*"
              className="border-2 w-full py-2 px-4 mb-4 rounded hover:border-black"
            />
            <input
              type="number"
              placeholder="Contact*"
              className="border-2 w-full py-2 px-4 mb-4 rounded hover:border-black"
            />
            <textarea
              name="Message"
              placeholder="Description*"
              className="border-2 w-full py-2 px-4 mb-4 rounded hover:border-black row-span-2"
            ></textarea>
            <input
              type="text"
              placeholder="Organization Name*"
              className="border-2 w-full py-2 px-4 mb-4 rounded hover:border-black"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
            <select
              name="details"
              id="details"
              className="border-2 my-2 py-4 px-4 rounded hover:border-black  w-full"
            >
              <option value="Drone Spray">Drone Spray</option>
              <option value="Purchase">Purchase a Drone</option>
              <option value="partner">Become a Drone Partner</option>
              <option value="others">Others</option>
            </select>
          </div>

          <div className="w-full mb-4 grid grid-cols-1 md:grid-cols-1 gap-2 py-4">
            <label className="col-span-2">
              <input type="checkbox" className="mr-2" />
              AgriVimaan may email and call me with personalized messages and
              event news.
            </label>
            <label>
              <input type="checkbox" className="mr-2" />
              By providing the required details you acknowledge and provide your
              express consent that you have read the Privacy Policy as available
              on our website.
            </label>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded mt-4 w-full md:w-96 font-button"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Agriculture;
