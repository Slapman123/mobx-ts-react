import React from 'react';
import {useParams} from "react-router-dom";
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";
import useFetch from '../../utils/useFetch';
import ReactMarkdown from "react-markdown";
import Carousels from '../Corousels/Carousels';

const  NewsProfile = ({actions,helpers})=>{
    const {id} = useParams();
    const {loading, error, data} = useFetch(`${process.env.REACT_APP_URL}/f-inishedpros/${id}?_locale=${helpers.app.localization}`);

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
        <div className="col">
            <div className="new-profile">
                <div className="new-profile-info">
                    <h1>{data.title}</h1>
                    <ReactMarkdown>{data.content}</ReactMarkdown>
                </div>
            </div>
            <Carousels data={data.media}/>
        </div> 
    )
}

NewsProfile.prototype = {
    state: PropTypes.object,
}

export default setup(NewsProfile);   