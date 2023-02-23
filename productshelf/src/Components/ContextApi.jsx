import { createContext,useState } from "react";

export const Auth=createContext();



export default function ContextApi({children}){
    const [condition,setConditon]=useState('');


    return <Auth.Provider value={{condition}}>{children}</Auth.Provider>
}