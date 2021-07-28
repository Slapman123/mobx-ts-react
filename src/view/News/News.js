import React, { useState } from "react";
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";
import back from "../../assets/images/undraw_collaborators_prrw.svg";
import NewsCard from "../../components/NewsCard/NewsCard";
import InfiniteScroll from 'react-infinite-scroll-component';

import useFetch from "../../utils/useFetch";
import Anounc from "../../components/Anounc/Anounc";


const News = ({actions,helpers}) => {
  const {loading, error, data} = useFetch(`http://localhost:1337/f-inishedpros?_locale=${helpers.app.localization}&_start=0&_limit=5`);
  const [page,setPage] = useState(data)
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
  const getMoreData = async () =>{
    const res = await fetch(`http://localhost:1337/f-inishedpros?_locale=${helpers.app.localization}&_start=${page.length}&_limit=5`);
    const newPosts = await res.json()
    setPage(page=>[...page, ...newPosts])
  }
  
  return (
    <div className="container">
      <div className='col'>
        <div className="news-list-holder">
            <div className="news-background"><h1>{helpers.app.utils.RadioniceTitle}</h1><img src={back}/></div>
            <Anounc/>
            <InfiniteScroll 
              dataLength={data.length} 
              next={getMoreData}  
              hasMore={true}>
              {
                page.map((news,i)=>{
                  return <NewsCard data={news} key={i}/>
                })
              }
            </InfiniteScroll>
        </div>
      </div>
    </div>
  );
};

News.prototype = {
  state: PropTypes.object,
};

export default setup(News);
