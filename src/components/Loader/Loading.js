import React,{useState} from "react";
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";
import loading from "../../assets/images/loading.gif";

const Loading = () => {

  return (
    <div className="loading-overlay">
        <img src={loading}/>
    </div>
  );
};

Loading.prototype = {
  state: PropTypes.object,
};

export default setup(Loading);
