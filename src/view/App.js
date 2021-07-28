import React,{useEffect} from "react";
import "../style/style.scss"
import PropTypes from "prop-types";
import { setup } from "../utils/setup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import WhoWeAre from "./WhoWeAre/WhoWeAre";
import Service from "./Service/Service";
import ServiceProfile from "../components/ServiceProfile/ServiceProfile";
import News from "./News/News";
import NewsProfile from "../components/NewsProfile/NewsProfile";
import Blogs from "./Blogs/Blogs";
import BlogProfile from "../components/BlogProfile/BlogProfile";
import LoginSing from "../components/Login/LoginSing";
import FloatingButton from "../components/Floating_button/FloatingButton";
import TeamProfile from "../components/TeamProfile/TeamProfile";
import Page404 from "./Page404/Page404";
import Header from "../components/Header/Header";
import Upcoming from "../components/Upcoming/Upcoming";
import Loading from "../components/Loader/Loading";
import Error from "../components/Error/Error";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import axios from "axios";
import UserProfile from "../components/UserProfile/UserProfile";
function App({actions,helpers}) {
  useEffect(()=>{
    axios.get(`http://localhost:1337/home-page?_locale=${helpers.app.localization}`).then((data)=>{
      actions.app.setUtils(data.data);
      console.log(data.data)
    })
  },[helpers.app.localization])
  return (
    <div className="App">
      <Router>
        <Loading/>
        <Header/>
        <Error/>
        <MobileMenu/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/workshops/:id" component={NewsProfile}/>
          <Route path="/workshops" component={News}/>
          <Route path="/upcoming" component={Upcoming}/>
          <Route path="/blog/:id" component={BlogProfile}/>
          <Route path="/registration" component={LoginSing}/>
          <Route path="/blog" component={Blogs}/>
          <Route path="/service/:id" component={ServiceProfile}/>
          <Route path="/service" component={Service} />
          <Route path="/contact" component={Contact}/>
          <Route path="/who we are" component={WhoWeAre}/>
          <Route path="/team/:id" component={TeamProfile}/>
          <Route path="/profile" component={UserProfile}/>
          <Route path="*" component={Page404}/>
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
