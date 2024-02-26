import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";
const Matches = ({ data, className }) => {
  return (
    <Link
      to={`${data.matchID}`}
      className={`overflow-hidden rounded-xl py-7 bg-white border-black-gradient  shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] ${className}`}
    >
      <div>
        <div className="flex flex-col justify-center mx-5 w-30 h-20 my-2">
          <p className="flex flex-row gap-x-3 my-2 text-[#0818A8]">
            <span className="mt-1">
              <FaLocationDot size={15} />
            </span>
            {data.location}
          </p>
          <div className="flex flex-row justify-between">
            <div>
              <p>{data.teamA}</p>
              <p>{data.teamB}</p>
            </div>
            <div>
              <p>{data.matchdate}</p>
              <p>{data.matchtime}</p>
            </div>
          </div>
          {/*<button className="w-[50%] mx-auto my-2 bg-blue-600 font-semibold hover:bg-blue-900 rounded-md text-white py-1">
          Make prediction
        </button> */}
        </div>
      </div>
    </Link>
  );
};

export default Matches;
