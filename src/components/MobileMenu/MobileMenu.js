import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";

const MobileMenu = ({helpers,actions})=>{
    const navLinks = ["home","radionice","service","blog","who we are","contact"]
    return(
        <div className={`mobile-menu ${helpers.app.mobilemenu?'mobile-menu-active':""}`}>
            <ul>
                {
                  navLinks.map((link,i)=><Link onClick={()=>{actions.app.setMobileMenu(false)}} to={`/${link}`} key={i}>{link}</Link>)
                }
            </ul>  
        </div>
    )
}

MobileMenu.prototype = {
    state: PropTypes.object,
}

export default setup(MobileMenu);