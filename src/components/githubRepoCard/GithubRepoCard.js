import React from "react";
import "./GithubRepoCard.css";
import { Fade } from "react-reveal";
import Button from "../../components/button/Button";

export default function GithubRepoCard({ repo, theme }) {
  const backgroundImageStyle = {
    backgroundImage: `url(${repo.background})`,
  };

  const handleClick = (projectLink) => {
    // Adding delay of 2 seconds (2000ms)
    setTimeout(() => {
      window.open(projectLink, "_blank");
    }, 2000); // Change the delay time as needed
  };

  return (
    <div className="repo-card-div">
      <div className="repo-background" style={backgroundImageStyle}></div>
      <Fade bottom duration={1200} distance="40px">
        <div className="repo-content" key={repo.id}>
          <p
            className="repo-name"
            style={{ color: theme.text }}
            onClick={() => handleClick(repo.url)}
          >
            {repo.name}
          </p>

          <p className="repo-description" style={{ color: theme.text }}>
            {repo.skills}
          </p>
          <div className="repo-details">
            <Button
              text="GitHub"
              className="project-button demo-btn"
              href={repo.projectLink}
              newTab={true}
              theme={theme}
            />
          </div>
        </div>
      </Fade>
    </div>
  );
}
