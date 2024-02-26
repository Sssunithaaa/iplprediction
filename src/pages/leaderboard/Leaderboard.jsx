import React from "react";
import { images } from "../../constants";
import Headers from "../../headers/header";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import "../styles.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};
const Leaderboard = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleItemClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Close the menu after selection, if desired
  };
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };
  const leaderboardData = [
    {
      rank: 1,
      player: "Jean Marc",
      level: 100,
      team: "Royal Challengers Bangalore",
      stats: "Win",
    },
    {
      rank: 2,
      player: "Marcus coco",
      level: 200,
      team: "Mumbai Indians",
      stats: "Lost",
    },
    {
      rank: 3,
      player: "Marcus coco",
      level: 200,
      team: "KKR",
      stats: "Lost",
    },
    {
      rank: 4,
      player: "Marcus coco",
      level: 200,
      team: "RR",
      stats: "Lost",
    },
    {
      rank: 5,
      player: "Marcus coco",
      level: 200,
      team: "LSG",
      stats: "Lost",
    },
    {
      rank: 6,
      player: "Marcus coco",
      level: 200,
      team: "CSK",
      stats: "Lost",
    },
    // Add more data as needed
  ];
  const recordsPerPage = 5;
  const filteredData =
    selectedOption === "Top 10" ? leaderboardData.slice(0, 3) : leaderboardData;
  // Calculate start and end index for pagination
  const startIndex = currentPage * recordsPerPage;
  const endIndex = startIndex + recordsPerPage;
  return (
    <>
      <div className="flex flex-col my-auto">
        <Headers />
        <div
          className={`w-full lg:h-[160px] md:h-[200px] h-[160px]  flex flex-col justify-center items-center"`}
        >
          <p className="text-2xl font-bold mt-3 xs:mt-[1px] sm:mt-1 ml-3 lg:text-black lg:text-3xl text-center uppercase">
            Indian priemer Leaugue 2024
          </p>
          <p className="xs:text-sm m-3 text-xl text-center  text-[#05b1e6] font-semibold">
            Dive into the pulse-pounding excitement of the IPL!
          </p>
        </div>
        <div class="container max-w-3xl px-4 mx-auto sm:px-8">
          <div class="py-4 relative">
            <div class="flex flex-row justify-center items-center text-center w-full mb-1 sm:mb-0">
              <h2 class="text-2xl uppercase font-bold">Leader Board</h2>
            </div>
            <div className="absolute lg:right-[-47px] right-[-87px] xs:ml-[290px] sm:ml-[290px]  md:ml-[290px] top-0 py-8 mr-0 flex justify-between items-center">
              <motion.nav
                initial={false}
                animate={isOpen ? "open" : "closed"}
                className="menu"
              >
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setIsOpen(!isOpen)}
                  onHoverStart={() => setIsOpen(!isOpen)}
                  className="text-black"
                >
                  <p className="text-black">Menu</p>
                  <motion.div
                    variants={{
                      open: { rotate: 180 },
                      closed: { rotate: 0 },
                    }}
                    transition={{ duration: 0.2 }}
                    style={{ originY: 0.55 }}
                  ></motion.div>
                </motion.button>
                <motion.ul
                  variants={{
                    open: {
                      clipPath: "inset(0% 0% 0% 0% round 10px)",
                      transition: {
                        type: "spring",
                        bounce: 0,
                        duration: 0.7,
                        delayChildren: 0.3,
                        staggerChildren: 0.05,
                      },
                    },
                    closed: {
                      clipPath: "inset(10% 50% 90% 50% round 10px)",
                      transition: {
                        type: "spring",
                        bounce: 0,
                        duration: 0.3,
                      },
                    },
                  }}
                  className="bg-black/60 text-white py-3  w-[110px] flex justify-center items-center right-0 ml-[2.8rem]"
                  style={{ pointerEvents: isOpen ? "auto " : "none" }}
                >
                  <motion.li
                    variants={itemVariants}
                    onClick={() => handleItemClick("Top 10")}
                    className="cursor-pointer font-medium text-md hover:text-gray-400 hover:animate-pulse"
                  >
                    Top 10{" "}
                  </motion.li>
                  <motion.li
                    variants={itemVariants}
                    onClick={() => handleItemClick("Global")}
                    className="cursor-pointer font-medium text-md hover:text-gray-400 hover:animate-pulse"
                  >
                    Global{" "}
                  </motion.li>
                  <motion.li
                    variants={itemVariants}
                    onClick={() => handleItemClick("Friends")}
                    className="cursor-pointer font-medium text-md hover:text-gray-400 hover:animate-pulse"
                  >
                    Friends{" "}
                  </motion.li>
                </motion.ul>
              </motion.nav>
            </div>

            <div class="flex justify-center items-center py-4 w-90 mt-7  mx-0 px-0">
              <div class="flex items-center border-2 border-gray-200 shadow-2xl shadow-black overflow-auto scrollbar-hide rounded-lg">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 0}
                  className="cursor-pointer my-auto rounded-full bg-black/10 p-2 w-[55px] animate-pulse"
                >
                  <FaArrowLeft color="black" />
                </button>
                <table class="min-w-2xl lg:min-w-4xl  leading-normal">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        class="px-5 py-3 text-sm font-semibold text-center text-gray-800 uppercase bg-white border-b border-gray-200"
                      >
                        Rank
                      </th>
                      <th
                        scope="col"
                        class="px-5 py-3 text-sm font-semibold text-center text-gray-800 uppercase bg-white border-b border-gray-200"
                      >
                        Player
                      </th>
                      <th
                        scope="col"
                        class="px-5 py-3 text-sm font-semibold text-center text-gray-800 uppercase bg-white border-b border-gray-200"
                      >
                        Level
                      </th>

                      <th
                        scope="col"
                        class="px-5 py-3 text-sm font-semibold text-center text-gray-800 uppercase bg-white border-b border-gray-200"
                      >
                        Team
                      </th>
                      <th
                        scope="col"
                        class="px-5 py-3 text-sm font-semibold text-center text-gray-800 uppercase bg-white border-b border-gray-200"
                      >
                        Stats
                      </th>
                    </tr>
                  </thead>

                  <tbody className="w-full ">
                    {filteredData
                      .slice(startIndex, endIndex)
                      .map((record, index) => (
                        <tr>
                          <td class="px-5 py-8 text-sm bg-white border-b flex items-center justify-center h-auto border-gray-200">
                            <div class=" w-8 h-8  text-center flex justify-center items-center text-black rounded-md whitespace-no-wrap">
                              <p>{record.rank}</p>
                            </div>
                          </td>
                          <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                            <div class="flex justify-center items-center">
                              <div class="ml-3">
                                <p class="text-gray-900 whitespace-no-wrap">
                                  {record.player}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                            <p class="text-gray-900 whitespace-no-wrap flex flex-row justify-center items-center">
                              {record.level}
                              <span>
                                <p></p>
                              </span>
                            </p>
                          </td>
                          <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                            <p class="text-gray-900 whitespace-no-wrap text-center flex flex-row justify-center items-center">
                              {record.team}
                            </p>
                          </td>

                          <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                            <span
                              class={`${
                                record.stats === "Win"
                                  ? "text-green-900"
                                  : "text-red-700"
                              } relative inline-block px-3 py-1 font-semibold leading-tight`}
                            >
                              <span
                                aria-hidden="true"
                                class={`${
                                  record.stats === "Win"
                                    ? "bg-green-200"
                                    : "bg-red-200"
                                } absolute inset-0 bg-green-200 rounded-full opacity-50`}
                              ></span>
                              <span class="relative">{record.stats}</span>
                            </span>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                <button
                  onClick={handleNextPage}
                  disabled={endIndex >= leaderboardData.length}
                  className="cursor-pointer my-auto rounded-full bg-black/10 p-2 w-[55px] animate-pulse"
                >
                  <FaArrowRight color="black" />
                </button>
              </div>
            </div>
          </div>
        </div>
        ;
      </div>
    </>
  );
};

export default Leaderboard;
