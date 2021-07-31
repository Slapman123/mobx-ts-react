import React from "react";
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";
import back from "../../assets/images/undraw_Blogging_re_kl0d.svg";
import BlogList from "../../components/BlogList/BlogList";

const Blogs = ({helpers}) => {
  return (
    <div className="col">
        <div className="blog-logo">
          <img src={back}/>
          <h1>{helpers.app.utils.Blogs}</h1>
        </div>
        <BlogList />
    </div>
  );
};

Blogs.prototype = {
  state: PropTypes.object,
};

export default setup(Blogs);
