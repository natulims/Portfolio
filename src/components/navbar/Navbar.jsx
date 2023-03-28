import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="w-full sticky z-10 flex justify-between items-center sm:px-8 px-4 py-4">
        <div>
          <Link to="/">
            <img
              src=""
              alt="logo"
              className="w-28 object-contain"
            />
          </Link>
        </div>

        <div className="flexjustify-end">
          <ul className="flex flex-row gap-2.5 lg:text-[15px] sm:text-3xl">
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/about_me">about me</Link>
            </li>
            <li>
              <Link to="/portfolio">portfolio</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
