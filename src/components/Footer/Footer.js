import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";
import logo from "../../assets/icon/android-chrome-w.png";
import instagram from "../../assets/icon/instagram.svg";
import facebook from "../../assets/icon/facebook.svg";

const Footer = ()=>{
    const navLinks = ["home","news","service","blog","who we are","contact"]
    return(
        <footer>
            <div className='col'>
                <div className="social-holder">
                <img id="logo" src={logo}/>
                <div className="social-btns">
                    <a href="#"><img src={instagram}/></a>
                    <a href="#"><img src={facebook}/></a>
                </div>
            </div>
                <ul className="addresses">
                    <li>Informacije o firmi</li>
                    <li>Branimira Ćosića 25</li>
                    <li>Novi Sad</li>
                    <li>Srbija</li>
                </ul>
                <ul className="fast-links">
                    {
                        navLinks.map((link,i)=><Link to={`/${link}`} key={i}>{link}</Link>)
                    }
                </ul>
                <ul className="contact-info">
                    <li>Telefon : <a href="tel:00631455668">+381 63 14 55 668</a></li>
                    <li>Mail : <a href="mailto:office@hrfactor.rs">office@hrfactor.rs</a></li>
                </ul>
                <div className="who-we-are">
                    <Link to="#">Ko smo mi</Link>
                    <p>Mi smo HR Factor, agencija koja posluje u oblasti menadžmenta ljudskih resursa.Naše usluge pomažu Vam pri pronalaženju pravih ljudi za Vašu organizaciju, kao i njihovom razvoju na profesionalnom putu.</p>
                </div>
            </div>
        </footer>
    )
}

Footer.prototype = {
    state: PropTypes.object,
}

export default setup(Footer);