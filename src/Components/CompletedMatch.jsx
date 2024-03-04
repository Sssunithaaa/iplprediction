import React from "react";

const CompletedMatch = () => {
  return (
    <section className="h-screen">
      <Headers />

      <div className="flex flex-col mt-5  justify-center items-center md:w-full lg:w-full xs:w-[90%] xs:h-fit h-fit sm:w-[100%] sm:h-fit md:h-screen lg:h-fit overflow-hidden ">
        <div className="w-full flex justify-center items-center text-2xl mt-3 font-semibold ">
          <div className="flex flex-col justify-end items-center mx-4 gap-x-3 h-32">
            <img
              src={teamImages[match.teamA]}
              alt=""
              className="w-[110px] h-auto my-2"
            />
            <p className={`text-lg text-[${teamColors[match.teamA]}]`}>
              &nbsp;{match.teamA}
            </p>
          </div>
          <p className="text-purple-950">&nbsp;vs&nbsp;</p>
          <div className="flex flex-col justify-end items-center mx-4 gap-x-3 h-32">
            <img
              src={teamImages[match.teamB]}
              alt=""
              className="w-[110px] h-auto my-2"
            />
            <p className={`text-lg text-${teamColors[match.teamB]}-600`}>
              &nbsp;{match.teamB}
            </p>
          </div>
        </div>
        <div className="h-fit flex flex-col justify-center items-center  max-w-4xl w-[500px]  rounded-lg bg-white m-5">
          <motion.p
            variants={fadeIn("down", "spring", 0.1, 1)}
            className="text-2xl font-semibold mt-5"
          >
            Results
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
                      message: "Select a team",
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
                </select>{" "}
              </label>
            </div>
            {errors.player?.message && (
              <p className="ml-3 mt-1 text-xs font-semibold text-red-500">
                {errors.player?.message}
              </p>
            )}
            <div>
              <label className="flex flex-row">
                <span className="font-semibold w-full">Most runs</span>
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
              </label>
            </div>
            {errors.runs?.message && (
              <p className="ml-3 mt-1 text-xs font-semibold text-red-500">
                {errors.runs?.message}
              </p>
            )}
            <div>
              <label className="flex flex-row">
                <span className="font-semibold w-full">Most wickets</span>
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
              </label>
            </div>
            {errors.wickets?.message && (
              <p className="ml-3 mt-1 text-xs font-semibold text-red-500">
                {errors.wickets?.message}
              </p>
            )}

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

export default CompletedMatch;
