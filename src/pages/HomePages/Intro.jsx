import React from "react";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant, zoomIn } from "../../utils/motion";
import { styles } from "../../style";
import { motion } from "framer-motion";
import { useState } from "react";
import Breadcrumbs from "../../Components/Breadcrumbs";
import { MdLeaderboard } from "react-icons/md";
import MainLayout from "../../Components/MainLayout";
import { MdNotStarted } from "react-icons/md";
import { images } from "../../constants";
const texts = [
  { index: 1, title: "Browse the upcoming matches and make your predictions." },
  { index: 2, title: "Earn points based on the accuracy of your predictions." },
  {
    index: 3,
    title: "Check the leaderboard to see your ranking among other players.",
  },
  { index: 4, title: "Enjoy the thrill of predicting and winning!" },
];
const HowItWorks = ({ index, title }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-[100%] sm:w-[90%] mx-auto lg:h-40  p-[1px] my-[10px] rounded-[20px] border-[1px] xs:black-gradient sm:black-gradient md:black-gradient"
    >
      <div className="bg-[#2b072e] rounded-[20px] text-secondary m-[1px] py-[14px] px-10 min-h-[90px] flex justify-evenly items-center flex-col">
        <p className="text-lg font-semibold text-start">{title}</p>
      </div>
    </motion.div>
  );
};
const Intro = () => {
  const [Breadcrumbsdata, setBreadcrumbsdata] = useState([
    {
      name: "Home",
      link: "/",
    },
  ]);
  const index = 1;
  return (
    <MainLayout>
      <section className="h-full mx-8">
        <div
          className={`${styles.paddingX}  max-w-7xl mt-20 mb-4 my-0 mx-auto flex flex-col items-start gap-1 `}
        >
          <div className="">
            <h1 className={`${styles.heroHeadText} text-black`}>
              Welcome to <span className="text-[#2b072e]">Predictive Play</span>
            </h1>
            <p className={`text-xl mt-2 text-center font-medium`}>
              Predict the outcomes of the matches and earn points to climb the
              leaderboard. Compete with other players and showcase your
              predictive skills!
            </p>
          </div>
          <div className="my-5 ">
            <h2 className={`${styles.sectionHeadText} text-center mb-5`}>
              How it works&nbsp;?
            </h2>
            <div className="lg:flex lg:flex-row lg:w-full lg:gap-x-3">
              {texts.map((text, index) => (
                <HowItWorks index={index} {...text} />
              ))}
            </div>
          </div>
          <div className="my-4">
            <motion.div>
              <div className="w-14 h-14 my-2 bg-slate-300 flex justify-center items-center rounded-full px-2">
                <div className="w-12 h-12 bg-slate-200 flex justify-center items-center rounded-full px-2">
                  <MdLeaderboard size={28} color="blue" />
                </div>
              </div>
              <h5 className="text-[#6b042c] font-semibold">Check out</h5>
              <h3 className={`${styles.sectionHeadText} mb-5`}>LeaderBoard</h3>
              { /*prettier-ignore  */}
              <p className={` text-xl font-medium"`}>
                Keep an eye on the <motion.b  className="text-[#000000]">leaderboard </motion.b>
                to see how you stack up against other players. The more accurate
                your predictions, the higher you'll climb!
              </p>
            </motion.div>
          </div>
          <div className="my-5">
            <motion.div>
              {/* {<div className="w-14 h-14 my-2 bg-slate-300 flex justify-center items-center rounded-full p-2">
                <div className="w-12 h-12 border-2 border-slate-200 flex justify-center items-center rounded-full p-[2px]">
                  <img src={images.start} alt="start" className="w-auto" />
                </div>
              </div>} */}
              <h3
                className={`${styles.sectionHeadText} flex flex-row gap-x-2 items-center`}
              >
                Get started <MdNotStarted color="#2b072e" />
              </h3>
              <div className="flex flex-row justify-evenly">
                <div className="w-[50%]">
                  <p className={` text-xl text-start  py-4`}>
                    Register to start predicting matches and earning points. The
                    more you play, the more chances you have to win exciting
                    rewards!
                  </p>
                </div>
                <div className="w-[50%] text-xl gap-y-2 font-medium flex flex-col justify-center items-center">
                  <a
                    href="/userinfo"
                    className="bg-brown p-2 rounded-md w-[50%]"
                  >
                    <button className=" text-secondary  hover:text-white">
                      SIGN IN
                    </button>
                  </a>
                  <a
                    href="/userinfo"
                    className="bg-brown p-2 rounded-md w-[50%]"
                  >
                    <button className=" text-secondary  hover:text-white">
                      Register
                    </button>
                  </a>
                  <p></p>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div className="w-full">
            <div className="flex flex-row justify-evenly items-center">
              <p className="font-bold text-2xl">Number of players waiting</p>
              <p className="text-2xl font-bold bg-brown text-secondary p-5 rounded-md animate-pulse">
                100
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
};

export default SectionWrapper(Intro, "intro");
