import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProgressiveImage from "react-progressive-image";

const transition = { duration: 0.6, ease: [0.6, 0.01, -0.05, 0.9] };

const Home = ({ imageDetails, image }) => (
  <>
    <main>
      <motion.div
        // exit={{ opacity: 0 }}
        // transition={transition}
        className="container"
      >
        <div className="row center">
          <div className="image-container">
            {/* <div className="click-me"> click me</div> */}
            <motion.div
              className="thumbnail"
              ref={image}
              style={{
                width: imageDetails.width,
                height: imageDetails.height,
              }}
            >
              <div className="frame">
                <Link to={`/about/miles-mazel`}>
                  <ProgressiveImage
                    src={require("../images/miles-smoke.png")}
                    placeholder={require("../images/miles-smoke-min.png")}
                  >
                    {src => (
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={transition}
                        src={src}
                        alt="Miles Mazel"
                      />
                    )}
                  </ProgressiveImage>
                </Link>
              </div>
            </motion.div>
            <motion.div
              exit={{ opacity: 0 }}
              transition={transition}
              className="information"
            >
              <div className="title">Miles Mazel</div>
              <div className="location">
                <span>Photography</span>
                {/* <span>-81.379234</span> */}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </main>
  </>
);

export default Home;
