import axios from "axios";
import { createContext,useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";

export const Auth=createContext();



export default function ContextApi({children}){
    const [condition,setConditon]=useState('');
    const [loginStatus,setLogin]=useState(false);
    const navi=useNavigate();
    const [parameter,setParameter]=useState('');


    function addItem(val){
        let data=JSON.parse(localStorage.getItem('cartData')) || [];
        data.push(val);
        localStorage.setItem('cartData',JSON.stringify(data));
        console.log(data);
    }

    function add(val){
        setConditon(val);
        navi('/');
    }

    useEffect(()=>{

    },[condition]);

    return <Auth.Provider value={{condition,loginStatus,setLogin,setConditon,add,addItem,parameter,setParameter}}>{children}</Auth.Provider>
}