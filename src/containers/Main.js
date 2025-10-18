import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import Error404 from "../pages/errors/error404/Error";

export default class Main extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => <Home {...props} theme={this.props.theme} />}
          />
          <Route
            path="/home"
            exact
            render={(props) => <Home {...props} theme={this.props.theme} />}
          />
          <Route
            path="/contact"
            render={(props) => <Contact {...props} theme={this.props.theme} />}
          />
          <Route
            path="/projects"
            render={(props) => <Projects {...props} theme={this.props.theme} />}
          />
          <Route
            path="*"
            render={(props) => <Error404 {...props} theme={this.props.theme} />}
          />
        </Switch>
      </Router>
    );
  }
}
