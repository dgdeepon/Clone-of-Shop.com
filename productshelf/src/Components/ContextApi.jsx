import axios from "axios";
import { createContext,useEffect,useState } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Auth=createContext();



export default function ContextApi({children}){
    const [condition,setConditon]=useState('');
    const [loginStatus,setLogin]=useState(false);
    const navi=useNavigate();


    function addItem(val){

        axios.get(`https://63fb0ed22027a45d8d5f615b.mockapi.io/userData`)
        .then((res)=>{
            res.data.forEach((el,i)=>{
                if(el.id===localStorage.getItem('token')){
                    axios({
                        method:'patch',
                        url:`https://63fb0ed22027a45d8d5f615b.mockapi.io/userData?id=${localStorage.getItem('token')}`,
                        data:{
                            items:[...el.items,val]
                        }
                    }).then((res)=>{
                    console.log(res);
                 })
                }
            })
        }).catch((err)=>{
            console.log(err);
        })
    }

    function add(val){
        setConditon(val);
        navi('/');
    }

    useEffect(()=>{

    },[condition]);

    return <Auth.Provider value={{condition,loginStatus,setLogin,setConditon,add,addItem}}>{children}</Auth.Provider>
}