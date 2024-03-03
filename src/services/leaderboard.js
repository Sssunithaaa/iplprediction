import axios from "axios";
export const getLeaderBoard = async ({ name, email, password }) => {
  try {
    const { data } = await axios.post("http://localhost:5000/matches", {
      name,
      email,
      password,
    });
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    console.log(error);
    throw new Error(error.message);
  }
};
