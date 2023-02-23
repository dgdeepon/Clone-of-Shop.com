import { Box, Grid, Spinner } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Product from '../Components/Product';


export default function ProductsPage(){
    const[data,setData]=useState([]);
    const [loading,setLoading]=useState(false);


    // FetchNow
    function FetchNow(){
        setLoading(true);
        axios.get(`https://63f1198c5b7cf4107e2d155f.mockapi.io/productsDetails`)
        .then((res)=>{
            setData(res.data);
            console.log(res.data);
        }).catch((err)=>{
            console.log(err);
        }).finally(()=>{
            setLoading(false);
        })
    }


    useEffect(()=>{
        FetchNow();
    },[])


    return <Grid templateColumns={'(30%,70%)'} pt='200px'>
        <Box>

        </Box>
        <Grid templateColumns={'repeat(3,1fr)'}>
        {loading===false? data?.map((el,i)=>{
            return <Product name={el.name} image={el.img} price={el.price} store={el.store} rating={Math.random()*5+1} numReviews={(Math.random()*120).toFixed(0)}/>
        }): <Spinner/>}
        </Grid>
    </Grid>
}