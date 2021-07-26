import React from "react";
import "../style/style.scss"
import PropTypes from "prop-types";
import { setup } from "../utils/setup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import WhoWeAre from "./WhoWeAre/WhoWeAre";
import Service from "./Service/Service";
import ServiceProfile from "../components/ServiceProfile/ServiceProfile";
import News from "./News/News";
import ContactBanner from "../components/Contact_banner/ContactBanner";
import NewsProfile from "../components/NewsProfile/NewsProfile";
import Blogs from "./Blogs/Blogs";
import BlogProfile from "../components/BlogProfile/BlogProfile";
import LoginSing from "../components/Login/LoginSing";
import FloatingButton from "../components/Floating_button/FloatingButton";
import TeamProfile from "../components/TeamProfile/TeamProfile";
function App({}) {
  
  return (
    <div className="App">
      <Router>
        <ContactBanner/>
        <Nav/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/news/:id" component={NewsProfile}/>
          <Route path="/news" component={News}/>
          <Route path="/blog/:id" component={BlogProfile}/>
          <Route path="/registration" component={LoginSing}/>
          <Route path="/blog" component={Blogs}/>
          <Route path="/service/:id" component={ServiceProfile}/>
          <Route path="/service" component={Service} />
          <Route path="/contact" component={Contact}/>
          <Route path="/who we are" component={WhoWeAre}/>
          <Route path="/team/:id" component={TeamProfile}/>
        </Switch>
        <Footer/>
        <FloatingButton/>
      </Router>
    </div>
  );
}
App.prototype = {
  state: PropTypes.object,
}

export default setup(App);
