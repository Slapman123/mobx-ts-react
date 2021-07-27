import React from 'react';
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";
import svg from "../../assets/icon/chevron-upwards-arrow.svg"

const  FloatingButton = ({helpers})=>{
    const goToTop = () =>{
        window.scrollTo(0,0,'smooth')
    };
    return(
        <div className={`floating-button ${helpers.app.scrollData>200?"showedBtn":""}`} onClick={goToTop}>
                <img src={svg}/>
        </div>
    )
}

FloatingButton.prototype = {
    state: PropTypes.object,
}

export default setup(FloatingButton);   