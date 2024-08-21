import React from 'react';
import './VolenterCard.css';
import { Fade } from "react-reveal";

class VolenterCard extends React.Component {
  render() {
    const { volunteer } = this.props;
    return (
      <div className="volenter-list-item">
        <Fade right duration={2000} distance="40px">
          <div className="volunteer-section">        
          <h3 className="volenter-card-title">{volunteer.volunteerTitle} <span className="volenter-location">{volunteer.location}</span></h3>
          
           
            <p className="volenter-description">{volunteer.description}</p>
        

            {/* <div className="volunteer-img-sec"> 
              Img Here
            {volunteer.img && <img src={volunteer.img} alt={volunteer.volunteerTitle} />}
            </div> */}

          </div>
        </Fade>
      </div>
    );
  }
}

export default VolenterCard;

