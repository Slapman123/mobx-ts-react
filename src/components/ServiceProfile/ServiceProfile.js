import React from 'react';
import {useParams} from "react-router-dom";
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";
import useFetch from '../../utils/useFetch';
import ReactMarkdown from "react-markdown"
import Loading from '../Loader/Loading';
import Errors from "../../components/Error/Error";

const  ServiceProfile = ()=>{
    const {id} = useParams();
    const {loading, error, data} = useFetch(`http://localhost:1337/services/${id}`);

    if(loading) return <Loading/>;
    if(error) return <Errors/>;
        
    return(
        <article>
            <div className="service-profile">
                <h1>{data.title}</h1>
                <hr/>
                <ReactMarkdown>{data.Description}</ReactMarkdown>
            </div> 
        </article>
    )
}

ServiceProfile.prototype = {
    state: PropTypes.object,
}

export default setup(ServiceProfile);   