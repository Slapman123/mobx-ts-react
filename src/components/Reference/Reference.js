import React from 'react';
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";
import useFetch from "../../utils/useFetch";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Errors from "../Error/Error";

const  Reference = ({actions})=>{
    const {loading, error, data} = useFetch("http://localhost:1337/references");

    if(loading){
      actions.app.setLoading(loading)
    };
  if(data) {
      actions.app.setLoading(false)
    }
    if(error) return <Errors/>;
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
        <div className="">
            <div className="reference-holder">
                <div className="col">
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
                          data.map((logo,i)=>{
                            return <div className="slide" key={i}><img src={`http://localhost:1337${logo.logo.url}`}/></div>
                          })
                        }
                </Carousel>
                </div>
            </div>
        </div>
    )
}

Reference.prototype = {
    state: PropTypes.object,
}

export default setup(Reference);