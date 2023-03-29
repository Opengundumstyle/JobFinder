import { useState,useEffect } from "react";
import axios from 'axios'
// import {RAPID_API_KEY} from '@env'
// const RapidApiKey = RAPID_API_KEY

const useFetch2 =(endpoint,query)=>{
    const [data,setData] = useState([])
    const [isLoading,setisLoading] = useState(false)
    const [error,setError] = useState(null)

    
    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {...query},
        headers: {
            'X-RapidAPI-Key': 'fcb44aa933msh45762cffca718aep1cd7b4jsnef9ac44965a0',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
         }
       };

        const fetchData = async ()=>{
             setisLoading(true)
             try{
               const response = await axios.request(options)
               setData(response.data.data)
               setisLoading(false)
             }catch(error){ 
                 setError(error)
                 alert(error)
             }finally{
                 setisLoading(false)
             }
        }

        useEffect(()=>{
            setTimeout(function(){
                  fetchData()
            },1000)
        },[])

        const refetch = ()=>{
            setisLoading(true)
            fetchData()
        }

        return {data,isLoading,error,refetch}
       
}


export default useFetch2