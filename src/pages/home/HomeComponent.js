import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Projects from "../../pages/projects/Projects";
import Experience from "../../pages/experience/Experience";
import Contact from "../../pages/contact/ContactComponent";
import Footer from "../../components/footer/Footer";
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
        {/* <Experience theme={this.props.theme} /> */}
        {/* <Footer theme={this.props.theme} /> */}
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
