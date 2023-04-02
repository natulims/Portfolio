import React from "react";
import portfolio from "../Portfolio/images/portfolio.webp";
import Category from "./Category";

function Portfolio() {
  return (
    <>
      <main>
        <div className="flex justify-center">
          <img
            className="w-[45rem]"
            src={portfolio}
            alt="welcome to my portfolio!"
          />
        </div>
        <Category />
      </main>
    </>
  );
}

export default Portfolio;
