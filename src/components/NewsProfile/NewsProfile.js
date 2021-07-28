import React,{useState,useEffect} from 'react';
import {useParams} from "react-router-dom";
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";
import useFetch from '../../utils/useFetch';
import ReactMarkdown from "react-markdown"

const  NewsProfile = ({actions,helpers})=>{
    let [fetch,setFetch] = useState(false)
    const {id} = useParams();
    const {loading, error, data} = useFetch(`http://localhost:1337/f-inishedpros/${id}?_locale=${helpers.app.localization}`);
    useEffect(()=>{
      if(data.media){
          setFetch(true)
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
    return(
        <div className="col">
            <div className="new-profile">
                <div className="new-profile-info">
                    <h1>{data.title}</h1>
                    <ReactMarkdown>{data.content}</ReactMarkdown>
                </div>
            </div>
            <div className="new-image-holder">
              {
                fetch?
                data.media.map((item,i)=>{
                  return (
                     <div className="slide" key={i}>
                       <img src={`http://localhost:1337${item.url}`}/>
                     </div>)
                 }):null
              }
            </div>
        </div> 
    )
}

NewsProfile.prototype = {
    state: PropTypes.object,
}

export default setup(NewsProfile);   