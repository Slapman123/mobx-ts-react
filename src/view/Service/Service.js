import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import background from "../../assets/images/undraw_Customer_survey_re_v9cj.svg";

import useFetch from "../../utils/useFetch";
import Loading from "../../components/Loader/Loading";
import Errors from "../../components/Error/Error";

const Service = () => {
  
  const {loading, error, data} = useFetch("http://localhost:1337/services");

  if(loading) return <Loading/>;
  if(error) return <Errors/>;

  return (
    <div className="container">
      <div className='col'>
        <div className="title-holder">
          <img src={background}/>
          <h1>Usluge</h1>
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
