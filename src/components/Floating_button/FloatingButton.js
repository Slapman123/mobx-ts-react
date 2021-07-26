import React,{useState} from 'react';
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";
import svg from "../../assets/icon/chevron-upwards-arrow.svg"

const  FloatingButton = ()=>{
    const goToTop = () =>{
        window.scrollTo(0,0,'smooth')
    };
    const [scrollData,setScrollData] = useState(0);
    window.onscroll = function(){
        setScrollData(window.scrollY)
    }
    return(
        <div className={`floating-button ${scrollData>200?"showedBtn":""}`} onClick={goToTop}>
                <img src={svg}/>
        </div>
    )
}

FloatingButton.prototype = {
    state: PropTypes.object,
}

export default setup(FloatingButton);   