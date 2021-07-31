import React,{useState,useEffect} from 'react';
import PropTypes from "prop-types";
import {useParams} from "react-router-dom";
import { setup } from "../../utils/setup";
import useFetch from "../../utils/useFetch";
import ReactMarkdown from "react-markdown";

const  BlogProfile = ({actions,helpers})=>{
    const {id} = useParams();
    let imageUrl = "";
    const {loading, error, data} =  useFetch(`${process.env.REACT_APP_URL}/blogs/${id}?_locale=${helpers.app.localization}`);

    if(loading){
        actions.app.setLoading(loading)
      };
    if(error){
        actions.app.setError(false)
      }
    if(data) {
        actions.app.setLoading(false)
        actions.app.setError(false)
      } 
    if(data.cover){
        imageUrl = data.cover[0].url;
    }
    const date = new Date(data.published_at);
    const formating = date.getDate()+'/' + (date.getMonth()+1) + '/'+date.getFullYear();

    return(
        <div className="col">
            <div className="profile">
                <div className="profile-img">
                    <img src={`${process.env.REACT_APP_URL}${imageUrl}`}/>
                    <h2>{data.Title}</h2>
                </div>
                <div className="date-author">
                    <i className="fa fa-calendar"><p>{formating}</p></i>
                    <i className="fa fa-user"><p>{data.autor}</p></i>
                </div>
                <div className="profile-info">
                    <ReactMarkdown>{data.description}</ReactMarkdown>
                </div>                
            </div>
        </div> 
    )
}

BlogProfile.prototype = {
    state: PropTypes.object,
}

export default setup(BlogProfile);   