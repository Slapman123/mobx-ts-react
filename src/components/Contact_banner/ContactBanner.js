import React from "react";
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";


const ContactBanner = ({helpers}) => {
  
  return (
    <ul className="contact-banner">
        <i className="fa fa-envelope-o"><li>{helpers.app.utils.tel} : <a href="tel:00631455668">+381 63 14 55 668</a></li></i>
        <i className="fa fa-phone"><li>{helpers.app.utils.mailf} : <a href="mailto:office@hrfactor.rs">office@hrfactor.rs</a></li></i>
    </ul>
  );
};

ContactBanner.prototype = {
  state: PropTypes.object,
};

export default setup(ContactBanner);
