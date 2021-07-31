
import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";
import ReactMarkdown from "react-markdown";
import useFetch from '../../utils/useFetch';
import cover from "../../assets/images/undraw_Meeting_re_i53h.svg";

const  Upcoming = ({actions,helpers})=>{
    const {loading, error, data} = useFetch(`${process.env.REACT_APP_URL}/promotions?_locale=${helpers.app.localization}`);
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
    return(
        <div className='col'>
            {
                data.map((item,i)=>{
                    if(item.active){
                        return (
                            <div key={i} className="upcoming">
                                <div className="upcoming-cover">
                                    <img src={cover}/>
                                </div>
                                <div className="upcoming-content">
                                    <h1>{item.Title}</h1>
                                    <ReactMarkdown>{item.content}</ReactMarkdown>
                                </div>
                                <Link to="#" className="btn">{helpers.app.utils.Button_4}</Link>
                            </div>
                        )   
                    } 
                })
            } 
        </div>
    )
}

Upcoming.prototype = {
    state: PropTypes.object,
}

export default setup(Upcoming);   