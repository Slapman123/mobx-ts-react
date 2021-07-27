import React,{useState,useEffect} from "react";
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";
import tenor from "../../assets/images/tenor.gif";
import useFetch from "../../utils/useFetch";
import {Link} from "react-router-dom";


const Anounc = ({actions,helpers}) => {
  const [list,setList] = useState(false)
  const {loading, error, data} = useFetch(`http://localhost:1337/promotions?_locale=${helpers.app.localization}`);
  useEffect(()=>{
    if(data){
      data.forEach((item)=>{
        if(item.active){
          setList(item.active)
        }
      })
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
    <div className="upcoming-wrapper">
      {
        list?
        <div className="upcoming-event">
          <img src={tenor}/>
          <p>{helpers.app.utils.NovaRad}</p>
          <Link to="/upcoming" className="btn">{helpers.app.utils.button_1}</Link>
        </div>:
        null
      }
    </div>
  );
};

Anounc.prototype = {
  state: PropTypes.object,
};

export default setup(Anounc);
