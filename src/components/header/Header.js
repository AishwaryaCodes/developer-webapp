import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { greeting } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};

class Header extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <Fade top duration={1000} distance="20px">
        <SeoHeader />
        <div className="Fixheader">
          <header className="header">
            <a href="#greeting" tag={Link} className="logo">
              <span className="logo-name" style={{ color: theme.text }}>
                {greeting.logo_name}
              </span>
            </a>
            {/* <input className="menu-btn" type="checkbox" id="menu-btn" /> */}
            {/* <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label> */}
            <ul className="menu">
              <li>
                <a
                  href="#greeting"
                  // to="/home"
                  // tag={Link}
                  // activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  // onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  // onMouseOut={(event) => onMouseOut(event)}
                >
                  Home
                </a>
              </li>
              {/* <li>
                <NavLink
                  to="/education"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Education
                </NavLink>
              </li> */}
              <li>
                <a
                  href="#projects"
                  // to="/projects"
                  // tag={Link}
                  // activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  // onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  // onMouseOut={(event) => onMouseOut(event)}
                >
                  Projects
                </a>
              </li>
              <li>
                {/* <NavLink
                  to="/experience"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  // onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  // onMouseOut={(event) => onMouseOut(event)}
                >
                  Work
                </NavLink> */}
              </li>
              <li>
                <a
                  href="#contact"
                  // to="/contact"
                  // tag={Link}
                  // activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  // onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  // onMouseOut={(event) => onMouseOut(event)}
                >
                  Collab
                </a>
              </li>
            </ul>
          </header>
        </div>
      </Fade>
    );
  }
}
export default Header;
