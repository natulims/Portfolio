import React from "react";
import ScrollToTop from "react-scroll-to-top";
import "../Examples/css/drawing.css";

function Drawings() {
  return (
    <>
      <div style={{ marginTop: "50px" }} />
      <ScrollToTop smooth />
      <article className="w-full">
        <section className="grid grid-cols-1 lg:grid-cols-3">
          <div className="py-5 px-10">
            <img
              className="rounded-lg"
              src="https://imgur.com/2c72AjK.jpg"
              alt=""
            />
          </div>

          <div className="py-5 px-10">
            <img
              className="rounded-lg"
              src="https://imgur.com/2c72AjK.jpg"
              alt=""
            />
          </div>

          <div className="py-5 px-10">
            <img
              className="rounded-lg"
              src="https://imgur.com/2c72AjK.jpg"
              alt=""
            />
          </div>
        </section>
      </article>
    </>
  );
}

export default Drawings;
