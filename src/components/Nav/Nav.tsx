import React from 'react';
import PropTypes,{any} from "prop-types";
import { setup } from "../../utils/setup";

const Nav = ({})=>{
    let type: String;
    type= "Nav";
    return(
        <div>
            {type}
        </div>
    )
}

Nav.prototype = {
    state: PropTypes.object,
  }

export default setup(Nav);