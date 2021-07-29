import React from "react";
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";
import back from "../../assets/images/undraw_Blogging_re_kl0d.svg";

import useFetch from "../../utils/useFetch";
import BlogList from "../../components/BlogList/BlogList";

const Blogs = ({actions,helpers}) => {
  const {loading, error, data} = useFetch(`http://localhost:1337/blogs?_locale=${helpers.app.localization}&_start=0&_limit=10`);

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
        <BlogList data={data}/>
    </div>
  );
};

Blogs.prototype = {
  state: PropTypes.object,
};

export default setup(Blogs);
