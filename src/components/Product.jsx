import React from "react";
import productbg from "../images/g2.png";
import drone from "../images/drone-1.webp";
import drone_left from "../images/drone-left.webp";
import drone_right from "../images/drone-right.webp";
import drone_fold from "../images/drone-fold.webp";
import drone_console from "../images/drone-console.webp";
import drone_view from "../images/drone-view.webp";
import drone_camera from "../images/drone-camera.webp";

function Product() {
  return (
    <div className=" font-para2">
      <div className="">
        <div className="relative">
          <img src={productbg} alt="" className="w-full h-[600px] object-fill" />

          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 text-center text-xl md:text-5xl  text-light-blue font-semibold">
           11L-QUAD
          </h1>
        </div>

        

        <div className="bg-gradient-to-r from-blue1 px-4 md:px-10 lg:px-20 ">
          <div className="text-black flex flex-col md:flex-row justify-evenly text-center md:text-left">
            <h2 className="my-4 md:my-0 md:relative md:top-20 text-xl md:text-2xl font-semibold">
              Quadcopter drone set assembled X1
            </h2>
            <h2 className="my-4 md:my-0 md:relative md:top-20 text-xl md:text-2xl font-semibold">
              Extended size: 1992*1802*562
            </h2>
          </div>

          <div className="text-black flex flex-col md:flex-row justify-evenly text-center md:justify-between md:text-left">
            <h2 className="my-4 md:my-0  md:relative md:top-80  lg:top-56 text-xl md:text-2xl font-semibold">
              Folding size: 945*848*500mm
            </h2>
            <h2 className="my-4 md:my-0 md:relative md:top-80 lg:top-56 text-xl md:text-2xl font-semibold">
              Motor: Hobbwying X6/6215
            </h2>
          </div>

          <div className="flex justify-center mt-10  pb-10">
            <img src={drone} alt="" className="w-full md:w-2/3 lg:w-1/2" />
          </div>
        </div>
      </div>

      {/* break-1*/}
      <div className="bg-gradient-to-r from-gray-500 flex flex-col md:flex-row py-10 font-para2">
        <div className="md:w-1/2 p-4 md:pl-20 md:pt-60">
          <h2 className="text-3xl font-semibold">Performance you can rely on</h2>
          <p className="text-gray-600 text-xl py-2">
            The X8 Hobby Wing Motors: High-performance, reliable, and efficient
            motors for your drone. Upgrade and enhance your flying experience
            with excellent thrust and stability. Perfect for aerial photography,
            racing, and acrobatics. Elevate your drone to new heights with these
            powerful motors.
          </p>
        </div>

        <div className="md:w-1/2 p-4">
          <img src={drone_left} alt="" className="w-full h-auto" />
        </div>
      </div>

      {/* break-2 */}

      <div className="bg-card flex flex-col md:flex-row py-10 items-center font-para2">
        <div className="md:w-1/2 p-4">
          <img src={drone_right} alt="" className="w-full h-auto" />
        </div>
        <div className="md:w-1/2 p-4 text-center md:text-left">
          <h2 className="text-3xl font-semibold">High-performance battery</h2>
          <p className="text-xl text-gray-600 py-4">
            Tattu 16000mAh 22.2V 15/30C 6S1P Lipo Battery Pack with huge
            capacity for long endurance. It provides stable power with no
            swelling or overheating at all.
          </p>
          <ul className="text-xl text-gray-700">
            <li>Capacity: 16000mAh</li>
            <li className="py-2">Voltage: 22.2V</li>
            <li>Discharge Rate: 15Cv</li>
            <li className="py-2">Weight: 1990g</li>
            <li>Dimensions: 193*77*66 mm</li>
          </ul>
        </div>
      </div>
      {/* break-3 */}

      <div className="bg-gradient-to-r from-blue1  flex flex-col md:flex-row py-10 font-para2">
        <div className="md:w-1/2 p-4 md:pl-20 md:pt-60 text-white">
          <h2 className="text-3xl font-semibold">Survey-grade accuracy</h2>
          <p className="text-gray-900  text-xl py-2">
            Achieve survey-grade accuracy with our advanced drone technology.
            Our drones are equipped with high-precision sensors and GPS
            capabilities, ensuring precise and reliable data collection for
            mapping, surveying, and land analysis. Experience the highest level
            of accuracy and efficiency in your projects with our survey-grade
            drones.
          </p>
        </div>

        <div className="md:w-1/2 p-4">
          <img src={drone_fold} alt="" className="w-full h-auto" />
        </div>
      </div>

      {/* break-4 */}

      <div className="bg-card flex flex-col md:flex-row items-center py-10 font-para2">
        <div className="md:w-1/2 p-4">
          <img src={drone_console} alt="" className="w-full h-auto" />
        </div>

        <div className="md:w-1/2 p-4 text-center md:text-left">
          <h2 className="text-3xl font-semibold">Compact for one man operability</h2>
          <p className="text-gray-600 text-xl py-2">
            The H12 series uses newest Qualcomm Snapdragon 625 processor,
            equipped with an Android embedded system and advanced SDR technology
            and super protocol stack, making the image clearer, lower the
            latency, longer distance.
          </p>
        </div>
      </div>

      {/* break-5 */}

      <div className="bg-gradient-to-r from-blue1 flex flex-col md:flex-row py-10 font-para2">
        <div className="md:w-1/2 p-4 md:pl-20 md:pt-60 text-white">
          <h2 className="text-3xl font-semibold">Survey-grade accuracy</h2>
          <p className="text-gray-900 text-xl py-4">
            Achieve survey-grade accuracy with our advanced drone technology.
            Our drones are equipped with high-precision sensors and GPS
            capabilities, ensuring precise and reliable data collection for
            mapping, surveying, and land analysis. Experience the highest level
            of accuracy and efficiency in your projects with our survey-grade
            drones.
          </p>
        </div>

        <div className="md:w-1/2 p-4">
          <img src={drone_view} alt="" className="w-full h-auto" />
        </div>
      </div>

      {/* break-6 */}

      <div className="bg-card flex flex-col md:flex-row items-center py-10 font-para2">
        <div className="md:w-1/2 p-4">
          <img src={drone_camera} alt="" className="w-full h-auto" />
        </div>

        <div className="md:w-1/2 p-4 text-center md:text-left">
          <h2 className="text-3xl font-semibold">24.1 MP Imaging Payload</h2>
          <p className="text-gray-600 text-xl py-2">
            11L Quadra carries a 24.1 MP imaging camera with an APS-C sensor for
            capturing sharp, high-resolution images. The camera is mounted
            nadir-facing on a custom designed mount to reduce the effect of
            vibrations on the images.
          </p>
        </div>
      </div>

      {/* break-7 */}

      <div id="booknow" className="bg-white w-full py-12 ">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl py-8 font-para2 font-semibold">Connect With Us</h2>
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
              className="border-2 my-2 py-4 px-4 rounded hover:border-black text-lg w-full"
            >
              <option value="Drone Spray">Drone Spray</option>
              <option value="Purchase">Purchase a Drone</option>
              <option value="partner">Become a Drone Partner</option>
              <option value="others">Others</option>
            </select>
          </div>

          <div className="w-full mb-4 grid grid-cols-1 md:grid-cols-1 gap-2 text-lg font-para3 py-4">
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

export default Product;
