import React, { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import bgimage from "../images/homebg.png";
import bookb1 from "../images/bookb1.png";
import a4 from "../images/a4.png";

function Book() {
  const [verified, setVerified] = useState(false);
  function onChange(value) {
    console.log("Captcha value:", value);
    setVerified(true);
  }



  return (
    <div id="booknow" className="font-para2">
      <div className="bg-custom-blue relative">
        <div>
          <img
            src={bgimage}
            alt="About Background"
            className="w-full h-[600px] object-cover"
          />
        </div>

        <div className="text-blue-600 text-5xl text-center absolute font-semibold top-10 left-1/2 transform -translate-x-1/2 font-heading">
          <h1>Book Now </h1>
        </div>
      </div>

      {/* break-1 */}
      <div className="bg-white py-10 font-para2">
        <div className="text-center text-2xl mb-6">
          <h2 className="text-3xl font-bold text-blue-600 py-4">
           
            Drones we Provide
          </h2>
          <p className="text-gray-600 mt-2  mx-10">
            Discover our range of high-quality drones designed to meet various
            needs. From agricultural applications to surveying and specialized
            tasks, our drones are equipped with advanced features to ensure top
            performance and reliability. Explore our selection to find the
            perfect drone for your requirements.
          </p>
        </div>

        <div className="p-4 sm:p-10 flex flex-col sm:flex-row justify-evenly gap-4 sm:gap-10">
          <div>
            <img
              src={bookb1}
              alt="Drone Model 1"
              className="border-4 border-white rounded-xl h-80 w-full object-cover hover:scale-105 duration-300 hover:cursor-pointer"
            />
          </div>
          <div>
            <img
              src={a4}
              alt="Drone Model 2"
              className="border-4 border-white rounded-xl h-80 w-full object-cover hover:scale-105 duration-300 hover:cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* break-2 */}

      <div className="bg-card w-full py-12">
        <div className="text-center mb-8 font-para2">
          <h2 className="text-blue-600 text-3xl  font-semibold mb-2">Let's Connect</h2>
          <h1 className="text-3xl font-bold mb-4 text-black">Get in touch</h1>
          <p className="text-2xl mx-40 text-black">
            Our team of experts will be happy to provide you with detailed
            information, answer your questions, and discuss how our agri drone
            technology can benefit your specific needs.
          </p>
        </div>
        <form
          action=""
          className="flex flex-col items-center bg-white text-black p-8 rounded-lg shadow-lg  md:mx-20 lg:mx-80"
        >
          <input
            type="text"
            placeholder="Name"
            className="border-2 w-full py-2 px-4 mb-4 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="border-2 w-full py-2 px-4 mb-4 rounded"
          />
          <input
            type="number"
            placeholder="Phone"
            className="border-2 w-full py-2 px-4 mb-4 rounded"
          />
          <textarea
            name="Message"
            placeholder="Message"
            className="border-2 w-full py-2 px-4 mb-4 rounded"
            rows="4"
          ></textarea>

          <div className="flex flex-col md:flex-row items-start md:items-center w-full mb-4">
            <label htmlFor="details" className="md:mr-4 mb-2 md:mb-0">
              Require details for*
            </label>
            <select
              name="details"
              id="details"
              className="border-2 py-2 px-4 flex-grow rounded"
            >
              <option value="Drone Spray">Drone Spray</option>
              <option value="Purchase">Purchase a Drone</option>
              <option value="partner">Become a Drone Partner</option>
              <option value="others">Others</option>
            </select>
          </div>

          <div className="w-full mb-4 text-left">
            <label className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" />
              AgriVimaan may email and call me with personalized messages and
              event news.
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              By providing the required details you acknowledge and provide your
              express consent that you have read the Privacy Policy as available
              on our website.
            </label>
          </div>

          
          <div className=" mb-4">
            <ReCAPTCHA
              sitekey="6LfcpiMqAAAAACjYR8NyjsWJOCmlc486vO3gr-vW"
              onChange={onChange}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded mt-4 w-96 font-button"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}

export default Book;
