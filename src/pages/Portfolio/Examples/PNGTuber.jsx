import React from "react";
import { motion } from "framer-motion";

function PNGTuber() {
  return (
    <>
      <section className="w-fulloverflow-hidden flex flex-col lg:flex-row justify-center">
        <div className="lg:ml-10">
          <img
            className="lg:w-[45rem] rounded-lg ml-14 w-[55rem] lg:mx-5 lg:my-5 my-10"
            src="https://64.media.tumblr.com/6ca6297aa4792018bc9685347bdea07b/1c25184bb79a0918-63/s1280x1920/cc8b8badaabc3cc10838ff5d85e5a64e793da0e8.jpg"
            alt=""
          />
        </div>

        <div className="lg:ml-10">
          {" "}
          <img
            className="lg:w-[45rem] rounded-lg ml-14 w-[55rem] lg:mx-5 lg:my-5"
            src="https://64.media.tumblr.com/6ca6297aa4792018bc9685347bdea07b/1c25184bb79a0918-63/s1280x1920/cc8b8badaabc3cc10838ff5d85e5a64e793da0e8.jpg"
            alt=""
          />
        </div>
      </section>
    </>
  );
}

export default PNGTuber;
