import { Box, Checkbox, Flex, Grid, GridItem, Select, Spinner } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Product from '../Components/Product';
import { useContext } from "react";
import { Auth } from "../Components/ContextApi";


export default function ProductsPage(){

    const[data,setData]=useState([]);
    const [loading,setLoading]=useState(false);
    const {parameter}=useContext(Auth);


    // FetchNow
    function FetchNow(){
        setLoading(true);
        axios.get(`https://63f1198c5b7cf4107e2d155f.mockapi.io/productsDetails?type=${parameter}`)
        .then((res)=>{
            if(parameter==='men'){
                let new_data=res.data.filter((el,ind)=>{
                    if(el.type==='men'){
                        return true;
                    }
                })
                setData(new_data);
            }else{
                setData(res.data);
            }
            // console.log(new_data);
        }).catch((err)=>{
            console.log(err);
        }).finally(()=>{
            setLoading(false);
        })
    }


    useEffect(()=>{
        FetchNow();
    },[])


    return <Grid templateColumns={{base:'1fr',md:'1fr',lg:'15% 1fr'}} pt='200px'>
        <GridItem >
        <Select>
            <option>Sort by Price</option>
            <option>Low to High</option>
            <option>High to Low</option>
        </Select>
        <Flex flexDirection={'column'}>
        <label>Categories</label>
        <Checkbox>T-shirts</Checkbox>
        <Checkbox>Shirts</Checkbox>
        <Checkbox>Jeans</Checkbox>
        <Checkbox>Jackets</Checkbox>
        </Flex>
        <Select>
            <option>Categories</option>
            <option>T-shirts</option>
            <option>Shirts</option>
            <option>Jeans</option>
            <option>Jackets</option>
        </Select>
        </GridItem>
        <Grid templateColumns={{base:'repeat(1,1fr)',md:'repeat(2,45%)',lg:'repeat(2,45%)',xl:'repeat(3,30%)'}}>
        {loading===false? data?.map((el,i)=>(
          <Product name={el.name} image={el.img} price={el.price} store={el.store} rating={Math.random()*5+1} numReviews={(Math.random()*120).toFixed(0)} id={el.id}/>
        )): <Spinner/>}
        </Grid>
    </Grid>
}