import React from "react";
import { motion } from "framer-motion";
import emotes from "../../Portfolio/images/emote1.webp";

function Emote() {
  return (
    <>
      <section className="mb-[18rem] overflow-hidden grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="my-5 mx-5">
          <a className="relative block group" target="”_blank”" href="http://">
            <img
              className="rounded-lg w-full hover:opacity-50"
              src={emotes}
              alt="Anikaze Project"
            />
          </a>
        </div>

        <div className="my-5 mx-5">
          <a className="relative block group" target="”_blank”" href="http://">
            <img
              className="rounded-lg w-full hover:opacity-50"
              src=""
              alt="Tattoo da Natu"
            />
          </a>
        </div>
        <div className="my-5 mx-5">
          <a className="relative block group" target="”_blank”" href="http://">
            <img
              className="rounded-lg w-full hover:opacity-50"
              src="https://media.graphassets.com/IpV2iPWfSsyAl1IoMZQg"
              alt=""
            />
          </a>
        </div>
      </section>
    </>
  );
}

export default Emote;
