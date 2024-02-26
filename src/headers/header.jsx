import React, { useState } from "react";
import { images } from "../constants";
import { IoMenu } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { PiSmileyWinkDuotone } from "react-icons/pi";
import { FaHandPointRight } from "react-icons/fa";
/**import { useSelector } from "react-redux";  import { useDispatch } from "react-redux"; import { logout } from "../store/actions/user";*/
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import Authform from "../pages/Authform";
const NavItemInfo = [
  { name: "Home", type: "link", href: "/" },
  { name: "Leaderboard", type: "link", href: "/board" },
  { name: "Fixtures", type: "link", href: "/fixtures" },
  { name: "About", type: "link", href: "/create" },
];
const NavItem = ({ item }) => {
  const [dropdown, setDropDown] = useState(false);
  const toggleDrop = () => {
    setDropDown((curState) => {
      return !curState;
    });
  };
  return (
    <div>
      <li className=" group relative px-4 py-2 ">
        {item.type === "link" ? (
          <div className="mx-auto">
            <a
              href={`${item.href}`}
              className="cursor-pointer rounded-lg px-8 py-2 text-lg text-secondary hover:text-white hover:rounded-full "
            >
              {item.name}
            </a>
          </div>
        ) : (
          <div
            className={`${
              dropdown ? " rounded-none  hover:rounded-none" : ""
            } mx-auto flex flex-col items-center px-3 py-1 ${
              !dropdown ? "" : ""
            }  hover:rounded-full`}
          >
            <button
              href="/"
              className={`${
                dropdown ? "bg-white" : ""
              } flex items-center gap-x-1 rounded-lg px-4  py-1 text-lg `}
              onClick={toggleDrop}
            >
              <span className="text-secondary hover:text-white">
                {item.name}
              </span>
              <IoIosArrowDown />
            </button>
            <div
              className={`${
                dropdown ? "block " : "hidden"
              } h-max w-max transform rounded-none pt-4 transition-all duration-500 lg:absolute lg:bottom-0 lg:right-0 lg:translate-y-full lg:group-hover:block`}
            >
              <ul className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                {item.items.map((page) => (
                  <a
                    href="/"
                    className="px-4 py-2 hover:bg-dgreen hover:text-white lg:text-dgreen"
                  >
                    {page}
                  </a>
                ))}
              </ul>
            </div>
          </div>
        )}
      </li>
    </div>
  );
};
const Headers = () => {
  {
    /*

const userState = useSelector((state) => state.user); */
  }
  const navigate = useNavigate();
  const [naVisible, setNavisible] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState();
  const [login, setLogin] = useState(false);
  /*const dispatch = useDispatch(); */
  const naVisibilityHandler = () => {
    setNavisible((curState) => {
      console.log(curState);
      return !curState;
    });
  };
  const loginHandler = () => {
    setLogin((curState) => {
      return !curState;
    });
  };
  const logoutHandler = () => {};
  return (
    <>
      {login && createPortal(<Authform />, document.getElementById("login"))}
      <section className="sticky left-0 right-0 top-0 m-0 z-50 bg-[#29349e]">
        {/*mx - margin left right auto px-5*/}
        <header className="container mx-auto my-0 flex items-center justify-between px-5 sm:px-0 py-2">
          <div className="left-0 text-xl flex flex-row justify-center items-center gap-x-5 my-auto">
            <div className="w-10">
              {/*<img
              src={images.iplogo}
              alt="ipllogo"
              className="w-auto h-[80px]"
  ></img>*/}
              <h3 className="font-bold text-black text-3xl m-3">
                PREDICTIVE PLAY
              </h3>
            </div>
            <div className="w-12 h-12 font-sans font-bold text-secondary"></div>
          </div>
          <div className="z-50 lg:hidden">
            {naVisible ? (
              <AiOutlineClose
                className="h-6 w-6"
                onClick={naVisibilityHandler}
                color="#aaa6c3"
              />
            ) : (
              <IoMenu
                className="h-6 w-6"
                onClick={naVisibilityHandler}
                color="#aaa6c3"
              />
            )}
          </div>
          <div
            className={`${
              naVisible ? "right-0 black-gradient" : "-right-full bg-none "
            } fixed bottom-0 top-0 z-[49] mt-[90px] flex w-full flex-col items-center justify-center gap-x-9 gap-y-8 bg-none p-4 transition-all duration-300 lg:static lg:mt-0 lg:w-auto lg:flex-row lg:justify-end`}
          >
            <ul className="flex flex-col items-center gap-x-5 gap-y-5 font-sans font-bold lg:flex-row">
              {NavItemInfo.map((item) => (
                <NavItem key={item.name} item={item} />
              ))}{" "}
            </ul>
            {false ? (
              <div className="group relative">
                <div className="mx-auto flex flex-col items-center font-bold">
                  <button
                    className={`${
                      !profileDropdown ? "rounded-full hover:bg-gray-400" : ""
                    } flex items-center gap-x-1 px-8  py-2`}
                    onClick={() => setProfileDropdown(!profileDropdown)}
                  >
                    <span className="mx-auto text-lg">Profile</span>
                    <IoIosArrowDown />
                  </button>
                  <div
                    className={`${
                      profileDropdown ? "block " : "hidden "
                    } h-max w-max transform rounded-none pt-4 transition-all duration-500 lg:absolute lg:bottom-0 lg:right-0 lg:translate-y-full lg:group-hover:block`}
                  >
                    <ul className=" flex flex-col overflow-hidden rounded-lg shadow-lg">
                      <button
                        type="button"
                        href="/"
                        className="px-4 py-2 hover:bg-dgreen hover:text-white lg:text-dgreen"
                      >
                        Dashboard
                      </button>
                      <button
                        onClick={() => {
                          navigate("/profile");
                        }}
                        type="button"
                        href="/"
                        className="px-4 py-2 hover:bg-dgreen hover:text-white lg:text-dgreen"
                      >
                        Profilee
                      </button>

                      <button
                        onClick={logoutHandler}
                        type="button"
                        href="/"
                        className="px-4 py-2 hover:bg-dgreen hover:text-white lg:text-dgreen"
                      >
                        Log out
                      </button>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <button
                onClick={loginHandler}
                className="hover:text-white text-secondary w-[30%] hover:bg-tertiary rounded-full border-2 border-primary px-5 sm:px-2 xs:px-1 py-1 font-bold transition-all duration-300 hover:bg-bottle-green lg:mt-0"
              >
                SIGN IN
              </button>
            )}
          </div>
        </header>
      </section>
    </>
  );
};

export default Headers;
