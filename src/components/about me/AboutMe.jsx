import React from "react";
import { motion, useScroll } from "framer-motion";
import { fadeIn } from "../utilities/variant";
import about from "../../assets/about.webp";
import title from "../../assets/aboutTitle.webp";
import like from "../../assets/likes.webp";
import dontlike from "../../assets/dontlike.webp";

function AboutMe() {
  return (
    <>
      <motion.article
        variants={fadeIn("up")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="m-5"
      >
        <article className="flex lg:flex-row flex-col justify-center items-center lg:mb-[15rem] lg:w-[95rem]">
          <div className="">
            <img className="w-[50rem]" src={about} alt="" />
          </div>

          <div className="grid grid-cols-1">
            <div className="mt-[-10rem]">
              <img src={title} alt="about me" />
            </div>

            <div className="flex-row w-[50rem]">
              <p className="lg:text-2xl text-4xl text-justify">
                Hello! My name is Natalia, I was born and raised in Sao Paulo
                but now I live in Rio de janeiro!
              </p>
              <p className="lg:text-2xl text-4xl py-2 text-justify">
                I have a deep passion in creating visuals, I love art and web
                design, including doing illustrations and graphic design.{" "}
              </p>
              <p className="lg:text-2xl text-4xl py-2 text-justify">
                I'm always looking foward to improving myself and learning
                something new.
              </p>
            </div>
            <div>
              <p className="lg:text-2xl text-4xl tracking-tight leading-3 py-2">
                <i className="bx bxl-github text-carnation"></i>{" "}
                github.com/natulims
              </p>
              <p className="lg:text-2xl text-4xl tracking-tight leading-3  py-2">
                <i className="bx bxl-linkedin-square text-carnation"></i>{" "}
                linkedin.com/in/nxtxlixlc/
              </p>
              <p className="lg:text-2xl text-4xl tracking-tight leading-3  py-2">
                <i className="bx bxl-instagram text-carnation"></i> @natulims
              </p>
            </div>
          </div>
          <div className="lg:hidden flex justify-center lg:mt-[15rem]">
            <div className="lg:mt-[15rem]">
              <img src={like} alt="" />
            </div>

            <div className="lg:mt-[20rem]">
              <img src={dontlike} alt="" />
            </div>
          </div>
        </article>
      </motion.article>
    </>
  );
}

export default AboutMe;
