import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";

const Errors = ({helpers}) => {
  return (
    <div className={`errors-holder ${helpers.app.error?"active-error":""}`}>
        <div className="error">
            <p>{helpers.app.errormessage}</p>
        </div>
    </div>
  );
};

Errors.prototype = {
  state: PropTypes.object,
};

export default setup(Errors);
