import React,{useState} from 'react';
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";
import 'font-awesome/css/font-awesome.min.css';

const  Modal = ({modalInit1,modalInit2,onClick1,onClick2,helpers})=>{
    return(
        <div className="col">
            <div className="modal">
                <div id="modal1" className={`modal-info ${modalInit1?"active":""}`}>
                    <h3>{helpers.app.utils.hidden_1_title}</h3>
                    <hr/>
                    <p>{helpers.app.utils.hidden_1_desc}</p>
                    <button className="btn" onClick={onClick1}>{helpers.app.utils.button_2}</button>
                </div>
                <div id="modal2" className={`modal-info ${modalInit2?"active":""}`}>
                    <h3>{helpers.app.utils.hidden_2_title}</h3>
                    <hr/>
                    <strong>{helpers.app.utils.hidden_2_subtitle}</strong>
                    <p>{helpers.app.utils.hidden_2_desc}</p>
                    <button className="btn" onClick={onClick2}>{helpers.app.utils.button_2}</button>
                </div>
            </div>
        </div>
    )
}

Modal.prototype = {
    state: PropTypes.object,
}

export default setup(Modal);