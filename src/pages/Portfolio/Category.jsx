import React from "react";
import { Link } from "react-router-dom";
import illustrations from "../Portfolio/images/illustrations.png";
import graphicdesign from "../Portfolio/images/graphicdesign.png";
import webproject from "../Portfolio/images/webprojects.png";

function Category() {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center gap-8">
        <div>
          <Link to="/illustrations">
            <img src={illustrations} alt="illustrations" />
          </Link>
        </div>
        <div>
          <Link to="/web_projects">
            <img src={webproject} alt="web projects" />
          </Link>
        </div>
        <div>
          <Link to="/graphic_design">
            <img src={graphicdesign} alt="graphic design" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Category;
