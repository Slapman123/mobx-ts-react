import React,{useState} from "react";
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";

const Errors = () => {
  return (
    <div className="errors-holder">
        <div className="error">
            <p>Nesto je poslo po zlu</p>
        </div>
    </div>
  );
};

Errors.prototype = {
  state: PropTypes.object,
};

export default setup(Errors);
