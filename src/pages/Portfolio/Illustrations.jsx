import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../components/utilities/variant";
import Emote from "../Portfolio/Examples/Emote";
import PNGTuber from "../Portfolio/Examples/PNGTuber";
import Badges from "../Portfolio/Examples/Badges";
import Drawing from "../Portfolio/Examples/Drawings";
import Button from "./Button";

function Illustrations() {
  return (
    <>
      <main>
        <h1>auhauah</h1>

        <motion.section
          variants={fadeIn("up")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="m-5"
        >
          <div className="flex justify-center">
            <img src="" alt="emotes" />
          </div>
          <Emote />
        </motion.section>

        <motion.section
          variants={fadeIn("down")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="mt-20"
        >
          <div className="flex justify-center mb-10">
            <img src="" alt="pngtuber" />
          </div>
          <PNGTuber />
        </motion.section>

        <motion.section
          variants={fadeIn("up")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="mt-20"
        >
          {" "}
          <div className="flex justify-center">
            <img src="" alt="badges" />
          </div>
          <Badges />
        </motion.section>

        <motion.section
          variants={fadeIn("down")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="mt-20"
        >
          {" "}
          <div className="flex justify-center">
            <img src="" alt="drawings" />
          </div>
          <Drawing />
        </motion.section>

        <div className="flex justify-center">
          <Button />
        </div>
      </main>
    </>
  );
}

export default Illustrations;
