import React,{useState} from 'react';
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";

import InfiniteScroll from 'react-infinite-scroll-component';
import BlogCard from '../BlogCard/BlogCard';

const  BlogList = ({actions,helpers,data})=>{
    const [page,setPage] = useState(data)
    const getMoreData = async () =>{
        actions.app.setLoading(true)
        const res = await fetch(`http://localhost:1337/blogs?_locale=${helpers.app.localization}&_start=${page.length}&_limit=10`);
        const newPosts = await res.json()
        setPage(page=>[...page, ...newPosts])
        actions.app.setLoading(false)
      }    
    return(
          <InfiniteScroll 
            dataLength={data.length} 
            next={getMoreData}  
            hasMore={true}>
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