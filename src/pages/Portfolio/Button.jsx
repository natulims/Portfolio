import React from "react";
import { Link } from "react-router-dom";

function Button() {
  return (
    <button className="px-8 py-3 text-4xl lg:text-2xl font-semibold border rounded border-carnation">
      <Link to="/portfolio">
        <i className="bx bx-arrow-back"></i>
      </Link>
    </button>
  );
}

export default Button;
