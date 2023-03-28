import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../utilities/variant";
import { TypeAnimation } from "react-type-animation";
import hero from "../../assets/hero.webp";

function Hero() {
  return (
    <>
      <motion.article
        variants={fadeIn("right")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="m-5"
      >
        <header className="mb-[10rem]">
          <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
              <img
                src={hero}
                alt=""
                className="object-contain w-[60rem] mt-[20rem] mb-40 lg:mb-0 lg:h-[45rem] lg:mt-[13rem]"
              />
            </div>
            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
              <h1 className="text-5xl font-bold leading-none sm:text-9xl text-vivid">
                hello there
              </h1>
              <p className="mt-52 lg:mt-5 mb-8 text-6xl sm:mb-12">
                welcome to my portfolio! i'm natalia a{" "}
                <TypeAnimation
                  sequence={["freelance illustrator", 1000, "graphic designer"]}
                  wrapper="div"
                  cursor={true}
                  repeat={Infinity}
                  style={{ fontSize: "3rem", color: "#fda285" }}
                />
              </p>
              <div className="lg:flex lg:flex-row grid grid-cols-2 space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                <button className="px-8 py-3 text-4xl lg:text-2xl font-semibold rounded bg-carnation">
                  {" "}
                  <Link to="/portfolio">portfolio</Link>
                </button>{" "}
                <button className="px-8 py-3 text-4xl lg:text-2xl font-semibold border rounded border-carnation">
                  <Link to="/about_me">about me</Link>
                </button>
              </div>
            </div>
          </div>
        </header>
      </motion.article>
    </>
  );
}

export default Hero;
