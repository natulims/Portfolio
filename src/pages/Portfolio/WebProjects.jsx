import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../components/utilities/variant";
import anikaze from "../Portfolio/images/anikaze.webp";
import tattoo from "../Portfolio/images/tattoo.webp";
import Button from "./Button";

export default function WebProjects() {
  return (
    <>
      <h1 className="">welcome to my web design projects!</h1>
      <motion.main
        variants={fadeIn("right")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className=""
      >
        <div className="grid grid-cols-2">
          <div className="">
            <img
              className="rounded-lg w-[50rem] ml-5"
              src={anikaze}
              alt="Anikaze Project"
            />
          </div>

          <div className="ml-10 mt-[15rem]">
            <span className="ml-24 mb-10 text-4xl lg:text-4xl">Anikaze</span>
            <div className="flex flex-row gap-8">
              <button className="px-8 py-3 text-4xl lg:text-2xl font-semibold rounded bg-carnation">
                <a
                  className="relative block group"
                  target="”_blank”"
                  href="https://anikaze.netlify.app"
                >
                  demo
                </a>
              </button>
              <button className="px-8 py-3 text-4xl lg:text-2xl font-semibold border rounded border-carnation">
                <a
                  className="relative block group"
                  target="”_blank”"
                  href="https://github.com/natulims/ProjetoM6"
                >
                  repository
                </a>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2">
          <div className="ml-10 mt-[15rem]">
            <span className="ml-32 lg:ml-[37rem] mb-10 text-4xl lg:text-4xl text-right">
              Tattoo Project
            </span>
            <div className="flex flex-row gap-8 justify-end mr-5">
              <button className="px-8 py-3 text-4xl lg:text-2xl font-semibold rounded bg-carnation">
                <a
                  className="relative block group"
                  target="”_blank”"
                  href="https://anikaze.netlify.app"
                >
                  demo
                </a>
              </button>
              <button className="px-8 py-3 text-4xl lg:text-2xl font-semibold border rounded border-carnation">
                <a
                  className="relative block group"
                  target="”_blank”"
                  href="https://github.com/natulims/ProjetoM6"
                >
                  repository
                </a>
              </button>
            </div>
          </div>
          <div className="">
            <img
              className="rounded-lg w-[50rem] mr-10"
              src={tattoo}
              alt="Anikaze Project"
            />
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <Button/>
        </div>
      </motion.main>
    </>
  );
}