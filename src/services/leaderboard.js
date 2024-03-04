import axios from "axios";
export const getLeaderBoard = async ({}) => {
  const config = {
    // Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  try {
    const { data } = await axios.get("http://localhost:5000/matches", config);
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    console.log(error);
    throw new Error(error.message);
  }
};
export const getUserSubmission = async ({ token }) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  try {
    const { data } = await axios.get("http://localhost:5000/user", config);
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    console.log(error);
    throw new Error(error.message);
  }
};
export const createLeaderBoard = async ({ name, password }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ name, password });
  try {
    const { data } = await axios.get(
      "http://localhost:5000/create",
      body,
      config
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    console.log(error);
    throw new Error(error.message);
  }
};
