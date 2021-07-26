import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";

const  BlogCard = ({data})=>{
    return(
        <div className="blog-card">
            <div className="image-wrapper">
                <img src={`http://localhost:1337${data.cover[0].url}`}/>
                {
                    data.isnew?<div className="date"><p>Novo</p></div>:''
                }
            </div>
            <div className="blog-card-info">
                <h2>{data.Title}</h2>
                <p>{data.about}</p>
                <Link to={`/blog/${data.id}`} className="btn">Procitaj Vise</Link>
            </div>
        </div> 
    )
}

BlogCard.prototype = {
    state: PropTypes.object,
}

export default setup(BlogCard);   