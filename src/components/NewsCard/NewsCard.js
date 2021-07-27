import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";

const  NewsCard = ({data,helpers})=>{
    return(
        <div className="new-card">
            <div className="new-card-info">
                <h2>{data.title}</h2>
                <p>{data.content.slice(0,250)}...</p>
                <Link to={`/radionice/${data.id}`} className="btn">{helpers.app.utils.button_3}</Link>
            </div>
        </div> 
    )
}

NewsCard.prototype = {
    state: PropTypes.object,
}

export default setup(NewsCard);   