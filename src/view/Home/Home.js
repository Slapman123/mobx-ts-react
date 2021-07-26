import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";
import banner from "../../assets/icon/banner.svg";
import FeatureCollections from "../../components/Feture_collections/FeatureCollections";
import Reference from "../../components/Reference/Reference";

const Home = () => {
  return (
    <div className="">
      <div className='col'>
      <div className="home-hero">
        <div id="background"/>
        <img id="banner" src={banner}/>
        <div className="home-hero-text col">
          <h4>Zaposli. Usavrši. Zadrži</h4>
          <h1><span>Factor</span> koji pravi razliku</h1>
          <Link to="/service" className="btn">Saznaj vise</Link>
        </div>
      </div>
      </div>
      <FeatureCollections normal={true}/>
      <FeatureCollections normal={false}/>
      <Reference/>
    </div>
  );
};

Home.prototype = {
  state: PropTypes.object,
};

export default setup(Home);
