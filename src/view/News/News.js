import React,{useState} from "react";
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";
import back from "../../assets/images/undraw_collaborators_prrw.svg";
import NewsCard from "../../components/NewsCard/NewsCard";


import useFetch from "../../utils/useFetch";
import Pagination from "react-js-pagination";
import Anounc from "../../components/Anounc/Anounc";


const News = ({actions,helpers}) => {
  const [activePage,setActivePage] = useState(1)
  const {loading, error, data} = useFetch("http://localhost:1337/f-inishedpros?_locale="+helpers.app.localization);
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
  const handlePageChange=(pageNumber)=>{
    setActivePage(pageNumber)
  }
  return (
    <div className="container">
      <div className='col'>
        <div className="news-list-holder">
            <div className="news-background"><h1>{helpers.app.utils.RadioniceTitle}</h1><img src={back}/></div>
            <Anounc/>
           <div className="news-list">
              {
               data.map((news,i)=>{
                  return <NewsCard data={news} key={i}/>
               })
              }
            </div>
        </div>
        <div>
            <Pagination
                activePage={activePage}
                itemsCountPerPage={5}
                totalItemsCount={data.length}
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
