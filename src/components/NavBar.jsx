import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('');

  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/home':
        setActiveTab('home');
        break;
      case '/about':
        setActiveTab('about');
        break;
      case '/product':
        setActiveTab('product');
        break;
      case '/product11lhexa':
        setActiveTab('product');
        break;
      case '/agriculture':
        setActiveTab('droneExpertise');
        break;
      case '/pricing':
        setActiveTab('pricing');
        break;
      case '/contact':
        setActiveTab('contact');
        break;
      case '/faqs':
        setActiveTab('contact');
        break;
      case '/booknow':
        setActiveTab('booknow');
        break;
      default:
        setActiveTab('');
    }
  }, [location.pathname]);

  const toggleDropdown = (dropdownType) => {
    setActiveDropdown(activeDropdown === dropdownType ? null : dropdownType);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    closeAllDropdowns();
  };

  return (
    <div className=" bg-gradient-to-r from-blue1 to-green1 font-para2">
      <nav className="flex items-center justify-between pr-4 lg:p text-white h-18 text-base relative">
        <Link to="/home" onClick={closeAllDropdowns}>
          <img src={logo} alt="Logo" className="h-16 lg:h-20 w-32 object-fill" />
        </Link>
        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6 items-center text-xl font-semibold">
          <Link to="/home" onClick={closeAllDropdowns} className={`transition-colors ${activeTab === 'home' ? 'text-blue-600' : ''}`}>
            Home
          </Link>
          <Link to="/about" onClick={closeAllDropdowns} className={`transition-colors ${activeTab === 'about' ? 'text-blue-500' : ''}`}>
            About Us
          </Link>
          <div className="relative">
            <button
              onClick={() => toggleDropdown('product')}
              className={`flex items-center space-x-2 transition-colors ${activeTab === 'product' ? 'text-blue-500' : ''}`}
            >
              <span>Product</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`w-5 h-5 transition-transform ${activeDropdown === 'product' ? 'rotate-180' : 'rotate-0'}`}
              />
            </button>
            {activeDropdown === 'product' && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black border border-gray-300 rounded-md shadow-lg z-50">
                <Link to="/product" className="block px-4 py-2 text-xl hover:bg-gray-100" onClick={closeAllDropdowns}>11L QUAD</Link>
                <Link to="/product11lhexa" className="block px-4 py-2 text-xl hover:bg-gray-100" onClick={closeAllDropdowns}>11L HEXA</Link>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => toggleDropdown('droneExpertise')}
              className={`flex items-center space-x-2 transition-colors ${activeTab === 'droneExpertise' ? 'text-blue-500' : ''}`}
            >
              <span>Drone Expertise</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`w-5 h-5 transition-transform ${activeDropdown === 'droneExpertise' ? 'rotate-180' : 'rotate-0'}`}
              />
            </button>
            {activeDropdown === 'droneExpertise' && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black border border-gray-300 rounded-md shadow-lg z-50">
                <Link to="/agriculture" className="block px-4 py-2 text-xl hover:bg-gray-100" onClick={closeAllDropdowns}>Agriculture</Link>
              </div>
            )}
          </div>
          <Link to="/pricing" onClick={closeAllDropdowns} className={`transition-colors ${activeTab === 'pricing' ? 'text-blue-500' : ''}`}>
            Pricing
          </Link>
          <div className="relative">
            <button
              onClick={() => toggleDropdown('contact')}
              className={`flex items-center space-x-2 transition-colors ${activeTab === 'contact' ? 'text-blue-500' : ''}`}
            >
              <span>Contact</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`w-5 h-5 transition-transform ${activeDropdown === 'contact' ? 'rotate-180' : 'rotate-0'}`}
              />
            </button>
            {activeDropdown === 'contact' && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black border border-gray-300 rounded-md shadow-lg z-50">
                <Link to="/contact" className="block px-4 py-2 text-xl hover:bg-gray-100" onClick={closeAllDropdowns}>Contact Us</Link>
                <Link to="/faqs" className="block px-4 py-2 text-xl hover:bg-gray-100" onClick={closeAllDropdowns}>FAQ'S</Link>
              </div>
            )}
          </div>
          <Link to="/booknow" onClick={closeAllDropdowns} className={`transition-colors ${activeTab === 'booknow' ? 'text-slate-600' : ''}`}>
            <button className="bg-sky-600 rounded-xl text-lg p-2 hover:scale-110 duration-100 ">
              Book Now
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMobileMenu} className="lg:hidden text-white focus:outline-none">
          <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-custom-blue text-white font-nav text-md px-4 py-4 space-y-4">
          <Link to="/home" onClick={toggleMobileMenu} className={`block text-lg ${activeTab === 'home' ? 'text-blue-500' : ''}`}>
            Home
          </Link>
          <Link to="/about" onClick={toggleMobileMenu} className={`block text-lg ${activeTab === 'about' ? 'text-blue-500' : ''}`}>
            About Us
          </Link>
          <div className="relative">
            <button
              onClick={() => toggleDropdown('product')}
              className={`flex items-center space-x-2 text-lg w-full ${activeTab === 'product' ? 'text-blue-500' : ''}`}
            >
              <span>Product</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`w-4 h-4 transition-transform ${activeDropdown === 'product' ? 'rotate-180' : 'rotate-0'}`}
              />
            </button>
            {activeDropdown === 'product' && (
              <div className="mt-2 pl-4 space-y-1">
                <Link to="/product" className="block px-2 py-1 text-sm hover:bg-gray-100 text-white" onClick={toggleMobileMenu}>11L QUAD</Link>
                <Link to="/product11lhexa" className="block px-2 py-1 text-sm hover:bg-gray-100 text-white" onClick={toggleMobileMenu}>11L HEXA</Link>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => toggleDropdown('droneExpertise')}
              className={`flex items-center space-x-2 text-lg w-full ${activeTab === 'droneExpertise' ? 'text-blue-500' : ''}`}
            >
              <span>Drone Expertise</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`w-4 h-4 transition-transform ${activeDropdown === 'droneExpertise' ? 'rotate-180' : 'rotate-0'}`}
              />
            </button>
            {activeDropdown === 'droneExpertise' && (
              <div className="mt-2 pl-4 space-y-1">
                <Link to="/agriculture" className="block px-2 py-1 text-sm hover:bg-gray-100 text-white" onClick={toggleMobileMenu}>Agriculture</Link>
              </div>
            )}
          </div>
          <Link to="/pricing" onClick={toggleMobileMenu} className={`block text-lg ${activeTab === 'pricing' ? 'text-blue-500' : ''}`}>
            Pricing
          </Link>
          <div className="relative">
            <button
              onClick={() => toggleDropdown('contact')}
              className={`flex items-center space-x-2 text-lg w-full ${activeTab === 'contact' ? 'text-blue-500' : ''}`}
            >
              <span>Contact</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`w-4 h-4 transition-transform ${activeDropdown === 'contact' ? 'rotate-180' : 'rotate-0'}`}
              />
            </button>
            {activeDropdown === 'contact' && (
              <div className="mt-2 pl-4 space-y-1">
                <Link to="/contact" className="block px-2 py-1 text-sm hover:bg-gray-100 text-white" onClick={toggleMobileMenu}>Contact Us</Link>
                <Link to="/faqs" className="block px-2 py-1 text-sm hover:bg-gray-100 text-white" onClick={toggleMobileMenu}>FAQ'S</Link>
              </div>
            )}
          </div>
          <Link to="/booknow" onClick={toggleMobileMenu} className={`block ${activeTab === 'booknow' ? 'text-blue-500' : ''}`}>
            <button className="bg-blue-500 border-blue-500 rounded-xl text-sm p-2 hover:scale-110 duration-100 w-full">
              Book Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default NavBar;
