import React from "react";
import "./technologies.css";
import { Fade } from "react-reveal";
import { technologiesIcon } from "../../portfolio";
import styled from "styled-components";

const IconWrapper = styled.span`
  i {
    background-color: ${(props) => props.backgroundColor};
  }
  &:hover i {
    background-color: ${({ theme }) => theme.text};
    transition: 0.3s ease-in;
  }
`;

export default function TechnoLogies(props) {
  return (
    <Fade bottom duration={2000} distance="20px">
    <div className="technologies-div">
      {technologiesIcon.map((media, i) => {
        return (
          <a
            key={i}
            href={media.link}
            className={`icon-button`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWrapper {...media} {...props}>
              <i className={`fab ${media.fontAwesomeIcon} icon-color`}></i>
            </IconWrapper>
          </a>
        );
      })}
    </div>
    </Fade>
  );
}
