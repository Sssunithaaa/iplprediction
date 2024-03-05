import React from "react";
import { useForm } from "react-hook-form";

function MatchForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data); // You can process the data here, e.g., send it to an API
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="matchId">Match ID:</label>
        <input type="text" id="matchId" {...register("matchId")} />
      </div>
      <div>
        <label htmlFor="match">Match:</label>
        <input type="text" id="match" {...register("match")} />
      </div>
      <div>
        <label htmlFor="predictedTeam">Predicted team:</label>
        <input type="text" id="predictedTeam" {...register("predictedTeam")} />
      </div>
      <div>
        <label htmlFor="playerOfTheMatch">Player of the match:</label>
        <input
          type="text"
          id="playerOfTheMatch"
          {...register("playerOfTheMatch")}
        />
      </div>
      <div>
        <label htmlFor="mostRuns">Most runs:</label>
        <input type="text" id="mostRuns" {...register("mostRuns")} />
      </div>
      <div>
        <label htmlFor="mostWickets">Most wickets:</label>
        <input type="text" id="mostWickets" {...register("mostWickets")} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default MatchForm;
