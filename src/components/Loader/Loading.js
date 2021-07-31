import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";
import loading from "../../assets/images/loading.gif";

const Loading = ({helpers}) => {
  return (
    <div className={`loading-overlay ${helpers.app.loading?"active-loader":""}`}>
      <img src={loading}/>
    </div>
  );
};

Loading.prototype = {
  state: PropTypes.object,
};

export default setup(Loading);
