import React, { useState, useEffect } from "react";
import faqsbg from "../images/frame4.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import faq1 from '../images/faq1.jpg'
import faq2 from '../images/faq2.jpg'

function Faqs() {


  const [activeSection, setActiveSection] = useState(null);

  const toggleFAQ = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const faqData = {
    General_Questions : [
      { question: "What is the tank capacity?", answer: "11 liters, filling 8 liters recommended." },
      { question: "How many people will be needed to spray?", answer: "Pilot, co-pilot, and helper (arranged by farmer)" },
      { question: "Can we spray any type of pesticides?", answer: "Yes" },
      { question: "Do you train farmers to fly?", answer: "Basic training is provided." },
      { question: "How do we transport it?", answer: "Ideally 4-wheeler, you can also modify a 2-wheeler to transport." },
      { question: "How many acres can we spray in a day?", answer: "(1 acre - 3 minutes) Depending on the spare batteries we can spray 20 - 30 acres in a day" },
      { question: "Will we need a generator on the field?", answer: "Not needed if there are enough no of spare batteries" },
      { question: "What is the name of the company?", answer: "Agrivimaan" },
      { question: "Are you manufacturing?", answer: "We are only assembling in Agrivimaan." },
      { question: "Is it water resistant?", answer: "No" },
    ],
    Batteries: [
      { question: "What is the flying time of one set of batteries?", answer: "10 to 15 mins with load." },
      { question: "How many acres (paddy) can we spray with one set of batteries?", answer: "Beginner 1 - 2 acres\nIntermediate 2 - 3 acres\nExpert 3 - 4 acres" },
      { question: "What is the charging time?", answer: "25 minutes" },
      { question: "What is the lifespan of the batteries?", answer: "Generally 200 - 300 cycles\nWell maintained 300 - 400 Cycles" },
      { question: "What are the types of batteries available? Can we use other range batteries?", answer: "Yes" },
    ],
    Sales: [
      {question: "How many sets of batteries are provided with the purchase of the drone?",answer: "One set, which includes 2 batteries."},
      {question:"What is the cost of a set of batteries?",answer:"The cost for one set (2 batteries) is INR 45,000."},
      {question:"Is there a subsidy or EMI option available?",answer:" EMI options will be available starting from 2024."},
      {question:"Do we need insurance for the drone, and is it available from the company?",answer:"Insurance details will be available starting from November 2023."}
    ],

    Maintenance:[
      {question:"What is the general maintenance protocol ?",answer:"Maintenance protocol will be explained during the training program."},
      {question:"Do you provide service and maintenance ?",answer:"Yes"},
      {question:"Do you handle repairs ?",answer:"Yes"},
      {question:"Do you provide services (repairs ) to the location ?",answer:"Yes, We do provide services (repairs ) to the location"},
      {question:"Are spare parts available ?",answer:"Yes, Available in our Store"},
    ],
    Rentals:[
      {question:"Any discounts on rentals ?",answer:"It depends on the order."},
      {question:"Do you trail spray ?",answer:"Based on the request we will do a workshop at your location."},
      {question:"In which locations the rental service is available ?",answer:"Sindhanur, Maski, Manvi, Raichur, Sirguppa, Gangavati, Hampi, Hospet"},
      {question:"Will you need a helper while spraying ?",answer:"Yes"},

    ]
  };

  return (
    <div className="">
      <div className="relative">
        <div>
          <img src={faqsbg} alt="" className="w-full h-[600px] object-cover" />
        </div>
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
          <h2 className="text-2xl md:text-5xl text-blue-600 font-heading">
            FAQ'S
          </h2>
        </div>
      </div>

      {/* break-1 */}

      <div className="bg-card py-10">
        <div className="text-center font-para2">
          <h2 className="text-2xl font-extrabold">FAQ</h2>
          <p className="text-3xl">Frequently Asked Questions</p>
        </div>
      

      <div className="p-4 sm:p-10 flex flex-col sm:flex-row justify-evenly gap-4 sm:gap-10">
          <div>
            <img
              src={faq1}
              alt=""
              className="border-4 border-slate-600 rounded-xl h-80 w-[600px] object-cover hover:scale-105 duration-300 hover:cursor-pointer"
            />
          </div>
          <div>
            <img
              src={faq2}
              alt=""
              className="border-4 rounded-xl border-slate-600 h-80 w-[600px] object-cover hover:scale-105 duration-300 hover:cursor-pointer"
            />
          </div>
        </div>




      {/* break-2 */}

     
      
      <div className="p-4 my-8 border-2 bg-white shadow-xl rounded-md">
        {Object.keys(faqData).map((section) => (
          <div key={section} className="border-b border-gray-200">
            <div className="font-para2 p-3">
              <button
                className="w-full text-left flex justify-between items-center text-xl font-semibold text-gray-800 font-button"
                onClick={() => toggleFAQ(section)}
              >
                  { section}  {/* it represents the current section */}
                <FontAwesomeIcon
                  icon={activeSection === section ? faChevronUp : faChevronDown}
                  className="ml-2 transition-transform duration-200"
                />
              </button>
            </div>
            {activeSection === section && (
              <div className="pt-3 space-y-3 font-para3">
                {faqData[section].map((faq, index) => (
                  <div key={index} className="text-lg">
                    <h2 className="font-medium font-para2 text-xl">
                      {index + 1}. {faq.question}
                    </h2>
                    <p className="font-para2 font-thin">Ans. {faq.answer}</p>
                    <p></p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Faqs;
