import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";

const  TeamCard = ({team,helpers})=>{
    return(
        <div className="team-holder">
            <div className="team-profile">
                <div className="image-wrapper">
                <img src={`http://localhost:1337${team.TeamImage[0].url}`}/>
            </div>
                <strong>{team.Name}</strong>
                <p>{team.NameInfo}</p>
                <Link className="btn-meet" to={`/team/${team.id}`}>{helpers.app.utils.button_5}</Link>
            </div>
        </div> 
    )
}

TeamCard.prototype = {
    state: PropTypes.object,
}

export default setup(TeamCard);   