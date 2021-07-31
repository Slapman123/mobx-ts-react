import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";

const  BlogCard = ({data,helpers})=>{
    return(
        <div className="blog-card">
            <div className="image-wrapper">
                <img src={`${process.env.REACT_APP_URL}${data.cover[0].url}`}/>
                {
                    data.isnew?<div className="date"><p>{helpers.app.utils.NovoMark}</p></div>:''
                }
            </div>
            <div className="blog-card-info">
                <h2>{data.Title}</h2>
                <p>{data.about}</p>
                <Link to={`/blog/${data.id}`} className="btn">{helpers.app.utils.button_3}</Link>
            </div>
        </div> 
    )
}

BlogCard.prototype = {
    state: PropTypes.object,
}

export default setup(BlogCard);   