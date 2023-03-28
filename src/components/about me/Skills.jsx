import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utilities/variant";
import skills from "../../assets/skills.webp";

function Skills() {
  return (
    <>
      <motion.article
        variants={fadeIn("up")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
       className="flex flex-col justify-center items-center mt-6"
      >
        <div>
          <img src={skills} alt="" />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div whileHover={{ scale: 0.9 }}>
            <div className=" bg-antique lg:py-5 lg:px-5 px-10 py-10  mt:5 mb-5 rounded-md hover:bg-carnation">
              <p className="lg:text-4xl text-9xl">
                <i className="bx bxl-html5"></i>
              </p>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 0.9 }}>
            <div className=" bg-antique lg:py-5 lg:px-5 px-10 py-10  mt:5 mb-5 rounded-md hover:bg-carnation">
              <p className="lg:text-4xl text-9xl">
                <i className="bx bxl-javascript"></i>
              </p>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 0.9 }}>
            <div className=" bg-antique lg:py-5 lg:px-5 px-10 py-10 mt:5 mb-5 rounded-md hover:bg-carnation">
              <p className="lg:text-4xl text-9xl">
                <i className="bx bxl-tailwind-css"></i>
              </p>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 0.9 }}>
            <div className=" bg-antique lg:py-5 lg:px-5 px-10 py-10  rounded-md  mt:5 mb-5 hover:bg-carnation">
              <p className="lg:text-4xl text-9xl">
                <i className="bx bxl-react"></i>
              </p>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 0.9 }}>
            <div className=" bg-antique lg:py-5 lg:px-5 px-10 py-10  rounded-md  mt:5 mb-5 hover:bg-carnation">
              <p className="lg:text-4xl text-9xl">
                <i className="bx bxl-css3"></i>
              </p>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 0.9 }}>
            <div className=" bg-antique lg:py-5 lg:px-5 px-10 py-10  rounded-md  mt:5 mb-5 hover:bg-carnation">
              <p className="lg:text-4xl text-9xl">
                <i className="bx bxl-github"></i>
              </p>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 0.9 }}>
            <div className=" bg-antique lg:py-5 lg:px-5 px-10 py-10  rounded-md  mt:5 mb-5 hover:bg-carnation">
              <p className="lg:text-4xl text-9xl">
                <i className="bx bxl-adobe"></i>
              </p>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 0.9 }}>
            <div className=" bg-antique lg:py-5 lg:px-5 px-10 py-10  rounded-md  mt:5 mb-5 hover:bg-carnation">
              <p className="lg:text-4xl text-9xl">
                <i className="bx bxl-trello"></i>
              </p>
            </div>
          </motion.div>
        </div>{" "}
      </motion.article>
    </>
  );
}

export default Skills;
