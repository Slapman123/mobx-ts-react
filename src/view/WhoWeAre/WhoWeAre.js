import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";
import img1 from "../../assets/images/undraw_teamwork_hpdk.svg";
import img2 from "../../assets/images/undraw_happy_announcement_ac67.svg";
import img3 from "../../assets/images/undraw_pair_programming_njlp.svg";
import TeamCard from "../../components/TeamCard/TeamCard";

import useFetch from "../../utils/useFetch";
import Loading from "../../components/Loader/Loading";
import Errors from "../../components/Error/Error";

const WhoWeAre = () => {
  const {loading, error, data} = useFetch("http://localhost:1337/who-we-ares");

  if(loading) return <Loading/>;
  if(error) return <Errors/>;
    
  return (
    <div className="container">
      <div className='col'>
        <div className="holder">
          <div className="who-we-are-wrapper">
            <div className="info">
            <p>Mi smo HR Factor, agencija koja posluje u oblasti menadžmenta ljudskih resursa.</p>
          </div>
            <div className="who-we-are-holder">
            <div className="card">
              <img src={img1}/>
              <div className="card-text">
                <p>Naše usluge pomažu Vam pri pronalaženju pravih ljudi za Vašu organizaciju, kao i njihovom razvoju na profesionalnom putu.</p>
              </div>
            </div>
            <div className="card">
              <img src={img2}/>
              <div className="card-text">
                <p>Svesni da su LJUDI unutar kompanije ono što razlikuje manje uspešne od više uspešnih kompanija, naš cilj je da Vama i Vašoj organizaciji budemo upravo taj Faktor Koji Pravi Razliku.</p>
              </div>
            </div>
            <div className="card">
              <img src={img3}/>
              <div className="card-text">
                <p>Samo kroz saradnju sa nama, omogućićete Vašoj kompaniji dugoročan uspeh koji se postiže kroz kontinuiran rad na razvoju ljudskih resursa.</p>
              </div>
            </div>
          </div>
        </div>  
        </div> 
        <div className="our-team">
          <div className="who-we-are-background"></div>
          <div className="team-meet">
            <h2>O Našem Timu</h2>
            <p>Upoznajte naš stučni tim</p>
          </div>
          <div className="team-list">
            {
              data.map((team,i)=>{
                return <TeamCard key={i} team={team}/>
              })
            } 
          </div>
        </div>
      </div>
    </div>
  );
};

WhoWeAre.prototype = {
  state: PropTypes.object,
};

export default setup(WhoWeAre);
