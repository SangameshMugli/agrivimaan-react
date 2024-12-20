import React, { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import contactbg from "../images/contactbg.jpg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

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
    let formattedValue = value;

    if (name === "email") {
      formattedValue = value.toLowerCase();
    } else if (name) {
      formattedValue =
        value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }
    setFormData({
      ...formData,
      [name]: formattedValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (validateForm() && verified) {
      // First API call
      axios
        .post("https://bmmyshupan.ap-south-1.awsapprunner.com/api/submit", formData)
        .then((response) => {
          // Second API call
          return axios.post("https://bmmyshupan.ap-south-1.awsapprunner.com/api/send", formData);
        })
        .then((emailResponse) => {
          toast.success("Email sent successfully!");
          // Refresh the page after successful submission
          window.location.reload();
        })
        .catch((error) => {
          if (error.response) {
            // The request was made and the server responded with a status code
            console.error("Error data:", error.response.data);
            toast.error(`Error: ${error.response.data.message || "An error occurred"}`);
          } else if (error.request) {
            // The request was made but no response was received
            console.error("Error request:", error.request);
            toast.error("No response from server.");
          } else {
            // Something happened in setting up the request
            console.error("Error message:", error.message);
            toast.error("An unexpected error occurred.");
          }
        });
    } else {
      toast.error("Please fix the errors in the form.");
    }
  };

  return (
    <div id="contact " className="font-para2">
      <div className="relative ">
        <div className="relative w-full h-[600px] ">
          <img
            src={contactbg}
            alt="Background"
            className="absolute  w-full h-full bg-contain shadow-xl"
          />
          <h1 className="absolute font-extrabold  top-20 left-1/2 transform -translate-x-1/2 text-center text-xl md:text-2xl lg:text-5xl text-sky-600 ">
            Contact Us
          </h1>
        </div>
      </div>

      <div className="bg-white py-12 text-center  ">
        <div>
          <h2 className="text-blue-600 text-2xl font-extrabold">CONTACT US</h2>
        </div>
        <div className="text-3xl p-4 font-semibold">
          <h1>AGRIVIMAAN Contact</h1>
        </div>

        <div className="flex flex-wrap py-8 justify-evenly px-4 ">
          <div className="bg-card border-2 rounded-2xl h-42 w-full sm:w-72 md:w-80 lg:w-96 flex flex-col items-center justify-center p-16 my-4 sm:my-2">
            <p className="text-lg font-semibold">AGRIVIMAAN Email</p>
            <p className="mt-2 text-lg font-thin">info@agrivimaan.com</p>
          </div>

          <div className="bg-card border-2 rounded-2xl h-42 w-full sm:w-72 md:w-80 lg:w-96 flex flex-col items-center justify-center p-16 my-4 sm:my-2">
            <p className="text-lg font-semibold">AGRIVIMAAN Phone</p>
            <p className="mt-2 text-lg font-thin">
              +91-8535460665, +91-7411377836, +91-7899991769
            </p>
          </div>

          <div className="bg-card border-2 rounded-2xl h-42 w-full sm:w-72 md:w-80 lg:w-96 flex flex-col items-center justify-center p-16 my-4 sm:my-2">
            <p className="text-lg font-semibold">AGRIVIMAAN Office Location</p>
            <p className="mt-2 text-lg font-thin">
              Adarsha Colony, Sindhanur 584128
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue1 to-red-400 w-full py-12">
        <div className="text-center mb-8 font-para2 px-4">
          <h2 className="text-blue-600 text-2xl md:text-3xl mb-2 font-semibold">
            Let's Connect
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Get in touch
          </h1>
          <p className="text-lg md:text-2xl mx-auto max-w-2xl text-white">
            Our team of experts will be happy to provide you with detailed
            information, answer your questions, and discuss how our agri drone
            technology can benefit your specific needs.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center bg-white text-black p-6 md:p-8 rounded-lg shadow-lg mx-4 md:mx-8 lg:mx-96"
        >
          <div className="w-full mb-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="border-2 w-full py-2 px-4 rounded font-light"
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
            <label htmlFor="details" className="block mb-2 text-lg font-medium">
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
            <label className="flex items-center mb-2 text-sm md:text-base">
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

            <label className="flex items-center text-sm md:text-base">
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
            className="bg-blue-600 text-white py-2 px-4 rounded mt-4 w-full sm:w-96 font-button"
            disabled={!verified}
          >
            SEND
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Contact;
