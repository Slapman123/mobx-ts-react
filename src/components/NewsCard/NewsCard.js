import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";
import team from "../../assets/icon/team1.png";

const  NewsCard = ({id})=>{
    return(
        <div className="new-card">
            <div className="image-wrapper">
                <img src={team}/>
            </div>
            <div className="new-card-info">
                <h2>Voleli biste da naučite više o regrutaciji i selekciji radnika?</h2>
                <p>Napokon obuka o selekciji radnika, u kojoj krećete od nule, sve je prezentovano prostim rečima, tako da svako može da razume</p>
                <Link to={`/news/${id}`} className="btn">Procitaj Vise</Link>
            </div>
        </div> 
    )
}

NewsCard.prototype = {
    state: PropTypes.object,
}

export default setup(NewsCard);   