import React from "react";
import "../style/style.scss"
import PropTypes from "prop-types";
import { setup } from "../utils/setup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import Nav from "../components/Nav/Nav"

function App({}) {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}
App.prototype = {
  state: PropTypes.object,
}

export default setup(App);
