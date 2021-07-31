import React from 'react';
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";

const MobileMenu = ({helpers,actions})=>{
    const navLinks = ["home","workshops","service","blog","who we are","contact"]
    return(
        <div className={`mobile-menu ${helpers.app.mobilemenu?'mobile-menu-active':""}`}>
            <ul onClick={()=>{actions.app.setMobileMenu(!helpers.app.mobilemenu)}}>
                <NavLink activeClassName='active-link' to="/home">{helpers.app.utils.Home}</NavLink>
                <NavLink activeClassName='active-link' to="/workshops" >{helpers.app.utils.Workshops}</NavLink>
                <NavLink activeClassName='active-link' to="/service" >{helpers.app.utils.Service}</NavLink>
                <NavLink activeClassName='active-link' to="/blog" >{helpers.app.utils.Blog}</NavLink>
                <NavLink activeClassName='active-link' to="/who we are" >{helpers.app.utils.whoweare}</NavLink>
                <NavLink activeClassName='active-link' to="/contact" >{helpers.app.utils.contact}</NavLink>
            </ul>  
        </div>
    )
}

MobileMenu.prototype = {
    state: PropTypes.object,
}

export default setup(MobileMenu);