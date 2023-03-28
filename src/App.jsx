import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Illustrations from "./pages/Portfolio/Illustrations";
import WebProjects from "./pages/Portfolio/WebProjects";
import GraphicDesign from "./pages/Portfolio/GraphicDesign";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          {" "}
          <Navbar />
        </nav>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/about_me" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/illustrations" element={<Illustrations />} />
            <Route path="/web_projects" element={<WebProjects />} />
            <Route path="/graphic_design" element={<GraphicDesign />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
