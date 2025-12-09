import {useState,useEffect}from "react"


 
function useCurrencyInfo(currency){  //we made this hook to return some data 
   const [data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json()) //converts data to json
       .then(()=>setData(res[currency]))//instead of .currency we used [] to access
    },[currency])
 return data
}
export default useCurrencyInfo;