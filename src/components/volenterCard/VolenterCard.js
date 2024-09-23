import React from "react";
import "./VolenterCard.css";
import { Fade } from "react-reveal";

class VolenterCard extends React.Component {
  render() {
    const { volunteer } = this.props;
    return (
      <div className="volenter-list-item">
        <Fade right duration={2000} distance="40px">
          <div className="volunteer-section">
            <p className="volenter-description">{volunteer.description}</p>
          </div>
        </Fade>
      </div>
    );
  }
}

export default VolenterCard;
