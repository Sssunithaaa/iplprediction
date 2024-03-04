import React, { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import Input from "../Components/Input";
import Button from "../Components/Button";
import Headers from "../headers/header";
import { useSelector } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions } from "../store/reducers/userReducers";
import { signup, signin } from "../services/user";
const Authform = ({ setLogin, login }) => {
  const navigate = useNavigate();
  const [variant, setVariant] = useState("LOGIN");
  const [isLoading, setIsLoading] = useState();
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { mutate, isLoadingg } = useMutation({
    mutationFn: ({ name, email, password }) => {
      return signup({ name, email, password });
    },
    onSuccess: (data) => {
      dispatch(userActions.setUserInfo(data));
      localStorage.setItem("account", JSON.stringify(data));
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  useEffect(() => {
    if (userState.userInfo) {
      navigate("/");
    }
  }, [navigate, userState.userInfo]);
  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    mode: "onChange",
  });
  const onSubmit = (data) => {
    const { name, email, password } = data;
    mutate({ name, email, password });
  };
  return (
    <>
      <div className="fixed inset-0 z-[1000] flex rounded-lg justify-center items-center w-full overflow-auto bg-black/20 backdrop-blur-md shadow-2xl shadow-black">
        <div className="mt-8 sm:w-full rounded-lg max-w-lg w-full mx-6 font-sans sm:max-w-md  ">
          <div className="bg-white px-4 py-8 shadow sm:rounded-lg rounded-lg ">
            <div className="flex flex-row justify-evenly mb-4 text-center font-bold">
              <div
                onClick={variant !== "LOGIN" ? toggleVariant : () => {}}
                className={`${
                  variant === "REGISTER"
                    ? ""
                    : " border-b-[1px] border-black bg-gray-100"
                }  w-[50%] cursor-pointer h-10 my-0`}
              >
                <p className="my-2">SIGN IN</p>
              </div>
              <div
                onClick={variant !== "REGISTER" ? toggleVariant : () => {}}
                className={`${
                  variant === "REGISTER"
                    ? "border-black border-b-[1px] bg-gray-100"
                    : ""
                }  w-[50%] cursor-pointer h-10 my-0`}
              >
                <p className="my-2">SIGN UP</p>
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              {variant === "REGISTER" && (
                <Input
                  label="Name"
                  id="name"
                  type="text"
                  register={register}
                  errors={errors}
                  disabled={isLoading}
                />
              )}
              <Input
                label="Email"
                id="email"
                type="email"
                register={register}
                errors={errors}
                disabled={isLoading}
              />
              <Input
                label="Password"
                id="password"
                type="password"
                register={register}
                errors={errors}
                disabled={isLoading}
              />
              <Button disabled={isLoading} fullWidth type="submit">
                {variant === "LOGIN" ? "SIGN IN" : "REGISTER"}
              </Button>
            </form>

            <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-800">
              {variant === "REGISTER"
                ? "Already have an account?"
                : "New here ?"}

              <div onClick={toggleVariant} className="underline cursor-pointer">
                {variant === "LOGIN" ? "Create an account" : "Login"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Authform;
