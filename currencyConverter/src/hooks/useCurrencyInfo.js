import { data } from "autoprefixer";
import { useEffect,useState } from "react";
function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then(res=>res.json())  // this will convert data to json
        .then((res) => setData(res[currency]))  // response ke andr se data nikal ke set kr do 

    },[currency])


    return data;
}
export default useCurrencyInfo;

// basic function which return js or jsx is also a hook 
// 