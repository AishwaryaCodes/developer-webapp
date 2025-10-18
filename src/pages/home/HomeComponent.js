import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Projects from "../../pages/projects/Projects";
import Contact from "../../pages/contact/ContactComponent";
import TopButton from "../../components/topButton/TopButton";

class Home extends Component {
  render() {
    return (
      <div>
        <Header theme={this.props.theme} />
        <div id="greeting">
          {" "}
          <Greeting theme={this.props.theme} />
        </div>
        {/* <div id="skills"><Skills theme={this.props.theme} /></div> */}
        <div id="projects">
          <Projects theme={this.props.theme} />{" "}
        </div>
        <div id="contact">
          <Contact theme={this.props.theme} />
        </div>
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
