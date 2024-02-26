import React from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import "./styles.css";
import { motion } from "framer-motion";
const squareVariants = {
  visible: { opacity: 1, scale: 4, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 },
};
function Square() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
      className="square"
    ></motion.div>
  );
}
const Anime = () => {
  return (
    <div>
      <div className="App">
        <h1 className="title">Scroll Down</h1>
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
};

export default Anime;
