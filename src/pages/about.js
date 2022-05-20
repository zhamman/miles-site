import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { motion, useTransform, useViewportScroll } from "framer-motion";
//Components
import ScrollForMore from "../components/scrollForMore";
//Ease

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const lastName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
};

const About = ({ imageDetails }) => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  // const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    if (canScroll === false) {
      document.querySelector("body").classList.add("no-scroll");
    } else {
      document.querySelector("body").classList.remove("no-scroll");
    }
  }, [canScroll]);

  return (
    <motion.div
      onAnimationComplete={() => setCanScroll(true)}
      initial="initial"
      animate="animate"
      exit="exit"
      className="single"
    >
      <div className="container fluid">
        <div className="row center top-row">
          <div className="top">
            <motion.div className="model">
              <motion.span variants={firstName} className="first">
                <motion.span variants={letter}>M</motion.span>
                <motion.span variants={letter}>i</motion.span>
                <motion.span variants={letter}>l</motion.span>
                <motion.span variants={letter}>e</motion.span>
                <motion.span variants={letter}>s</motion.span>
                {/* <motion.span>e</motion.span>
                <motion.span></motion.span> */}
              </motion.span>
              <motion.span variants={lastName} className="last">
                <motion.span variants={letter}>M</motion.span>
                <motion.span variants={letter}>a</motion.span>
                <motion.span variants={letter}>z</motion.span>
                <motion.span variants={letter}>e</motion.span>
                <motion.span variants={letter}>l</motion.span>
              </motion.span>
            </motion.div>
          </div>
        </div>
        <div className="row bottom-row">
          <div className="bottom">
            <div className="image-container-single">
              <motion.div
                initial={{
                  y: "-50%",
                  width: imageDetails.width,
                  height: imageDetails.height,
                }}
                animate={{
                  y: 0,
                  width: "100%",
                  height: window.innerWidth > 1440 ? 600 : 400,
                  // height: window.innerWidth > 1440 ? 700 : 400,
                  transition: { delay: 0.2, ...transition },
                }}
                className="thumbnail-single"
              >
                <div className="frame-single">
                  <motion.img
                    style={{ scale: scale }}
                    initial={{ scale: 1.1 }}
                    animate={{
                      transition: { delay: 0.2, ...transition },
                      y: window.innerWidth > 1440 ? -800 : -500,
                      y: window.innerWidth < 850 ? -200 : -500,
                    }}
                    src={require("../images/miles-smoke.png")}
                    alt="an image"
                  />
                </div>
              </motion.div>
            </div>
          </div>
          <ScrollForMore />
        </div>
      </div>
      <div className="detailed-information">
        <div className="container">
          <div className="row">
            <p className="title">Hello!</p>
            <p>
              I'm Miles Mazel. a freelance photographer from Vermont,
              specialized in event, landscape and portrait Photography.{" "}
              <Link to="/contact" className="link">
                {" "}
                Contact me{" "}
              </Link>{" "}
              for any inquiries.
            </p>
            <p>Currently living in New York.</p>
            <Link to="/gallery" className="btn">
              {" "}
              View My Work
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
