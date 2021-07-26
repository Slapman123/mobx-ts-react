import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";
import logo from "../../assets/icon/logo2.png";
import search from "../../assets/icon/icon-search.svg";
import users from "../../assets/icon/profile-user.svg";
import instagram from "../../assets/icon/instagram (1).svg";
import facebook from "../../assets/icon/facebook (1).svg";
import menu from "../../assets/icon/square.svg";

const Nav = ()=>{
    const navLinks = ["home","news","service","blog","who we are","contact"]
    return(
        <nav>
            <div className="logo">
                <Link to="/"><img src={logo}/></Link>
            </div>
            <div className="nav-holder">
                <div className="nav-wrapper">
                    <div className="nav-search">
                        <input type="search"/>
                        <img src={search}/>
                    </div>
                    <a href="#"><img src={instagram}/></a>
                    <a href="#"><img src={facebook}/></a>
                </div>
                <ul>
                    {
                        navLinks.map((link,i)=><Link to={`/${link}`} key={i}>{link}</Link>)
                    }
                </ul>          
            </div>
            <div className="login">
                <div className="log-sing-holder">
                    <img src={users}/>
                    <Link to="/registration">Log In</Link>
                </div>
                <select name="language" id="language">
                    <option value="en">En</option>
                    <option value="sr">Sr</option>
                </select>
            </div>
            <div className="hamburger">
                <img src={menu}/>
            </div>
        </nav>
    )
}

Nav.prototype = {
    state: PropTypes.object,
}

export default setup(Nav);