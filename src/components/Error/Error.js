import React from "react";
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";

const Errors = ({helpers}) => {
  return (
    <div className={`errors-holder ${helpers.app.error?"active-error":""}`}>
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
