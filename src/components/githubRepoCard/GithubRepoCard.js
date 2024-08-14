import React from "react";
import "./GithubRepoCard.css";
import { Fade } from "react-reveal";
import Button from "../../components/button/Button";

export default function GithubRepoCard({ repo, theme }) {

  const backgroundImageStyle = {
    backgroundImage: `url(${repo.background})`
   
  };
  console.log(backgroundImageStyle);

  return (
    <div className="repo-card-div">
      <div className="repo-background" style={backgroundImageStyle}> </div>
      <Fade bottom duration={2000} distance="40px">
        <div key={repo.id}>
          <div className="repo-name-div">
            <p className="repo-name" style={{ color: theme.text }}>
              {repo.name}
            </p>
          </div>
          <p className="repo-description" style={{ color: theme.text }}>
            {repo.skills}
          </p>
          <div className="repo-details">
            <Button
              text={"Demo"}
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
