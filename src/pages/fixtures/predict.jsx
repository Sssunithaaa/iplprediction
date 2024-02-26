import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import Headers from "../../headers/header";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { SectionWrapper } from "../../hoc";
import CTA from "../../Components/CTA";
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
    matchdate: "2024-04-01",
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
  const [createError, setCreateError] = useState(false);
  const [success, setSuccess] = useState(false);
  const slug = useParams();
  const { mutate: addPredictMutation, isLoading } = useMutation({
    mutationFn: ({}) => {
      return {};
    },
    onSuccess: (data) => {
      setSuccess(true);
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
    addPredictMutation({
      team,
      player,
      runs: parseInt(runs),
      wickets: parseInt(wickets),
    });
  };
  return (
    <section className="h-screen">
      <Headers />

      <div className="flex flex-col mt-5  justify-center items-center md:w-full lg:w-full xs:w-[90%] xs:h-fit h-fit sm:w-[100%] sm:h-fit md:h-screen lg:h-fit overflow-hidden ">
        <div className="h-fit flex flex-col justify-center items-center  max-w-4xl w-[500px]  rounded-lg bg-white m-5">
          <motion.p
            variants={fadeIn("down", "spring", 0.1, 1)}
            className="text-3xl font-semibold my-5"
          >
            Make your predictions
          </motion.p>
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="w-[400px] my-5 p-0 space-y-6 mx-auto"
          >
            <div>
              <label className="flex flex-row">
                <span className="font-semibold w-full">Team</span>
                <select
                  {...register("team", {
                    required: {
                      value: true,
                      message: "Client name is required",
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
              </label>
            </div>

            <div>
              <label className="flex flex-row">
                <span className="font-semibold w-full">
                  Player of the match
                </span>
                <select
                  {...register("player", {
                    required: {
                      value: true,
                      message: "Player is required",
                    },
                  })}
                  type="text"
                  name="phone"
                  className="form-input border-gray-400 border-2 rounded-md  mt-1 block w-full"
                  required
                >
                  <option value=""></option>
                  {players.map((player, index) => (
                    <option value={index}>{player}</option>
                  ))}
                </select>{" "}
              </label>
            </div>
            <div>
              <label className="flex flex-row">
                <span className="font-semibold w-full">Most runs</span>
                <input
                  {...register("runs", {
                    required: {
                      value: true,
                      message: "Runs is required",
                    },
                  })}
                  type="text"
                  name="runs"
                  className="form-input text-center border-gray-400 border-2 rounded-md  mt-1 block w-full"
                  required
                />
              </label>
            </div>
            <div>
              <label className="flex flex-row">
                <span className="font-semibold w-full">Most wickets</span>
                <input
                  {...register("wickets", {
                    required: {
                      value: true,
                      message: "Number of Wickets is required",
                    },
                  })}
                  type="text"
                  name="wickets"
                  className="form-input text-center mx-auto  border-gray-400 border-2 rounded-md mt-1 block w-full"
                  required
                />
              </label>
            </div>

            <div className="flex flex-row my-auto">
              <button
                type="submit"
                disabled={isLoading}
                className="bg-[#29349e] hover:bg-[#10185c] flex mt-10 text-white font-semibold py-2 px-4 rounded-md mx-auto items-center"
              >
                {isLoading ? "Adding..." : "Predict"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <CTA />
    </section>
  );
};

export default PredictMatch;
