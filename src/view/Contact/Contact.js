import React from "react";
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";
import banner from "../../assets/icon/banner.svg";
import background from "../../assets/images/undraw_contact_us_15o2.svg";
import instagram from "../../assets/icon/instagram (1).svg";
import facebook from "../../assets/icon/facebook (1).svg";
import linkedin from "../../assets/icon/linkedin.svg";

const Contact = ({helpers}) => {
  const onSubmit = () =>{
    
  }
  return (
    <div>
      <div className='col'>
        <div className="contact">
            <img id="background" src={background}/>
            <img id="banner" src={banner}/>
            <div className="contact-form">
                <form id="contact-from" onSubmit={onSubmit}>
                    <label><span>{helpers.app.utils.name}</span><input placeholder={helpers.app.utils.name} type="text" required/></label>
                    <label><span>{helpers.app.utils.subname}</span><input placeholder={helpers.app.utils.subname} type="text" required/></label>
                    <label><span>{helpers.app.utils.nameofcomp}</span><input placeholder={helpers.app.utils.nameofcomp} type="text"/></label>
                    <label><span>{helpers.app.utils.numberc}</span><input placeholder={helpers.app.utils.numberc} type="text" /></label>
                    <label><span>{helpers.app.utils.mail}</span><input placeholder={helpers.app.utils.mail} type="email" required/></label>
                    <textarea placeholder="Pitanje" required></textarea>
                    <button className="btn-submit" type="submit">{helpers.app.utils.button_6}</button>
                </form>
                <div className="social-maps">
                  <iframe className="google-map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5617.112537860287!2d19.830992!3d45.256765!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b1045bcf7de97%3A0x9386bc12a684a093!2z0JHRgNCw0L3QuNC80LjRgNCwINCL0L7RgdC40ZvQsCAyNSwg0J3QvtCy0Lgg0KHQsNC0!5e0!3m2!1ssr!2srs!4v1627077537725!5m2!1ssr!2srs" allowFullScreen="" loading="lazy"></iframe>
                  <div className="social-btns">
                      <a href="#"><img src={instagram}/></a>
                      <a href="#"><img src={facebook}/></a>
                      <a href="#"><img src={linkedin}/></a>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

Contact.prototype = {
  state: PropTypes.object,
};

export default setup(Contact);
