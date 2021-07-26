import React from "react";
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";
import BlogCard from "../../components/BlogCard/BlogCard";
import back from "../../assets/images/undraw_Blogging_re_kl0d.svg";

import useFetch from "../../utils/useFetch";
import Loading from "../../components/Loader/Loading";
import Errors from "../../components/Error/Error";

const Blogs = () => {
  const {loading, error, data} = useFetch("http://localhost:1337/blogs");

  if(loading) return <Loading/>;
  if(error) return <Errors/>;

  return (
    <div className="col">
        <div className="blog-logo">
          <img src={back}/>
          <h1>Blogs</h1>
        </div>
        <div className='blogs-list'>
            {
                data.map((item,i)=>{
                    return <BlogCard key={i} data={item}/>
                })
            }
        </div>
    </div>
  );
};

Blogs.prototype = {
  state: PropTypes.object,
};

export default setup(Blogs);
