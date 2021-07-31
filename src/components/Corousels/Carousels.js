import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";

const  Carousels = ({data})=>{
    const [dats,setDats] = useState(false)

    useEffect(()=>{
      if(data){
        setDats(true)
      }
    },[data])
    return(
        <div className="carousels">
          {
            dats?
            data.map((img,i)=>{
              return <div className="slide" key={i}><img src={`${process.env.REACT_APP_URL}${img.url}`}/></div>
            }):null
          }
        </div>
    )
}

Carousels.prototype = {
    state: PropTypes.object,
}

export default setup(Carousels);