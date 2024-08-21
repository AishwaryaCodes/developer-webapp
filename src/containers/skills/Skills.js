import React from "react";
import "./Skills.css";
import { Fade } from "react-reveal";
import TechnoLogies from "../../components/technologies/TechnoLogies";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import { competitiveSites, greeting } from "../../portfolio";

export default function Skills(props) {
  const theme = props.theme;
  return (
    <div className="main">
      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="20px">

        <h1 className="greeting-text about-me-text" style={{ color: theme.text }}>
                {greeting.aboutTitle}
              </h1>
              <p
                className="greeting-text-p subTitle about-me-desc"
                style={{ color: theme.secondaryText }}
              >
                {greeting.aboutMe}
              </p>
        </Fade>
      </div>

      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="skills-header" style={{ color: theme.text }}>
            Technologies
          </h1>
          <TechnoLogies/>
        </Fade>
      </div>

      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="skills-header" style={{ color: theme.text }}>
            Data Structures & Algorithms
          </h1>
          <CompetitiveSites logos={competitiveSites.competitiveSites} />
        </Fade>
      </div>

    </div>
  );
}
