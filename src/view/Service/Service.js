import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import background from "../../assets/images/undraw_Customer_survey_re_v9cj.svg";

import useFetch from "../../utils/useFetch";

const Service = ({actions,helpers}) => {
  
  const {loading, error, data} = useFetch("http://localhost:1337/services?_locale="+helpers.app.localization);

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
    <div className="container">
      <div className='col'>
        <div className="title-holder">
          <img src={background}/>
          <h1>{helpers.app.utils.Usluge}</h1>
        </div>
        <div className="service-list">
            {
                data.map((service,i)=>{
                    return <ServiceCard key={i} poda={service}/>
                })
            }
        </div>
      </div>
    </div>
  );
};

Service.prototype = {
  state: PropTypes.object,
};

export default setup(Service);
