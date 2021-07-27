import React,{useState} from "react";
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";
import Nav from "../Nav/Nav";
import ContactBanner from "../Contact_banner/ContactBanner";

const Header = ({helpers,actions}) => {
    window.onscroll = function(){
        actions.app.setScrollData(window.scrollY)
        const header = document.getElementById('a1')
         if(header){
        if(window.scrollY>300){
            header.style.position = "fixed"
        }else if (window.scrollY===0){
            header.style.position = "relative"
        }
        }
    }
  return (
      <header id='a1'>
          <ContactBanner/>
          <Nav/>
      </header>
  );
};

Header.prototype = {
  state: PropTypes.object,
};

export default setup(Header);
