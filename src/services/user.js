import axios from "axios";
export const signup = async ({
  username,
  name,
  email,
  password1,
  password2,
}) => {
  const body = JSON.stringify({
    username,
    name,
    email,
    password1,
    password2,
  });
  try {
    const { data } = await axios.post(
      "http://localhost:8000/ipl2/register_user",
      body
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    console.log(error);
    throw new Error(error.message);
  }
};

export const signin = async ({ email, password }) => {
  const body = JSON.stringify({ email, password });
  try {
    const { data } = await axios.post(
      "http://localhost:5000/api/users/login",
      body
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response);
    console.log(error);
    throw new Error(error.message);
  }
};

export const getUserProfile = async ({ token }) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get(
      "http://localhost:5000/api/users/profile",
      config
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};
