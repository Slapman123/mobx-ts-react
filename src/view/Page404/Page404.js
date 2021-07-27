import React from "react";
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";
import img  from "../../assets/images/undraw_page_not_found_su7k.svg";

const News = () => {

  return (
    <div className="col">
        <div className="page-not-mach">
            <img src={img}/>
        </div>
    </div>
  );
};

News.prototype = {
  state: PropTypes.object,
};

export default setup(News);
