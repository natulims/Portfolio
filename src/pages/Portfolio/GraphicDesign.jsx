import React from "react";
import Button from "./Button";
import design from "../Portfolio/images/design.webp";

function GraphicDesign() {
  return (
    <>
      <main>
        <div className="flex justify-center">
          <img src={design} alt="" />
        </div>
        <div className="flex justify-center">
          <Button />
        </div>
      </main>
    </>
  );
}

export default GraphicDesign;
