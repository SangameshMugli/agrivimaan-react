import React,{useState,useEffect} from "react";
import aboutbg from "../images/aboutbg.png";
import aboutpic from "../images/Aboutpic.webp";
import aerial from "../images/aerial.png";
import adv from "../images/4k.png";
import work from "../images/work.png";
import dronepg from "../images/drone_camera.webp";
import { Link } from "react-router-dom";

function About() {
  
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
  return (
    <div id="about" className="font-para2">
      <div  className=" relative">
        <div>
          <img
            src={aboutbg}
            alt="About Background"
            className="w-full h-[600px] "
          />
        </div>

        <div className="text-blue-700 text-5xl text-center absolute top-20 left-1/2 transform -translate-x-1/2 font-semibold">
          <h1>About Us</h1>
        </div>

        {/* Break-1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 bg-custom-blue text-white py-10 gap-4 md:gap-6">
          <div className="px-4 md:px-10 lg:px-20 text-center md:text-left font-para2">
            <h2 className="text-blue-500 text-3xl pb-4 font-semibold">AGRICULTURE</h2>
            <h1 className="text-2xl">Specializing in Agri Drone Services</h1>
            <p className="text-xl pt-4 pb-4">
              Our expertise in drone technology and agriculture enables
              precision spraying, crop health analysis, and land mapping.
            </p>
            <ol className="text-gray-400 text-xl py-2 font-para3 ">
              <li>&#9989;Precision spraying</li>
              <li>&#9989;Data-driven insights</li>
              <li>&#9989;Expert team of experienced pilots</li>
            </ol>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={aboutpic}
              alt="About Picture"
              className="max-w-full h-auto md:h-80 object-cover"
            />
          </div>
        </div>
      </div>
      {/* break-2 */}
      <div className="bg-card py-10">
  <div className="text-center  ">
    <h2 className="text-blue-600 py-4 text-3xl font-semibold">WHAT WE DO</h2>
    <p className="pb-4 text-3xl">Provide Drone and Aerial Photography Service</p>
  </div>

  <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 md:gap-8 py-8 px-4 font-para3">
    <div className="bg-white h-48 w-full md:w-[400px] mx-4 md:mx-8 border-2 rounded-3xl p-6 md:p-12">
      <h2 className="text-xl font-semibold">Precision Crop Monitoring</h2>
      <p className="text-gray-500 text-lg">Precise imaging, Informed decisions, Efficient farming.</p>
    </div>
    <div className="bg-white h-48 w-full md:w-[400px] mx-4 md:mx-8 border-2 rounded-3xl p-6 md:p-12">
      <h2 className="text-xl font-semibold">Efficient Data Collection</h2>
      <p className="text-lg text-gray-500">Enhanced decision-making, Streamlined processes for timely accuracy.</p>
    </div>
    <div className="bg-white h-48 w-full md:w-[400px] mx-4 md:mx-8 border-2 rounded-3xl p-6 md:p-12">
      <h2 className="text-xl font-semibold">Actionable Insights</h2>
      <p className="text-lg text-gray-500">Actionable insights, Informed decisions, Optimized farming.</p>
    </div>
  </div>
</div>


      {/* Break-3 */}
      <div className="bg-white py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 px-4 md:px-8 lg:px-36">
          <div className="">
            <h2 className="text-3xl pb-2 text-blue-500 font-semibold">AERIAL PROJECT</h2>
            <h2 className="text-3xl">Some Beautiful Projects</h2>
          </div>

          <div>
            <p className="text-gray-600 text-xl font-para2">
              Impressive portfolio. Cutting-edge solutions. Real-world impact.
              Trusted leaders. Customized approach. Unmatched expertise. Success
              stories. Future-focused innovation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-8 lg:px-36 py-10 font-para3">
          <div className="w-full">
            <img
              src={aerial}
              alt="Aerial Drone"
              className="w-full h-60 md:h-[600px] rounded-3xl hover:scale-105 hover:cursor-pointer  duration-300"
            />
            <h1 className="text-xl pt-4 font-semibold">01. AERIAL DRONE</h1>
            <p className="text-lg text-gray-600 font-medium">
              Unleash the power of aerial drones, capture stunning aerial views,
              gather valuable data, and revolutionize industries.
            </p>
          </div>
          <div className="w-full">
            <img
              src={adv}
              alt="4K Advertise"
              className="w-full h-60 md:h-[600px] rounded-3xl hover:scale-105 hover:cursor-pointer  duration-300 mt-10"
            />
            <h1 className="text-xl pt-4 font-semibold">02. 4K ADVERTISE</h1>
            <p className="text-lg text-gray-600 font-medium">
              Elevate your advertising with our 4K drone. Capture stunning
              aerial footage for impactful campaigns. Stand out with
              high-quality visuals.
            </p>
          </div>
          <div className="w-full">
            <img
              src={work}
              alt="Work to Go"
              className="w-full h-60 md:h-[600px] rounded-3xl hover:scale-105 hover:cursor-pointer  duration-300 "
            />
            <h1 className="text-xl pt-4 font-semibold">03. WORK TO GO</h1>
            <p className="text-lg text-gray-600 font-medium">
              Get work done efficiently with our reliable drone solutions. From
              inspections to mapping, our drones are equipped to tackle various
              tasks.
            </p>
          </div>
        </div>
      </div>
      {/* break-4 */}

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
          <p className="text-black   sm:text-lg md:text-3xl pb-4 sm:pb-5 md:pb-6 font-normal">
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
            
            <button className="text-white bg-custom-button hover:scale-105 duration-300  rounded-lg px-4 sm:px-6 md:px-8 py-2 font-bold">
              VIEW GALLERY
            </button>
          </Link>
        </div>
      </div>

      {/* break-5 */}
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

export default About;
