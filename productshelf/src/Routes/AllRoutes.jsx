import { Route,Routes } from "react-router-dom";
import Home from "../Pages/Home";
import ProductsPage from '../Pages/ProductsPage';

export default function AllRoutes(){


    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<ProductsPage/>}/>
        </Routes>
    )
}