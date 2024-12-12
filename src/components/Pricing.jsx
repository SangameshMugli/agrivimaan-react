import React,{useState} from "react";
import pricingbg from "../images/pricing.png";
import wheel from "../images/wheelbase.png";
import folding from "../images/folding.png";
import size from "../images/size.png";
import motor from "../images/motor.png";
import p1 from "../images/pricingp1.webp";
import p2 from "../images/hexabg.webp";
import p3 from "../images/pricingp2.png";
import select from "../images/select.png";
import confirmed from "../images/confirmed.png";
import payment from "../images/payment.png";
import enjoy from "../images/enjoy.png";
import axios from "axios";
import {ToastContainer,toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";

function Pricing() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    drone_type: "Drone Spray",
  });

  const [verified, setVerified] = useState(false);
  const [errors, setErrors] = useState({});

  function onChange(value) {
    console.log("Captcha value:", value);
    setVerified(true);
  }

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = "Name is Required";
    } else if (formData.name.length > 100) {
      newErrors.name = "Name cannot exceed 100 characters";
    }

    if (!formData.email) {
      newErrors.email = "Email is Required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ||
      formData.email.length > 255
    ) {
      newErrors.email = "please enter a valid email address";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone Number is Required";
    } else if (formData.phone.length > 10 || !/^\d+$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be a maximum of 10 digits";
    }

    if (!formData.message) {
      newErrors.message = "Message is required";
    }

    if (!formData.drone_type) {
      newErrors.drone_type = "Please select a drone type";
    }

    if (!formData.agreedToEmails) {
      newErrors.agreedToEmails =
        "You must agree to receive personalized messages";
    }

    if (!formData.agreedToPrivacy) {
      newErrors.agreedToPrivacy = "You must agree to the Privacy Policy";
    }

    if (!verified) {
      newErrors.captcha = "Please select the CAPTCHA";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (validateForm() && verified) {
      axios
        .post("http://localhost:5000/api/submit", formData)
        .then((response) => {
          alert("Form submitted successfully");
        })
        .catch((error) => {
          console.log("Error submitting form");
        });
    } else {
      toast.error("Please fill in all required fields correctly.");
    }
  };

  return (
    <div className="bg-white font-para2">
      <div className="relative">
        <div>
          <img src={pricingbg} alt="" className="w-full h-[600px]" />
        </div>
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2">
          <h2 className="text-sky-500 text-5xl font-semibold">Pricing</h2>
        </div>
      </div>

      {/* break-1 */}

      <div id="booknow" className="bg-light-green w-full py-12">
        <div className="text-center mb-8 ">
          <h2 className="text-slate-800 text-3xl mb-2 font-semibold">Let's Connect</h2>
          <h1 className="text-2xl font-semibold mb-4 text-white">Get in touch</h1>
          <p className="text-xl  mx-60 text-white">
            Our team of experts will be happy to provide you with detailed
            information, answer your questions, and discuss how our agri drone
            technology can benefit your specific needs.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center bg-white text-black p-8 rounded-lg shadow-lg mx-96 "
        >
          <div className="w-full mb-4 ">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="border-2 w-full py-2 px-4 rounded"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div className="w-full mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border-2 w-full py-2 px-4 rounded"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="w-full mb-4">
            <input
              type="number"
              name="phone"
              placeholder="Phone"
              className="border-2 w-full py-2 px-4 rounded"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          <div className="w-full mb-4">
            <textarea
              name="message"
              placeholder="Message"
              className="border-2 w-full py-2 px-4 rounded"
              rows="4"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <div className="w-full mb-4">
            <label htmlFor="details" className="block mb-2">
              Require details for*
            </label>
            <select
              name="drone_type"
              id="details"
              className="border-2 w-full py-2 px-4 rounded"
              value={formData.drone_type}
              onChange={handleChange}
            >
              <option value="">Select Drone Type</option>
              <option value="Drone Spray">Drone Spray</option>
              <option value="Purchase">Purchase a Drone</option>
              <option value="partner">Become a Drone Partner</option>
              <option value="others">Others</option>
            </select>
            {errors.drone_type && (
              <p className="text-red-500 text-sm mt-1">{errors.drone_type}</p>
            )}
          </div>

          <div className="w-full mb-4 text-left">
            <label className="flex items-center mb-2">
              <input
                type="checkbox"
                name="agreedToEmails"
                className="mr-2"
                checked={formData.agreedToEmails}
                onChange={handleChange}
              />
              AgriVimaan may email and call me with personalized messages and
              event news.
            </label>
            {errors.agreedToEmails && (
              <p className="text-red-500 text-sm mt-1">
                {errors.agreedToEmails}
              </p>
            )}

            <label className="flex items-center">
              <input
                type="checkbox"
                name="agreedToPrivacy"
                className="mr-2"
                checked={formData.agreedToPrivacy}
                onChange={handleChange}
              />
              By providing the required details you acknowledge and provide your
              express consent that you have read the Privacy Policy as available
              on our website.
            </label>
            {errors.agreedToPrivacy && (
              <p className="text-red-500 text-sm mt-1">
                {errors.agreedToPrivacy}
              </p>
            )}
          </div>

          <div className="w-full mb-4">
            <ReCAPTCHA
              sitekey="6LfcpiMqAAAAACjYR8NyjsWJOCmlc486vO3gr-vW"
              onChange={onChange}
            />
            {errors.captcha && (
              <p className="text-red-500 text-sm mt-1">{errors.captcha}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded mt-4 w-96 font-button"
            disabled={!verified}
          >
            SEND
          </button>
        </form>
        <ToastContainer/>
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

      {/* break-3 */}
      <div className="bg-custom-blue py-10">
        <div className="text-center text-white">
          <h2 className="text-3xl font-semibold">CTA</h2>
          <h2 className="text-2xl py-2 font-semibold">
            Explore Your World Without Limitations
          </h2>
          <p className="text-2xl text-yellow-400 px-4 font-medium">
            Embrace the freedom to explore the world without limitations,
            breaking barriers, embracing diversity, and nurturing intellectual
            curiosity for limitless personal growth.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between p-4 md:p-20">
          <div className="mb-4 md:mb-0">
            <img
              src={p1}
              alt=""
              className="h-80 w-80 border-2  rounded-full hover:scale-105 duration-300 mx-auto md:mx-0"
            />
          </div>

          <div className="mb-4 md:mb-0">
            <img
              src={p2}
              alt=""
              className="h-80 w-auto border-2 border-green-500  rounded-full hover:scale-105 duration-300 mx-auto md:mx-0"
            />
          </div>

          <div className="mb-4 md:mb-0">
            <img
              src={p3}
              alt=""
              className="h-80 w-80 border-2  rounded-full hover:scale-105 duration-300 mx-auto md:mx-0"
            />
          </div>
        </div>
      </div>

      {/* break-4 */}

      <div className="bg-card py-10 ">
        <div className="text-center">
          <h2 className="text-blue-600 text-3xl font-semibold">FEATURED TECHNOLOGY</h2>
          <h2 className="text-2xl py-4">
            New Technology and Feature Our Drone
          </h2>
          <p className="text-2xl text-gray-600 ">
            New advanced architecture with power efficient motor and
            high-performance battery
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10 justify-items-center">
          <div className="hover:cursor-pointer">
            <img
              src={select}
              alt=""
              className="h-32 border-4 border-slate-600 p-2 rounded-[20px] hover:scale-105 duration-300 mx-auto md:mx-0"
            />
            <h2 className="text-lg font-semibold py-2 hover:text-sky-500">
              Select Your Service
            </h2>
          </div>
          <div className="hover:cursor-pointer">
            <img
              src={confirmed}
              alt=""
              className="h-32 border-4 border-slate-600 p-2 rounded-[20px] hover:scale-105 duration-300 mx-auto md:mx-0"
            />
            <h2 className="text-lg font-semibold py-2 hover:text-sky-500 ">
              Booking & Confirm
            </h2>
          </div>
          <div className="hover:cursor-pointer">
            <img
              src={payment}
              alt=""
              className="h-32 border-4 border-slate-600 p-2 rounded-[20px] hover:scale-105 duration-300 mx-auto md:mx-0"
            />
            <h2 className="text-lg font-semibold py-2 hover:text-sky-500">Booking Payment</h2>
          </div>
          <div className="hover:cursor-pointer">
            <img
              src={enjoy}
              alt=""
              className="h-32 border-4 border-slate-600 p-2 rounded-[20px] hover:scale-105 duration-300 mx-auto md:mx-0"
            />
            <h2 className="text-lg font-semibold py-2 hover:text-sky-500">
              Enjoy Your Service
            </h2>
          </div>
        </div>
      </div>

      {/* break-5 */}

      <div className="bg-white py-10 sm:py-20 md:py-20 ">
        <div className="bg-custom-blue border-2 rounded-3xl text-center py-10 sm:py-14 md:py-20 mx-4 sm:mx-16 md:mx-60 ">
          <h2 className="text-blue-500 text-lg sm:text-xl md:text-3xl pb-2 sm:pb-3 md:pb-4 font-semibold">
            NEED AGRIVIMAAN
          </h2>
          <h1 className="text-white text-xl sm:text-2xl md:text-3xl pb-2 sm:pb-3 md:pb-8 font-para2">
            Get Our Service Easily
          </h1>

          <div className="flex justify-center">
            <form
              action=""
              className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg font-form"
            >
              <div className="flex flex-col space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border-2 rounded-lg p-2"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border-2 rounded-lg p-2"
                />

                <textarea
                  name="Your Request"
                  placeholder="Your Request"
                  cols="30"
                  rows="3"
                  className="w-full border-2 rounded-lg p-2"
                ></textarea>

                <button
                  type="submit"
                  className="rounded-lg bg-custom-button hover:bg-gray-300 text-md p-2 font-button"
                >
                  BOOK NOW
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* break-6 */}
    </div>
  );
}

export default Pricing;
