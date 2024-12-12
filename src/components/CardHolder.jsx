import React from "react";

const CardHolder = ({ image, title, description }) => {
  return (
    <div className="bg-light-green text-white rounded-lg shadow-md relative hover:cursor-pointer hover:scale-110 duration-500 font-para2">
      <div className="">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover border-4 border-black rounded-t-lg "
        />
        <h3 className="mt-4 text-md text-green1 font-semibold px-2 absolute top-28 font-para2 hover:text-red-600 ">
          {title}
        </h3>
        <ul className="mt-2 space-y-2 pb-10 text-lg ">
          {description.map((point, index) => (
            <li key={index} className="flex items-start px-2 ">
              <span className="mr-2">•</span> {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardHolder;
