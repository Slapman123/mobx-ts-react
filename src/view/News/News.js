import React,{useState} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";
import back from "../../assets/images/undraw_newspaper_k72w.svg";
import NewsCard from "../../components/NewsCard/NewsCard";

import Pagination from "react-js-pagination";


const News = () => {
  const newsList = [1,1,1,1,1,1,1,1]
  const [activePage,setActivePage] = useState(1)
  const handlePageChange=(pageNumber)=>{
    setActivePage(pageNumber)
  }
  return (
    <div className="container">
      <div className='col'>
        <div className="news-list-holder">
            <div className="news-background"><h1>News</h1><img src={back}/></div>
            <div className="news-list">
              {
               newsList.map((news,i)=>{
                  return <NewsCard id={i} key={i}/>
               })
              }
            </div>
        </div>
        <div>
            <Pagination
                activePage={activePage}
                itemsCountPerPage={5}
                totalItemsCount={newsList.length}
                pageRangeDisplayed={5}
                itemClass="page-item"
                linkClass="page-link"
                onChange={handlePageChange}
            />
        </div>
      </div>
    </div>
  );
};

News.prototype = {
  state: PropTypes.object,
};

export default setup(News);
