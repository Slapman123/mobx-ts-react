
import React from 'react';
import PropTypes from "prop-types";
import {useParams} from "react-router-dom";
import { setup } from "../../utils/setup";
import banner from "../../assets/icon/banner.svg";
import ReactMarkdown from "react-markdown";
import useFetch from '../../utils/useFetch';
import Loading from "../../components/Loader/Loading";
import Errors from "../../components/Error/Error";
const  TeamCard = ()=>{
    const {id} = useParams();
    const {loading, error, data} = useFetch(`http://localhost:1337/who-we-ares/${id}`);

    if(loading) return <Loading/>;
    if(error) return <Errors/>;
    
    let imageUrl = "";
    if(data.TeamImage){
        imageUrl = data.TeamImage[0].url;
    }

    return(
        <div className='col'>
        <div className="meet-profile">
            <div className="image-wrapper">
                <img src={`http://localhost:1337${imageUrl}`}/>
                <img id="banner" src={banner}/>
            </div>
            <div className="meet-me">
                <strong>{data.Name}</strong>
                <p className="title">{data.NameInfo}</p>
                <ReactMarkdown>{data.MeetTeam}</ReactMarkdown>
            </div>
        </div> 
        </div>
    )
}

TeamCard.prototype = {
    state: PropTypes.object,
}

export default setup(TeamCard);   