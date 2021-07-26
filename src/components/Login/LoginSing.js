import React,{useState} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";
import loggs from "../../assets/images/undraw_Login_re_4vu2.svg";

const LoginSing = () => {
  const [selected, setSelected] = useState(0)
  const onLogin = () => {
    setSelected(1)
  };
  const onSign = () => {
    setSelected(0)
  }
  return (
    <div className="col">
        <div className="log-wrapper">
        <img src={loggs}/>
        <div className="log-sing">
            <form className={`login ${selected===0 ? "active" : ""}`}>
                <label>Username<input type="text" placeholder="Username" required/></label>
                <label>Password<input type="password" placeholder="Password" required/></label>
                <button className="btn-submit" type="submit">Log In</button>
                <button className="btn-link" type="button" onClick={onLogin}>Need a new account</button>
            </form>
            <form className={`sing ${selected===1 ? "active" : ""}`}>
                <label>Username<input type="text" placeholder="Username" required/></label>
                <label>Mail<input type="email" placeholder="Mail" required/></label>
                <label>Password<input type="password" placeholder="Password" required/></label>
                <label>Confirm Password<input type="password" placeholder="Confirm Password" required/></label>
                <button className="btn-submit" type="submit">Sing In</button>
                <button className="btn-link" type="button" onClick={onSign}>Have account</button>
            </form>
        </div>
        </div>
    </div>
  );
};

LoginSing.prototype = {
  state: PropTypes.object,
};

export default setup(LoginSing);
