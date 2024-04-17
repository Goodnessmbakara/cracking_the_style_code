import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../index.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="main-home">
        <div className="hero__section">
          <h1>Ndito Eka, withness our Evolution</h1>
          <p>Inspirng Lifes, Defining Standards</p>
          <Link>
            <button className="cta">Learn More</button>
          </Link>
        </div>
        <div className="digital">
          <h3>Digital Accessebility</h3>
          <p>
            Cracking the style code is accessible to
            everyone ensuring a user-friendly experience
            across various devices. we belive that valuable
            content should be easily accessible to empower a diverse global audience
          </p>
        </div>

        <div className="stories">
            <h2>This Week's Featured Stories</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
