import React,{useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";
import loggs from "../../assets/images/undraw_Login_re_4vu2.svg";
import axios from "axios";

const LoginSing = ({actions}) => {
  const [selected, setSelected] = useState(0)
  const [emailL, setEmailL] = useState("")
  const [passL, setPassL] = useState("")
  const [userS, setUserS] = useState("")
  const [mailS, setMailS] = useState("")
  const [passS, setPassS] = useState("")
  const goTo = useHistory();
  useEffect(()=>{
    clearInterval()
    setInterval(()=>{
      actions.app.setError(false,"")
    },5000)
  },[])
  
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
    axios.post(`${process.env.REACT_APP_URL}/auth/local`,{
      identifier: emailL,
      password: passL
    }).then((data)=>{
      const user = data.data
      window.localStorage.setItem("username", user.user.username);
      window.localStorage.setItem("mail", user.user.email);
      window.localStorage.setItem("src", user.user.profile.url);
      window.localStorage.setItem("jwt", user.jwt);
      actions.app.setLoading(false)
      actions.app.setUserData(user.user.username,user.user.email,user.user.profile.url,user.jwt)
      goTo.push('/');
    }).catch(e=>{
      setEmailL("")
      setPassL("")
      actions.app.setLoading(false);
      actions.app.setError(true,"Password or Username is not correct");
    })
  }
  const onSingS =(e)=>{
    e.preventDefault()
    actions.app.setLoading(true)
    axios.post(`${process.env.REACT_APP_URL}/auth/local/register`,{
      username: userS,
      email: mailS,
      password: passS,
      role: 'Reader'
    }).then((data)=>{
      window.localStorage.setItem("username", data.data.user.username);
      window.localStorage.setItem("jwt", data.data.jwt);
      actions.app.setLoading(false)
      actions.app.setUserData(data.data.user.username,data.data.jwt)
      goTo.push('/');
    }).catch(e=>{
      setUserS("")
      setPassS("")
      setMailS("")
      actions.app.setLoading(false);
      actions.app.setError(true,"Server is down");
    })
  }
  return (
    <div className="col">
        <div className="log-wrapper">
        <img src={loggs}/>
        <div className="log-sing">
            <form className={`login ${selected===0 ? "active" : ""}`} onSubmit={onLoginS} >
                <label>Mail<input type="text" value={emailL} placeholder="Mail" onChange={(e)=>setEmailL(e.target.value)} required autoComplete={"true"}/></label>
                <label>Password<input type="password" value={passL} placeholder="Password" onChange={(e)=>setPassL(e.target.value)} autoComplete={"true"} required/></label>
                <button className="btn-submit" type="submit">Log In</button>
                <button className="btn-link" type="button" onClick={onLogin}>Need a new account</button>
            </form>
            <form className={`sing ${selected===1 ? "active" : ""}`} onSubmit={onSingS}>
                <label>Username<input value={userS} type="text" placeholder="Username" onChange={(e)=>setUserS(e.target.value)} required/></label>
                <label>Mail<input value={mailS} type="email" placeholder="Mail"onChange={(e)=>setMailS(e.target.value)} required/></label>
                <label>Password<input value={passS} type="password" placeholder="Password" onChange={(e)=>setPassS(e.target.value)} required/></label>
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
