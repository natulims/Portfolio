import React from "react";
import { motion } from "framer-motion";
import hobbies from "../../assets/hobbies.webp";
import drawing from "../../assets/digitaldrawing.webp";
import landing from "../../assets/landingpage.webp";
import design from "../../assets/graphicdesign.webp";

function Hobbies() {
  return (
    <>
      <article className="flex flex-col justify-center items-center mb-[15rem] lg:mb-0">
        <div>
          <img src={hobbies} alt="hobbies" />
        </div>

        <div className="flex lg:flex-row flex-col">
          <div className="flex justify-center">
            <motion.div whileHover={{ scale: 0.9 }}>
              <img src={drawing} alt="" />{" "}
            </motion.div>
          </div>
          <div>
            <motion.div whileHover={{ scale: 0.9 }}>
              <img src={design} alt="" />
            </motion.div>
          </div>
          <div>
            <motion.div whileHover={{ scale: 0.9 }}>
              <img src={landing} alt="" />
            </motion.div>
          </div>
        </div>
      </article>
    </>
  );
}

export default Hobbies;
