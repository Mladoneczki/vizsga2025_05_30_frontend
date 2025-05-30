import { createContext, useEffect, useState } from "react";
import { myAxios } from "./MyAxios";

export const ApiContext = createContext("");
export const ApiProvider = ({ children }) => {
    const [szoLista, setszoLista] = useState([]);
    const [temaLista, setTemaLista] = useState([]);
    function getData(endPoint, setter) {
        myAxios.get(endPoint).then(function (response) {
            console.log(response.data)
            setter(response.data)
        }).catch(function (error) {
            console.log(error)
        }).finally();
    }

useEffect(()=>{
    getData('/szavak', setszoLista)
    getData('/tema', setTemaLista)
   
   
},[]);

return <ApiContext.Provider value={{temaLista, szoLista}}>{children}</ApiContext.Provider>
}
