import React, { useState } from "react";
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";
import back from "../../assets/images/undraw_collaborators_prrw.svg";

import useFetch from "../../utils/useFetch";
import Anounc from "../../components/Anounc/Anounc";
import NewsList from "../../components/NewsList/NewsList";


const News = ({actions,helpers}) => {
  const {loading, error, data} = useFetch(`${process.env.REACT_APP_URL}/f-inishedpros?_locale=${helpers.app.localization}&_start=0&_limit=10`);

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
        <div className="news-list-holder">
            <div className="news-background"><h1>{helpers.app.utils.RadioniceTitle}</h1><img src={back}/></div>
            <Anounc/>
        </div>
        <NewsList data={data}/>
      </div>
    </div>
  );
};

News.prototype = {
  state: PropTypes.object,
};

export default setup(News);
