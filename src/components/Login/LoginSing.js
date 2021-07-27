import React,{useState} from "react";
import {useHistory} from "react-router-dom";
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";
import loggs from "../../assets/images/undraw_Login_re_4vu2.svg";
import axios from "axios";

const LoginSing = ({actions}) => {
  const [selected, setSelected] = useState(0)
  const [emailL, setEmailL] = useState()
  const [passL, setPassL] = useState()
  const [userS, setUserS] = useState()
  const [mailS, setMailS] = useState()
  const [passS, setPassS] = useState()
  const goTo = useHistory();
  //toggle
  const onLogin = () => {
    setSelected(1)
  };
  const onSign = () => {
    setSelected(0)
  }
  //submit
  const onLoginS =(e)=>{
    e.preventDefault()
    actions.app.setLoading(true)
    axios.post('http://localhost:1337/auth/local',{
      identifier: emailL,
      password: passL
    }).then((data)=>{
      window.localStorage.setItem("username", data.data.user.username);
      window.localStorage.setItem("jwt", data.data.jwt);
      actions.app.setLoading(false)
      goTo.push('/');
    }).catch(e=>{
      console.log(e)
    })
  }
  const onSingS =(e)=>{
    e.preventDefault()
    actions.app.setLoading(true)
    axios.post('http://localhost:1337/auth/local/register',{
      username: userS,
      email: mailS,
      password: passS,
      role: 'Reader'
    }).then((data)=>{
      window.localStorage.setItem("username", data.data.user.username);
      window.localStorage.setItem("jwt", data.data.jwt);
      actions.app.setLoading(false)
      goTo.push('/');
    }).catch(e=>{
      console.log(e)
    })
  }
  return (
    <div className="col">
        <div className="log-wrapper">
        <img src={loggs}/>
        <div className="log-sing">
            <form className={`login ${selected===0 ? "active" : ""}`} onSubmit={onLoginS}>
                <label>Mail<input type="text" placeholder="Mail" onChange={(e)=>setEmailL(e.target.value)} required/></label>
                <label>Password<input type="password" placeholder="Password" onChange={(e)=>setPassL(e.target.value)} required/></label>
                <button className="btn-submit" type="submit">Log In</button>
                <button className="btn-link" type="button" onClick={onLogin}>Need a new account</button>
            </form>
            <form className={`sing ${selected===1 ? "active" : ""}`} onSubmit={onSingS}>
                <label>Username<input type="text" placeholder="Username" onChange={(e)=>setUserS(e.target.value)} required/></label>
                <label>Mail<input type="email" placeholder="Mail"onChange={(e)=>setMailS(e.target.value)} required/></label>
                <label>Password<input type="password" placeholder="Password" onChange={(e)=>setPassS(e.target.value)} required/></label>
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
