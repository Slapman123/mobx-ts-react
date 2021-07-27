import React,{useState,useEffect} from 'react';
import {useParams} from "react-router-dom";
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";

import useFetch from '../../utils/useFetch';
import ReactMarkdown from "react-markdown"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const  NewsProfile = ({actions,helpers})=>{
    let [fetch,setFetch] = useState(false)
    const {id} = useParams();
    const {loading, error, data} = useFetch(`http://localhost:1337/f-inishedpros/${id}?_locale=${helpers.app.localization}`);
    useEffect(()=>{
      if(data.media){
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
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return(
        <div className="col">
            <div className="new-profile">
                <div className="new-profile-info">
                    <h1>{data.title}</h1>
                    <ReactMarkdown>{data.content}</ReactMarkdown>
                </div>
            </div>
            {
              fetch?
              <div className="new-image-holder">
                  <Carousel 
                    showDots={false}
                    swipeable={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    infinite={true}
                    ssr={true}
                    arrows={false}
                    transitionDuration={500}
                    responsive={responsive}>
                        { 
                          data.media.map((logo,i)=>{
                            return (<div className="slide" key={i}><img src={`http://localhost:1337${logo.url}`}/></div>)
                          })
                        }
                   </Carousel>
            </div>:null

            }
        </div> 
    )
}

NewsProfile.prototype = {
    state: PropTypes.object,
}

export default setup(NewsProfile);   