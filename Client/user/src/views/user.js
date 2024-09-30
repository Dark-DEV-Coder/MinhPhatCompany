import { useState,useEffect } from "react";
import { Routes,Route, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../css/bootstrap.min.css";
import "../css/font-awesome.min.css";
import "../css/nouislider.min.css";
import "../css/slick-theme.css";
import "../css/slick.css";
import "../css/style.css";
import "../css/styleMP.css";
import "./user.scss"
import Header from "./Header/Header";
import Footer from "./InformationBottom/infor";
import Product from "./Main/Product";
import DetailProduct from "./Main/DetailProduct";

const UserPage = () => {  
    return (
        <>
            <Header />
            <Routes>
                <Route path='/*' element={ <Product /> }></Route>
                <Route path='/detail/:MaSP' element={ <DetailProduct /> }></Route>
            </Routes>
            <Footer />
        </>
    )
}

export default UserPage