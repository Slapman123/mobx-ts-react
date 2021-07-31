import React,{useEffect,useState} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";
import img1 from "../../assets/images/undraw_teamwork_hpdk.svg";
import img2 from "../../assets/images/undraw_happy_announcement_ac67.svg";
import img3 from "../../assets/images/undraw_pair_programming_njlp.svg";
import TeamCard from "../../components/TeamCard/TeamCard";

import useFetch from "../../utils/useFetch";

const WhoWeAre = ({actions,helpers}) => {
  const {loading, error, data} = useFetch(`${process.env.REACT_APP_URL}/who-we-ares?_locale=${helpers.app.localization}`);
  const [isFetched,setFetched] = useState(false)
  
  useEffect(()=>{
    if(data){
      setFetched(true)
    }
  },[data])

  if(loading){
    actions.app.setLoading(loading)
  };
  if(error){
    actions.app.setError(error)
  }
  if(data) {
    actions.app.setLoading(false)
    actions.app.setError(false)
  } 
    
  return (
      <div className='col'>
        <div className="holder">
          <div className="who-we-are-wrapper">
            <div className="info">
            <p>{helpers.app.utils.teamTitle}</p>
          </div>
            <div className="who-we-are-holder">
            <div className="card">
              <img src={img1}/>
              <div className="card-text">
                <p>{helpers.app.utils.teamCard1}</p>
              </div>
            </div>
            <div className="card">
              <img src={img2}/>
              <div className="card-text">
                <p>{helpers.app.utils.teamCard2}</p>
              </div>
            </div>
            <div className="card">
              <img src={img3}/>
              <div className="card-text">
                <p>{helpers.app.utils.teamCard3}</p>
              </div>
            </div>
          </div>
        </div>  
        </div> 
        <div className="our-team">
          <div className="who-we-are-background"></div>
          <div className="team-meet">
            <h2>{helpers.app.utils.teamListTitle}</h2>
            <p>{helpers.app.utils.teamListSubtitle}</p>
          </div>
          <div className="team-list">
            {
              isFetched ?
              data.map((team,i)=>{
                return <TeamCard key={i} team={team}/>
              }):null
            } 
          </div>
        </div>
      </div>
  );
};

WhoWeAre.prototype = {
  state: PropTypes.object,
};

export default setup(WhoWeAre);
