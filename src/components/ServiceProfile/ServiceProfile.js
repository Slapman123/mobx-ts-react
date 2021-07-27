import React from 'react';
import {useParams} from "react-router-dom";
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";
import useFetch from '../../utils/useFetch';
import ReactMarkdown from "react-markdown"

const  ServiceProfile = ({actions,helpers})=>{
    const {id} = useParams();
    const {loading, error, data} = useFetch(`http://localhost:1337/services/${id}?_locale=${helpers.app.localization}`);

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
        <article>
            <div className="service-profile">
                <h1>{data.title}</h1>
                <hr/>
                <ReactMarkdown>{data.Description}</ReactMarkdown>
            </div> 
        </article>
    )
}

ServiceProfile.prototype = {
    state: PropTypes.object,
}

export default setup(ServiceProfile);   