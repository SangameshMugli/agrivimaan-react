import React, { useEffect } from "react";

import bookbg from "../images/bookbg.png";
import CardHolder from "./CardHolder";
import pilot from "../images/pilot.png";
import dronepg from "../images/drone_camera.webp";
import frame1 from "../images/frame1.jpg";
import frame2 from "../images/frame2.jpg";
import frame3 from "../images/frame3.jpg";
import frame4 from "../images/frame4.jpg";
import p1 from "../images/p1.png";
import p2 from "../images/p2.png";
import p3 from "../images/p3.png";
import p4 from "../images/p4.png";
import wheel from "../images/wheelbase.png";
import folding from "../images/folding.png";
import size from "../images/size.png";
import motor from "../images/motor.png";
import { Link } from "react-router-dom";

function Home() {
  const images = [
    "g1.png",
    "g2.png",
    "g3.png",
    "g4.png",
    "g5.png",
    "g6.png",
    "g7.png",
    "g8.png",
    "g9.png",
    "g10.png",
  ];

  const frames = [
    "Frame_4.webp",
    "Frame_5.webp",
    "Frame_7.webp",
    "Frame_6.webp",
  ];

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
    <div id="home" className="font-para2">
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
        <img
          src={bookbg}
          alt="Background"
          className="w-full h-full object-fill"
        />

        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center ">
          <h1 className="text-xl md:text-2xl lg:text-[35px] text-light-blue font-bold">
            PM Drones Revolutionizing Farming Industry
          </h1>
        </div>
      </div>

      {/* break-1*/}

      <div className="bg-gradient-to-r from-icons to-icons py-10">
        <p className="text-black-500 flex text-center justify-center text-sm md:text-3xl p-4 font-semibold">
          Transform your farming operations with Agrivimaan’s advanced
          technology, maximizing yields and streamlining crop management.
        </p>
        <div className="p-4 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 ">
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

      <div className="bg-card py-10">
        <div className="text-center font-para2">
          <h2 className="text-blue-600 text-2xl font-semibold">
            FEATURED TECHNOLOGY
          </h2>
          <h2 className="text-2xl py-4 font-bold">
            New Technology and Features of Our Drone
          </h2>
          <p className="text-2xl text-gray-600">
            New advanced architecture with power-efficient motor and
            high-performance battery.
          </p>
        </div>

        <div className="mt-8 font-para">
          {/* row-1 */}
          <div className="flex flex-col lg:flex-row items-center justify-between lg:px-40 px-4">
            <div className="py-2 text-center lg:text-left">
              <img
                src={wheel}
                alt=""
                className="h-24 w-24 md:h-32 md:w-32 rounded-full mx-auto lg:mx-0"
              />
              <h2 className="text-xl py-4 font-semibold">Wheel Base</h2>
              <p className="text-gray-800 text-lg">
                Impact on stability, maneuverability, and payload capacity.
                Choose longer for stability, shorter for agility. Tailor to
                field size, terrain, and payload needs.
              </p>
            </div>
            {/* <div className="hidden lg:block bg-gray-400 rounded-full h-70 w-[700px] mt-12 lg:mt-48">
        <img src={drone} alt="" className="border-2 rounded-full py-14" />
      </div> */}
            <div className="py-2 pl-0 lg:pl-20 text-center lg:text-left mt-8 lg:mt-0">
              <img
                src={folding}
                alt=""
                className="h-24 w-24 md:h-32 md:w-32 border-2 rounded-full mx-auto lg:mx-0 "
              />
              <h2 className="text-xl py-4 font-semibold">Folding Size</h2>
              <p className="text-gray-800 text-lg">
                Enhances portability, space efficiency, quick deployment,
                versatility, and convenience. Consider build quality and
                reliability for optimal performance and durability.
              </p>
            </div>
          </div>

          {/* row-2 */}
          <div className="flex flex-col lg:flex-row items-center justify-between lg:px-40 px-4 mt-8 lg:mt-20">
            <div className="text-center lg:text-left">
              <img
                src={size}
                alt=""
                className="h-24 w-24 md:h-32 md:w-32 border-2 rounded-full mx-auto lg:mx-0"
              />
              <h2 className="text-xl py-4 font-semibold">Extended Size</h2>
              <p className="text-lg text-gray-800">
                Benefits include increased payload, longer range, improved
                stability, and greater flexibility. Consider trade-offs like
                weight and regulations. Tailor to specific operational needs and
                applications.
              </p>
            </div>
            <div className="text-center lg:text-left pl-20 mt-8 lg:mt-0 ">
              <img
                src={motor}
                alt=""
                className="h-24 w-24 md:h-32 md:w-32 rounded-full mx-auto lg:mx-0 "
              />
              <h2 className="text-xl py-4 font-semibold">Motor</h2>
              <p className="text-lg text-gray-800">
                Powerful brushless motors drive agricultural drones for
                efficient propulsion, while motor control ensures stability.
                Consider thrust, Kv rating, cooling, and redundancy for optimal
                performance and safety.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* break-3*/}

      <div className="bg-white py-10 px-4 sm:px-6 md:px-8 lg:px-12 font-para2">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-blue-500 text-lg sm:text-xl md:text-2xl font-semibold">
              AERIAL PROJECT
            </h2>
            <h1 className="text-gray-900 text-xl sm:text-2xl md:text-3xl py-4 font-bold">
              New Technology and Feature Our Drone
            </h1>
            <p className="text-gray-700  sm:text-xl md:text-2xl mt-2">
              New advanced architecture with power-efficient motor and
              high-performance battery
            </p>
          </div>
          <div className="grid grid-rows-4 sm:grid-rows-4 md:grid-rows-2 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-2 sm:gap-6 md:gap-8 h-min w-auto p-4">
            <div>
              <img
                src={frame1}
                alt=""
                className="w-full h-40 sm:h-60 md:h-80 lg:h-full rounded-[30px]"
              />
            </div>
            <div>
              <img
                src={frame2}
                alt=""
                className="w-full h-40 sm:h-60 md:h-80 lg:h-full rounded-[30px]"
              />
            </div>
            <div className="row-span-2 md:row-span-2">
              <img
                src={frame3}
                alt=""
                className="w-full h-80  sm:h-60 md:h-full lg:h-full rounded-3xl"
              />
            </div>
            <div className="col-span-1 md:col-span-2">
              <img
                src={frame4}
                alt=""
                className="w-full h-40 sm:h-60 md:h-80 lg:h-full rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* break-3*/}

      <div className="bg-green1 font-para2">
        <div className="flex justify-center">
          <img src={dronepg} alt="" className="max-w-full h-auto" />
        </div>

        <div className=" text-center py-10 sm:py-14 md:py-10 mx-4 sm:mx-16 md:mx-10">
          <h2 className="text-blue-500 text-lg sm:text-xl md:text-4xl pb-2 sm:pb-3 md:pb-4 font-semibold">
            Our Gallery
          </h2>
          <h1 className="text-white text-xl  sm:text-2xl md:text-3xl pb-2 sm:pb-3 md:pb-4 font-bold">
            Unforgettable Memories with PM DRONES
          </h1>
          <p className="text-black  sm:text-lg md:text-3xl pb-4 sm:pb-5 md:pb-6 font-normal">
            Explore our captivating agriculture drone gallery, showcasing the
            beauty and efficiency of drone technology in modern farming.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 pb-8 px-4 sm:px-6 md:px-8 ">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex justify-center items-center rounded-xl hover:cursor-pointer hover:scale-105 duration-300"
            >
              <img
                src={require(`../images/${image}`)}
                alt={`image-${index + 1}`}
                className="w-32 h-32 sm:w-36 sm:h-36 md:w-72 md:h-48 border-4 border-slate-500  object-fill rounded-xl"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center pb-10">
          <Link to="/gallery">
            {" "}
            <button className="text-white bg-custom-button hover:scale-105 duration-300  rounded-lg px-4 sm:px-6 md:px-8 py-2 font-bold">
              VIEW GALLERY
            </button>
          </Link>
        </div>
      </div>

      {/* break-3*/}

      <div className="bg-card py-10 sm:py-20 md:py-10 ">
        <div className="container mx-auto px-4">
          <div className=" rounded-xl p-8 md:p-16 flex flex-col lg:flex-row items-center lg:items-start">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-8">
              <img
                src={pilot}
                alt="Pilot 1"
                className="rounded-xl w-full h-auto"
              />
              <img
                src={pilot}
                alt="Pilot 2"
                className="rounded-xl w-full h-auto"
              />
              <img
                src={pilot}
                alt="Pilot 3"
                className="rounded-xl w-full h-auto"
              />
              <img
                src={pilot}
                alt="Pilot 4"
                className="rounded-xl w-full h-auto"
              />
            </div>
            <div className="lg:ml-8 mt-8 lg:mt-0">
              <h2 className="text-blue-500 text-lg sm:text-xl md:text-4xl pb-2 sm:pb-3 md:pb-4 font-semibold">
                OUR TEAM
              </h2>
              <h1 className="text-black text-xl sm:text-2xl md:text-3xl pb-2 sm:pb-3 md:pb-4  ">
                Our Experienced Pilots
              </h1>
              <p className="text-gray-700 text-base sm:text-lg md:text-xl pb-4 sm:pb-5 md:pb-6 font-para3">
                Our experienced pilots bring expertise and professionalism to
                every agriculture drone mission.
              </p>
              <ul className="text-gray-700 text-base sm:text-lg md:text-xl  pl-5 pb-4 sm:pb-5 md:pb-6 font-para3">
                <li>
                  &#9989;In-depth knowledge of drone technology and agriculture
                  practices
                </li>
                <li> &#9989;Precise and efficient operations</li>
                <li>
                  &#9989; Deliver accurate data and optimal results for your
                  farming needs
                </li>
              </ul>
              <button className="text-white bg-custom-button hover:bg-blue-600 rounded-lg px-4 sm:px-6 md:px-8 py-2 font-button">
                JOIN OUR TEAM
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* break-4 */}

      <div className="bg-white py-10 sm:py-20 md:py-32 ">
        <div className="bg-custom-blue border-2 rounded-3xl text-center py-10 sm:py-14 md:py-20 mx-4 sm:mx-16 md:mx-60 ">
          <h2 className="text-blue-500 text-lg sm:text-xl md:text-4xl pb-2 sm:pb-3 md:pb-4 font-semibold">
            LET'S FLY
          </h2>
          <h1 className="text-white text-xl sm:text-2xl md:text-2xl pb-2 sm:pb-3 md:pb-4">
            Start Your Awesome Agricultural Project With Us.
          </h1>
          <p className="text-yellow-400 text-base sm:text-lg md:text-2xl pb-4 sm:pb-5 md:pb-6">
            Join us as we harness the power of drone technology to revolutionize
            farming.
          </p>

          <form action="">
            <input
              type="email"
              placeholder="Your Email here"
              className=" w-60 sm:w-72 md:w-80 border-2  rounded-lg p-2 font-form"
            />
            <button className="text-white bg-custom-button border-2 border-custom-button rounded-lg mx-2 sm:mx-3 md:mx-4 p-2 sm:px-6 md:px-10 font-button">
              Explore
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
