import React,{useEffect} from 'react';
import {Link,NavLink} from "react-router-dom";
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";
import logo from "../../assets/icon/logo2.png";
import search from "../../assets/icon/icon-search.svg";
import users from "../../assets/icon/profile-user.svg";
import instagram from "../../assets/icon/instagram (1).svg";
import facebook from "../../assets/icon/facebook (1).svg";
import menu from "../../assets/icon/square.svg";
import sr from "../../assets/icon/serbia.svg";
import en from "../../assets/icon/great-britain.svg";

const Nav = ({actions,helpers})=>{
    const navLinks = ["home","radionice","service","blog","who we are","contact"]
    useEffect(()=>{
    },[helpers.app.formA])
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
                    <NavLink activeClassName='active-link' to="/home">{helpers.app.utils.Home}</NavLink>
                    <NavLink activeClassName='active-link' to="/workshops" >{helpers.app.utils.Workshops}</NavLink>
                    <NavLink activeClassName='active-link' to="/service" >{helpers.app.utils.Service}</NavLink>
                    <NavLink activeClassName='active-link' to="/blog" >{helpers.app.utils.Blog}</NavLink>
                    <NavLink activeClassName='active-link' to="/who we are" >{helpers.app.utils.whoweare}</NavLink>
                    <NavLink activeClassName='active-link' to="/contact" >{helpers.app.utils.contact}</NavLink>
                </ul>          
            </div>
            <div className="login">
                {
                     helpers.app.formA.username ? 
                    <Link to="/profile" className="wellcome">{helpers.app.utils.nav_wellcome} <p>{helpers.app.formA.username}</p></Link>
                    :
                    <div className="log-sing-holder">
                        <img src={users}/>
                        <Link to="/registration">Log In</Link>
                    </div>
                }
                <div className="localization">
                    {
                        helpers.app.localization==="sr-Latn"?<img src={sr}/>:<img src={en}/>
                    }
                    <select name="language" id="language" onChange={(e)=>{actions.app.setLocalization(e.target.value)}}>
                        <option value="sr-Latn">SR</option>
                        <option value="en">EN</option>
                    </select>
                </div>
            </div>
            <div className="hamburger" onClick={()=>actions.app.setMobileMenu(!helpers.app.mobilemenu)}>
                <img src={menu}/>
            </div>
        </nav>
    )
}

Nav.prototype = {
    state: PropTypes.object,
}

export default setup(Nav);