
import React from 'react';
import {useHistory} from "react-router-dom";
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";
import useFetch from '../../utils/useFetch';
import team from "../../assets/icon/team1.png";
import log from "../../assets/icon/logout.svg";

const  UserProfile = ({actions,helpers})=>{
    const goTo = useHistory();
    const {loading, error, data} = useFetch("http://localhost:1337/promotions?_locale="+helpers.app.localization);
    if(loading){
        actions.app.setLoading(loading)
      };
      if(error){
        actions.app.setError(error)
      }
      if(data) {
        actions.app.setLoading(false)
        actions.app.setError(false)
      } 
    return(
        <div className='profile-background'>
            <div className='col'>
               <div className='prodile-wrapper'>
                    <div className="user-card">
                        <div className='profile-img'>
                            <img src={`http://localhost:1337${helpers.app.formA.src}`}/>
                        </div>
                        <div className='user-info'>
                            <div className="user-info-list">
                                <p>Username: {helpers.app.formA.username}</p>
                                <p>Email: {helpers.app.formA.mail}</p>
                            </div>
                            <button className="btn" onClick={()=>{
                                localStorage.clear()
                                actions.app.resetUserData()
                                goTo.push('/');
                            }}>Log out<img src={log}/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

UserProfile.prototype = {
    state: PropTypes.object,
}

export default setup(UserProfile);   