import React,{useState} from 'react';
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";
import success from "../../assets/images/undraw_Success_factors_re_ce93.svg";
import procces from "../../assets/images/undraw_Processing_re_tbdu.svg";
import 'font-awesome/css/font-awesome.min.css';
import Modal from "../Modal/Modal";

const  FeatureCollections = ({normal})=>{
    const [showModal1,setShowModal1] = useState(false);
    const [showModal2,setShowModal2] = useState(false);
    const show1 = () =>{
        setShowModal1(!showModal1);
    };
    const show2 = () =>{
        setShowModal2(!showModal2);
    };
    return(
        <div className="col">
            <div className={`featureCollections-holder ${normal ? "reverse" : "normal"}`}>
                {
                    normal? 
                    <div className="feature-info">
                        <h2>Dizajnirajte i isplanirajte strukturu Vaše organizacije i osigurajte uspešnost poslovanja</h2>
                        <p>Naše usluge dizajniranja i planiranja poslovne strategije, organizacione strukture, kao i sistematizacije radnih mesta učiniće Vašu organizaciju efikasnijom, sa zagarantovanim napretkom na poslovnom planu.</p>
                        <button className="btn" onClick={show1}>Saznajte vise</button>
                    </div> :
                    <div className="feature-info-reverse">
                        <h2>Odredite i poboljšajte produktivnost Vaših kadrova</h2>
                        <ul>
                            <li><i className="fa fa-check"><p>Saznajte kolika je trenutna produktivnost Vaših zaposlenih.</p></i></li>
                            <li><i className="fa fa-check"><p>Reorganizujte zaposlene i postignite bolji kvalitet rada.</p></i></li>
                            <li><i className="fa fa-check"><p>Motivišite Vaše zaposlene na putu ka produktivnosti.</p></i></li>
                        </ul>
                        <button className="btn" onClick={show2}>Saznajte vise</button>
                    </div> 
                }
                {
                    normal? <img src={success}/> : <img src={procces}/>
                }
            </div>
            <Modal modalInit1={showModal1} modalInit2={showModal2} onClick1={show1} onClick2={show2}/>
        </div>
    )
}

FeatureCollections.prototype = {
    state: PropTypes.object,
}

export default setup(FeatureCollections);