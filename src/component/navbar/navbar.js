import React from "react";
// import Toggle from "../Toggle/Toggle";
import "./navbar.css";
import { Link } from "react-scroll";
import "../../font/AncientModernTales-a7Po.ttf";
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Phanusak</div>
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="infores" spy={true} smooth={true}>
                Profile
              </Link>
            </li>
            <li>
              <Link to="skill" spy={true} smooth={true}>
                skill
              </Link>
            </li>
            <li>
              <Link to="opai" spy={true} smooth={true}>
                Openai
              </Link>
            </li>
            <li>
              <Link to="footer" spy={true} smooth={true}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link> */}
      </div>
    </div>
  );
};

export default navbar;
