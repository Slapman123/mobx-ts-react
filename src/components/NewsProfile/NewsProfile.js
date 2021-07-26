
import React from 'react';
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";
import team from "../../assets/icon/team1.png";

const  NewsProfile = ()=>{
    return(
        <div className="col">
            <div className="new-profile">
                <div className="image-wrapper">
                <img src={team}/>
            </div>
                <div className="new-profile-info">
                    <h2>Voleli biste da naučite više o regrutaciji i selekciji radnika?</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
        </div> 
    )
}

NewsProfile.prototype = {
    state: PropTypes.object,
}

export default setup(NewsProfile);   