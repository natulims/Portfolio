import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../components/utilities/variant";
import Emote from "../Portfolio/Examples/Emote";
import PNGTuber from "../Portfolio/Examples/PNGTuber";
import Badges from "../Portfolio/Examples/Badges";
import Drawing from "../Portfolio/Examples/Drawings";
import Button from "./Button";
import emote from "../Portfolio/images/emotes.webp";
import badge from "../Portfolio/images/badges.webp";
import pngtuber from "../Portfolio/images/pngtuber.webp";
import drawing from "../Portfolio/images/drawings.webp";

function Illustrations() {
  return (
    <>
      <main>
        <motion.section
          variants={fadeIn("down")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="mt-20"
        >
          {" "}
          <div className="flex justify-center">
            <img src={drawing} alt="drawings" />
          </div>
          <Drawing />
        </motion.section>

        <motion.section
          variants={fadeIn("up")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="m-5"
        >
          <div className="flex justify-center">
            <img src={emote} alt="emotes" />
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
            <img src={pngtuber} alt="pngtuber" />
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
            <img src={badge} alt="badges" />
          </div>
          <Badges />
        </motion.section>

        <div className="flex justify-center">
          <Button />
        </div>
      </main>
    </>
  );
}

export default Illustrations;
