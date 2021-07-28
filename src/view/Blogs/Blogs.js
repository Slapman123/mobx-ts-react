import React from "react";
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";
import BlogCard from "../../components/BlogCard/BlogCard";
import back from "../../assets/images/undraw_Blogging_re_kl0d.svg";

import useFetch from "../../utils/useFetch";

const Blogs = ({actions,helpers}) => {
  const {loading, error, data} = useFetch("http://localhost:1337/blogs?_locale="+helpers.app.localization);

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
  
  return (
    <div className="col">
        <div className="blog-logo">
          <img src={back}/>
          <h1>{helpers.app.utils.Blogs}</h1>
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
