import React,{ useEffect,useState } from "react";

const useFetch = (url) =>{
    const [data,setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    
    useEffect(()=>{
        const fetchData = async () => {
            setLoading(true);

            try {
                const res = await fetch(url);
                const jsons = await res.json();

                setData(jsons);
                setLoading(false);
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }
        fetchData()
    },[url])
    return {loading, error, data}
}
export default useFetch