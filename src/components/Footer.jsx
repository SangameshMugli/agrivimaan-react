import React from "react";
import {
  FaInstagram,
  FaFacebookSquare,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "../images/white.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-light-green text-white py-8 font-para2 ">
      <div className="flex items-center justify-center ">
        <div className="flex items-center justify-center w-full max-w-4xl ">
          <div className="flex-grow border-t border-gray-300"></div>
          <div className="px-4  ">
            <img src={logo} alt="Logo" className="h-22 w-44 " />
          </div>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
      </div>

      <div className="container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-16 font-para2 ">
        <div>
          <h2 className="font-semibold text-2xl mb-4 text-yellow-400 ">Pages</h2>
          <ul className="text-lg" >
            <li >
              <Link to="/home" className="hover:text-blue-500  ">
                Home
              </Link>
            </li>

            <li>
              <Link to="/gallery" className="hover:text-blue-500  ">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-500">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/product" className="hover:text-blue-500">
                Product-11L Quad
              </Link>
            </li>
            <li>
             
              <Link to="/product11lhexa" className="hover:text-blue-500">
                Product-11L Hexa
              </Link>
            </li>
            <li>
              <Link to="/agriculture" className="hover:text-blue-500">
                Agriculture
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-blue-500">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-500">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/faqs" className="hover:text-blue-500">
                FAQ's
              </Link>
            </li>
            <li>
              <Link to="/booknow" className="hover:text-blue-500">
                Book Now
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-2xl mb-4 text-yellow-400">Service</h2>
          <ul className="text-lg">
            <li className="mb-2">
              <a href="#" className="hover:text-blue-500">
                Pesticides Spraying
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-blue-500">
                Fertilizers Spraying
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-blue-500">
                Agriculture Drone Sales
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-blue-500">
                Agriculture Drone Service
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-blue-500">
                Drone Accessories
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-blue-500">
                Drone Pilot Training
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-2xl mb-4 text-yellow-400">Contact</h2>
          <ul className="text-xl">
            <li className="mb-2">+91-8535460665</li>
            <li className="mb-2">+91-7411377836</li>
            <li className="mb-2">+91-7899991769</li>
            <li className="mb-2">info@agrivimaan.com</li>
            <li className="mb-2">Sindhanoor, Karnataka</li>
          </ul>
        </div>

        <div className="">
          <h2 className="font-semibold text-2xl mb-4 text-yellow-400">Need Aerial Drone?</h2>
          <p className="mb-4 text-lg">
            Transform farming with Agrivimaan's precise and efficient drone
            technology
          </p>
          <div className="flex space-x-4 mb-4 text-xl">
            <a href="https://www.instagram.com" className="hover:text-blue-300">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com" className="hover:text-blue-300">
              <FaFacebookSquare />
            </a>
            <a href="https://www.youtube.com" className="hover:text-blue-300">
              <FaYoutube />
            </a>
            <a href="https://www.linkedin.com" className="hover:text-blue-300">
              <FaLinkedinIn />
            </a>
          </div>
          <div className="flex">
            <input
              type="email"
              placeholder="Your Email here"
              className="flex-1 p-2 rounded-l-lg text-gray-700 font-form"
            />
            <button className="bg-blue-900 text-white p-2 rounded-r-lg hover:bg-sky-600 font-button">
              SEND
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-8 text-center text-sm px-16">
        <div className="border-t border-gray-300 pt-4 ">
          <span className="mr-4">© 2024 PM Drones</span>
          <a href="#" className="hover:text-gray-300 ">
            Privacy Policy
          </a>
          <span className="mx-2">|</span>
          <a href="#" className="hover:text-gray-300">
            Terms & Services
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
