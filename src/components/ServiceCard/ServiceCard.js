import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";
import img from "../../assets/images/dokumentacija.jpg";

const ServiceCard = ({poda,helpers})=>{
    return(
        <div className="service-card">
            <div className="image-wrapper">
                <img src={`${process.env.REACT_APP_URL}${poda.Cover.url}`}/>
            </div>
            <div className="service-info">
                <h2>{poda.title}</h2>
                <p>{poda.CardText}</p>
                <Link to={`/service/${poda.id}`} className="btn">{helpers.app.utils.button_1}</Link>
            </div>
        </div>
    )
}

ServiceCard.prototype = {
    state: PropTypes.object,
}

export default setup(ServiceCard);