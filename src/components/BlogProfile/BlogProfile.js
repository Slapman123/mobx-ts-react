import React,{useState,useEffect} from 'react';
import PropTypes from "prop-types";
import {useParams} from "react-router-dom";
import { setup } from "../../utils/setup";
import useFetch from "../../utils/useFetch";
import ReactMarkdown from "react-markdown";

const  BlogProfile = ({actions,helpers})=>{
    let [fetch,setFetch] = useState(false)
    const {id} = useParams();
    const {loading, error, data} =  useFetch(`http://localhost:1337/blogs/${id}?_locale=${helpers.app.localization}`);

    useEffect(()=>{
        if(data.comments){
            setFetch(true)
        }
    },[data])
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
    let imageUrl = "";
    if(data.cover){
        imageUrl = data.cover[0].url;
    }

    const onSubmit = (e) =>{
        e.preventDefault()
    }
    return(
        <div className="col">
            <div className="profile">
                <div className="profile-img">
                    <img src={`http://localhost:1337${imageUrl}`}/>
                    <h2>{data.Title}</h2>
                </div>
                <div className="date-author">
                    <i className="fa fa-calendar"><p>{data.published_at}</p></i>
                    <i className="fa fa-user"><p>{data.autor}</p></i>
                </div>
                <div className="profile-info">
                    <ReactMarkdown>{data.description}</ReactMarkdown>
                </div>
                {
                    fetch?
                    <div className="comments-list">
                    {  
                       data.comments.map((comment,i)=>{
                        return (<div key={i} className="comments">
                                <h4>{comment.author}</h4>
                                <p>{comment.content}</p>
                                <p className="data">{comment.published_at}</p>
                            </div>)
                        })
                    }
                    </div>:null
                }  
                {
                    window.localStorage.getItem("jwt")?
                        <div className="adding-comments">
                            <form onSubmit={onSubmit}>
                            <textarea maxLength="140" type="text" required placeholder="Unesite comentar"/>
                            <button className="btn-submit">Objavi</button>
                            </form>
                        </div>:
                        <div>
                            Molimo vas ulogujte se da bi ste komentarisali
                        </div>
                }         
                
            </div>
        </div> 
    )
}

BlogProfile.prototype = {
    state: PropTypes.object,
}

export default setup(BlogProfile);   