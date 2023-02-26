import { Route,Routes } from "react-router-dom";
import Home from "../Pages/Home";
import ProductsPage from '../Pages/ProductsPage';
import SingleProduct from '../Components/SingleProduct';
import SignInPage from "../Pages/SignInPage";
import CreateAccountPage from "../Pages/CreateAccountPage";

export default function AllRoutes(){


    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<ProductsPage/>}/>
            <Route path="/products/:pId" element={<SingleProduct/>}/>
            <Route path="/signin" element={<SignInPage/>}/>
            <Route path="/createAccount" element={<CreateAccountPage/>}/>
        </Routes>
    )
}