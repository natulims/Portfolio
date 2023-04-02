import React from "react";
// import { motion } from "framer-motion";
import png1 from "../../Portfolio/images/png1.webp";
import png2 from "../../Portfolio/images/png2.webp";

function PNGTuber() {
  return (
    <>
      <section className="w-full overflow-hidden flex flex-col lg:flex-row justify-center">
        <div className="lg:ml-10">
          <img
            className="lg:w-[45rem] rounded-lg ml-14 w-[55rem] lg:mx-5 lg:my-5 my-10"
            src={png1}
            alt="PNGTUBER example 1"
          />
        </div>

        <div className="lg:ml-10">
          {" "}
          <img
            className="lg:w-[45rem] rounded-lg ml-14 w-[55rem] lg:mx-5 lg:my-5"
            src={png2}
            alt="PNGTUBER example 2"
          />
        </div>
      </section>
    </>
  );
}

export default PNGTuber;
