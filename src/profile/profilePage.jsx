import React from "react";
import Headers from "../headers/header";
import { images } from "../constants";
const ProfilePage = () => {
  return (
    <div className="container h-screen w-screen justify-center bg-[#071e34] ">
      <Headers />
      <div className="relative rounded-md border-[#20354b] mt-20 border-2 h-60 w-50 lg:w-[300px] sm:w-[300px] md:w-[300px] m-5 lg:mx-auto md:mx-auto bg-[#20354b] shadow-md ">
        <div className="absolute top-0 left-[50%] h-[85px] w-25 border-2 rounded-full border-black translate-x-[-50%] translate-y-[-50%]">
          <img src={images.eren} className="h-[85px] w-25 rounded-full"></img>
        </div>
        <div>
          <p className="fixed left-[50%] translate-x-[-50%] mt-[55px] text-white">
            Eren
          </p>
          <p className="fixed left-[50%] translate-x-[-50%] mt-[75px] text-white">
            ID: 2017894
          </p>
        </div>
        <div className=" flex flex-row justify-evenly font-serif items-center space-between bottom-0 mt-[130px]">
          <div className="flex flex-col h-15 w-15 border-2 rounded-md border-black/10 mt-30 flex-grow-1 p-2 px-2 bg-black/40">
            <p className="text-lg text-white">5</p>
            <p className="text-md text-white">Wins</p>
          </div>
          <div className="flex flex-col h-15 w-15 border-2 rounded-md border-black/10 mt-30 flex-grow-1 p-2 px-2 bg-black/40">
            <p className="text-lg text-white">10</p>
            <p className="text-sm text-white">Rank</p>
          </div>
          <div className="flex flex-col h-15 w-15 border-2 rounded-md border-black/10 mt-30 flex-grow-1 p-2 px-2 bg-black/40">
            <p className="text-lg text-white">5</p>
            <p className="text-sm text-white">Wins</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
