import React,{useState} from 'react';
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";

import InfiniteScroll from 'react-infinite-scroll-component';
import NewsCard from '../NewsCard/NewsCard';
import Loading from '../Loader/Loading';

const  NewsList = ({actions,helpers,data})=>{
    const [page,setPage] = useState(data)
    const getMoreData = async () =>{
        const res = await fetch(`${process.env.REACT_APP_URL}/f-inishedpros?_locale=${helpers.app.localization}&_start=${page.length}&_limit=10`);
        const newPosts = await res.json()
        setPage(page=>[...page, ...newPosts])
      }    
    return(
          <InfiniteScroll 
            dataLength={data.length} 
            next={getMoreData}  
            hasMore={true}
            loader={<Loading/>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }>
            {
                page.map((news,i)=>{
                  return <NewsCard data={news} key={i}/>
                })
            }
          </InfiniteScroll>
    )
}

NewsList.prototype = {
    state: PropTypes.object,
}

export default setup(NewsList);   