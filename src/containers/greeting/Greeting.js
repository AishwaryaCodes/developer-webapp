import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="hero-section" id="greeting">
        <div className="greet-main" id="greeting">
          <div className="greeting-main">
            <div className="greeting-text-div">
              <div>
                <h1 className="greeting-text" style={{ color: theme.text }}>
                  {greeting.title}
                </h1>

                <div className="skills-header-div">
                  <Fade bottom duration={2000} distance="20px">
                    <section className="aboutMe-text">
                      <p
                        className="greeting-text-p subTitle about-me-desc"
                        style={{ color: theme.secondaryText }}
                      >
                        <div className="aboutCur">
                          {greeting.aboutMeCurrent}
                        </div>
                        <div className="aboutIntro">
                          {greeting.aboutMeIntro}
                        </div>
                      </p>
                    </section>

                    {/* <section className="aboutMe-img">
                    <img src="./aishPic.jpg" alt="Description of the image" />
                  </section> */}
                  </Fade>
                </div>

                {/* <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p> */}
                {/* <SocialMedia theme={theme} /> */}
                {/* <div className="resume-btn-div-home">
                <Button
                  text="View Resume"
                  newTab={true}
                  href={greeting.resumeLink}
                  theme={theme}
                />
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
