import React from 'react';
import PropTypes from "prop-types";
import {useParams} from "react-router-dom";
import { setup } from "../../utils/setup";
import useFetch from "../../utils/useFetch";
import ReactMarkdown from "react-markdown";
import Loading from '../Loader/Loading';
import Errors from "../Error/Error";

const  BlogProfile = ()=>{
    const {id} = useParams();
    const {loading, error, data} = useFetch(`http://localhost:1337/blogs/${id}`);

    if(loading) return <Loading/>;
    if(error) return <Errors/>;
    
    let imageUrl = "";
    if(data.cover){
        imageUrl = data.cover[0].url;
    }
    return(
        <div className="col">
            <div className="profile">
                <div className="profile-img">
                    <img src={`http://localhost:1337${imageUrl}`}/>
                    <h2>{data.Title}</h2>
                </div>
                <div className="date-author">
                    <i className="fa fa-calendar"><p>{data.published_at}</p></i>
                    <i className="fa fa-user"><p>{data.autor}</p></i>
                </div>
                <div className="profile-info">
                    <ReactMarkdown>{data.description}</ReactMarkdown>
                </div>
                <div className="comments-list">
                    <div className="comments">
                        <h4>Jelena</h4>
                        <p>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC "Sed ut perspiciatis unde omnis is</p>
                        <p className="data">16/02/1996</p>
                    </div>
                    <div className="comments">
                        <h4>Jelena</h4>
                        <p>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC "Sed ut perspiciatis unde omnis is</p>
                        <p className="data">16/02/1996</p>
                    </div>
                </div>
                <div className="adding-comments">
                    <form>
                        <input placeholder="Ime" required type="text"/>
                        <textarea maxLength="140" type="text" required placeholder="Unesite comentar"/>
                        <button className="btn-submit">Objavi</button>
                    </form>
                </div>
            </div>
        </div> 
    )
}

BlogProfile.prototype = {
    state: PropTypes.object,
}

export default setup(BlogProfile);   