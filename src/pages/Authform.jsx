import React, { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import Input from "../Components/Input";
import Button from "../Components/Button";
import MainLayout from "../Components/MainLayout";
const Authform = () => {
  const [variant, setVariant] = useState("LOGIN");
  const [isLoading, setIsLoading] = useState();
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
  });
  const onSubmit = {};
  return (
    <div className="fixed inset-0 z-[1000] flex rounded-lg justify-center items-center w-full overflow-auto bg-black/20 backdrop-blur-md shadow-2xl shadow-black">
      <div className="mt-8 sm:w-full rounded-lg max-w-lg w-full mx-6 font-sans sm:max-w-md  ">
        <div className="bg-white px-4 py-8 shadow sm:rounded-lg rounded-lg ">
          <div className="flex flex-row justify-evenly mb-4 text-center font-bold">
            <div
              onClick={variant !== "LOGIN" ? toggleVariant : () => {}}
              className={`${
                variant === "REGISTER"
                  ? ""
                  : " border-b-2 border-black bg-gray-100"
              }  w-[50%] cursor-pointer h-10 my-0`}
            >
              <p className="my-2">SIGN IN</p>
            </div>
            <div
              onClick={variant !== "REGISTER" ? toggleVariant : () => {}}
              className={`${
                variant === "REGISTER"
                  ? "border-black border-b-2 bg-gray-100"
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
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-center">
                <span className="bg-white px-2 font-semibold text-gray-900">
                  Or continue with
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-800">
            {variant === "REGISTER" ? "Already have an account?" : "New here ?"}

            <div onClick={toggleVariant} className="underline cursor-pointer">
              {variant === "LOGIN" ? "Create an account" : "Login"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authform;
