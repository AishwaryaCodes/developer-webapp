import React, { Component } from "react";
import Header from "../../components/header/Header";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";

const ContactData = contactPageData.contactSection;

class Contact extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <Header theme={theme} />
        <div className="basic-contact">
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              <div className="contact-heading-text-div">
                <h1
                  className="contact-heading-text"
                  style={{ color: theme.text }}
                >
                  {ContactData["title"]}
                </h1>

                <div className="contact-text contact-header-detail-text subTitle">
                  {contactPageData.contactSection.description.map(
                    (text, index) => {
                      if (
                        index ===
                        contactPageData.contactSection.description.length - 1
                      ) {
                        return (
                          <p key={index} style={{ color: theme.secondaryText }}>
                            {text}{" "}
                            <a href="mailto:akundur17@gmail.com">
                              akundur17@gmail.com
                            </a>
                          </p>
                        );
                      } else {
                        return (
                          <p style={{ color: theme.secondaryText }} key={index}>
                            {text}{" "}
                          </p>
                        );
                      }
                    }
                  )}
                </div>

                <SocialMedia theme={theme} />
                <div className="resume-btn-div">
                  <Button
                    text="View Resume"
                    newTab={true}
                    href={greeting.resumeLink}
                    theme={theme}
                  />
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
