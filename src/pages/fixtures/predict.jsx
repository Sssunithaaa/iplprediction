import React, { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import Headers from "../../headers/header";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn, slideIn, zoomIn } from "../../utils/motion";
import { SectionWrapper } from "../../hoc";
import CTA from "../../Components/CTA";
import { images } from "../../constants";
import toast from "react-hot-toast";
import MainLayout from "../../Components/MainLayout";
const PredictMatch = () => {
  const players = [
    "Faf du Plessis (SA)",
    "Virat Kohli",
    "Rajat Patidar",
    "Suyash Prabhudessai",
    "Saurav Chauhan",
    "Mahipal Lomror",
    "Glenn Maxwell (AUS)",
    "Manoj Bhandage",
    "Tom Curran (ENG)",
    "Swapnil Singh",
    "Will Jacks (ENG)",
    "Cameron Green (AUS)",
  ];
  const match = {
    matchID: 1,
    matchdate: "2024-03-01",
    matchtime: "19:30:00",
    teamA: "Mumbai Indians",
    teamAno: 1,
    teamB: "Chennai Super Kings",
    teamBno: 2,
    status: 1,
    winnerteam: "Mumbai Indians",
    winnerteamno: 1,
    playerofmatch: "Rohit Sharma",
    playerofmatchID: 2,
    mostrunsplayer: "Suryakumar Yadav",
    mostrunsplayerID: 3,
    mostwickettaker: "Jasprit Bumrah",
    mostwickettakerID: 4,
    location: "Wankhade",
  };
  const [completed, isCompleted] = useState(false);
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  // This arrangement can be altered based on how we want the date's format to appear.
  let currentDate = `${year}-${month}-${day}`;
  console.log(currentDate); // "17-6-2022"
  useEffect(() => {
    compareDates(currentDate, match.matchdate);
  }, []);
  const compareDates = (d1, d2) => {
    let date1 = new Date(d1).getTime();
    let date2 = new Date(d2).getTime();
    console.log(date1);
    console.log(date2);
    if (date1 < date2) {
      isCompleted(false);
    } else if (date1 > date2) {
      isCompleted(true);
    }
  };
  console.log(completed);

  const [Breadcrumbsdata, setBreadcrumbsdata] = useState([
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Fixtures",
      link: "/fixtures",
    },
    {
      name: "1",
      link: `/${match.matchID}`,
    },
  ]);
  const teamImages = {
    "Chennai Super Kings": images.csk,
    "Delhi Capitals": images.dc,
    "Kolkata Knight Riders": images.kkr,
    "Mumbai Indians": images.mi,
    "Punjab Kings": images.pbks,
    "Rajasthan Royals": images.rr,
    "Royal Challengers Bangalore": images.rcb,
    "Sunrisers Hyderabad": images.srh,
    "Lucknow Super Giants": images.lsg,
    "Gujurat Titans": images.gt,
  };
  const teamColors = {
    "Chennai Super Kings": "yellow", // Yellow
    "Delhi Capitals": "#136EA4", // Blue
    "Kolkata Knight Riders": "#3A225D", // Purple
    "Mumbai Indians": "#005DA0", // Blue
    "Punjab Kings": "#E41E26", // Red
    "Rajasthan Royals": "#2D3E8B", // Blue
    "Royal Challengers Bangalore": "#000000", // Black
    "Sunrisers Hyderabad": "#FF822A", // Orange
    "Lucknow Super Giants": "#000080", // Navy
    "Gujarat Titans": "#008000", // Green
  };

  const { mutate: addPredictMutation, isLoading } = useMutation({
    mutationFn: ({}) => {
      return {};
    },
    onSuccess: (data) => {
      toast.success("Success");
    },
    onError: (error) => {
      console.log(error.message);
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      team: "",
      player: "",
      runs: null,
      wickets: null,
    },
    mode: "onChange",
  });

  const submitHandler = (data) => {
    console.log(data);
    const { team, player, runs, wickets } = data;
    toast.success("Success");
    addPredictMutation({
      team,
      player,
      runs: parseInt(runs),
      wickets: parseInt(wickets),
    });
  };

  return (
    <MainLayout>
      <section className="h-screen">
        <div className="flex flex-col mt-24 justify-center items-center md:w-full lg:w-full xs:w-[90%] xs:h-fit h-fit sm:w-[100%] sm:h-fit md:h-screen lg:h-fit overflow-hidden ">
          <div className="w-full flex justify-center items-center text-2xl mt-3 font-semibold ">
            <motion.div
              variants={slideIn("left", "spring", 0.4, 2)}
              className="flex flex-col justify-end items-center mx-4 gap-x-3 h-32"
            >
              <img
                src={teamImages[match.teamA]}
                alt=""
                className="w-[110px] h-auto my-2"
              />
              <p className={`text-lg text-[${teamColors[match.teamA]}]`}>
                &nbsp;{match.teamA}
              </p>
            </motion.div>
            <motion.p variants={zoomIn(0.4, 1)} className="text-purple-950">
              &nbsp;vs&nbsp;
            </motion.p>
            <motion.div
              variants={slideIn("right", "spring", 0.4, 2)}
              className="flex flex-col justify-end items-center mx-4 gap-x-3 h-32"
            >
              <img
                src={teamImages[match.teamB]}
                alt=""
                className="w-[110px] h-auto my-2"
              />
              <p className={`text-lg text-${teamColors[match.teamB]}-600`}>
                &nbsp;{match.teamB}
              </p>
            </motion.div>
          </div>
          <div className="h-fit flex flex-col justify-center items-center  max-w-4xl w-[500px]  rounded-lg bg-white m-5">
            <motion.p
              variants={zoomIn(0.4, 1.2)}
              className="text-2xl uppercase font-bold mt-5"
            >
              {!completed ? "Make predictions" : "Results"}
            </motion.p>
            <form
              onSubmit={handleSubmit(submitHandler)}
              className="w-[400px] my-5 p-0 space-y-6 mx-auto"
            >
              <div>
                <label className="flex flex-row">
                  <span className="font-semibold w-full">Team</span>
                  {!completed ? (
                    <select
                      {...register("team", {
                        required: {
                          value: true,
                          message: completed ? match.winnerteam : "Select team",
                        },
                      })}
                      type="text"
                      name="team"
                      className="form-input border-gray-400 border-2 rounded-md mt-1 block w-full"
                      required
                    >
                      <option value="" disabled>
                        Select Team
                      </option>

                      <option value="1" className="text-black">
                        {match.teamA}
                      </option>
                      <option value="2" className="text-black">
                        {match.teamB}
                      </option>
                    </select>
                  ) : (
                    <div className="form-input border-gray-400 border-2 rounded-md mt-1 text-center block w-full">
                      {match.winnerteam}
                    </div>
                  )}
                </label>
              </div>
              {errors.team?.message && (
                <p className="ml-3 mt-1 text-xs font-semibold text-red-500">
                  {errors.team?.message}
                </p>
              )}

              <div>
                <label className="flex flex-row">
                  <span className="font-semibold w-full">
                    Player of the match
                  </span>
                  {!completed ? (
                    <select
                      {...register("player", {
                        required: {
                          value: true,
                          message: "Select a player",
                        },
                      })}
                      type="text"
                      name="player"
                      className="form-input border-gray-400 border-2 rounded-md  mt-1 block w-full"
                      required
                    >
                      <option value="" disabled>
                        Select Player
                      </option>

                      {players.map((player, index) => (
                        <option value={index}>{player}</option>
                      ))}
                    </select>
                  ) : (
                    <div className="form-input border-gray-400 border-2 rounded-md mt-1 text-center block w-full">
                      {match.playerofmatch}
                    </div>
                  )}
                </label>
              </div>
              {errors.player?.message && (
                <p className="ml-3 mt-1 text-xs font-semibold text-red-500">
                  {errors.player?.message}
                </p>
              )}
              <div>
                <label className="flex flex-row">
                  <span className="font-semibold w-full">Most runs scorer</span>
                  {!completed ? (
                    <input
                      {...register("runs", {
                        required: {
                          value: true,
                          message: "Enter number of runs",
                        },
                      })}
                      type="text"
                      name="runs"
                      className="form-input text-center border-gray-400 border-2 rounded-md  mt-1 block w-full"
                      required
                    />
                  ) : (
                    <div className="form-input border-gray-400 border-2 rounded-md mt-1 text-center block w-full">
                      {match.mostrunsplayer}
                    </div>
                  )}
                </label>
              </div>
              {errors.runs?.message && (
                <p className="ml-3 mt-1 text-xs font-semibold text-red-500">
                  {errors.runs?.message}
                </p>
              )}
              <div>
                <label className="flex flex-row">
                  <span className="font-semibold w-full">
                    Most wickets taker
                  </span>
                  {!completed ? (
                    <input
                      {...register("wickets", {
                        required: {
                          value: true,
                          message: "Enter number of wickets",
                        },
                      })}
                      type="text"
                      name="wickets"
                      className="form-input text-center mx-auto  border-gray-400 border-2 rounded-md mt-1 block w-full"
                      required
                    />
                  ) : (
                    <div className="form-input border-gray-400 border-2 rounded-md mt-1 text-center block w-full">
                      {match.mostwickettaker}
                    </div>
                  )}
                </label>
              </div>
              {errors.wickets?.message && (
                <p className="ml-3 mt-1 text-xs font-semibold text-red-500">
                  {errors.wickets?.message}
                </p>
              )}

              <div className="flex flex-row my-auto">
                {!completed && (
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-[#29349e] hover:bg-[#10185c] flex mt-10 text-white font-semibold py-2 px-4 rounded-md mx-auto items-center"
                  >
                    {isLoading ? "Adding..." : "Predict"}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default SectionWrapper(PredictMatch, "PredictMatch");
