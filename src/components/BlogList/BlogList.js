import React,{useEffect, useState} from 'react';
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";

import InfiniteScroll from 'react-infinite-scroll-component';
import BlogCard from '../BlogCard/BlogCard';
import Loading from '../Loader/Loading';

const  BlogList = ({actions,helpers})=>{
    const [page,setPage] = useState([])
    const getMoreData = async () =>{
        const res = await fetch(`${process.env.REACT_APP_URL}/blogs?_locale=${helpers.app.localization}&_start=${page.length}&_limit=10`);
        const newPosts = await res.json()
        setPage(page=>[...page, ...newPosts])
    }
    
    return(
          <InfiniteScroll 
            dataLength={page.length} 
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
                  return <BlogCard data={news} key={i}/>
                })
            }
          </InfiniteScroll>
    )
}

BlogList.prototype = {
    state: PropTypes.object,
}

export default setup(BlogList);   