import Menu from "./component/Menu/Menu.js";
import React, { useEffect, useState } from "react";
import styled from "styled-components"
import Footer from "./Footer"
import ShoppingCart from "./component/ShoppingCart/ShoppingCart.js";
import ItemCard from "./component/ItemCard/ItemCard.js";
import Nav from "./component/NavBar/Nav.js"
import MainPage from "./component/Pages/MainPage.js";


const url = 'https://api.escuelajs.co/api/v1/products';


const Main = styled.div`
    display: flex;
    gap: 15px;
    height: 100%;
`;
/**
 * 
 * use itemsapi
 * 
 * https://github.com/itemsapi/itemsjs
 */


export default function App(){

    const [dataLoaded, setDataLoaded] = useState(false);
    const [dataError, setDataError] = useState(null);
    const [data, setData] = useState([]);


    useEffect(() => {
        fetchData();
    }, []); 

    const fetchData = ()=>{
        fetch(url).then((res) => {
            res.json().then(
            result => {
                setData(result);
                setDataLoaded(true);
                setDataError(null);
                console.log(result)
            }, 
            error => {
                setDataLoaded(false);
                setDataError(error);
            })
        })
    }
    /**
     * <ShoppingCart></ShoppingCart>
                <ItemCard data = {data} itemNo = {Math.floor(Math.random() * 100)}></ItemCard>
                <ItemCard data = {data} itemNo = {Math.floor(Math.random() * 100)}></ItemCard>
                
     */

    //https://fakeapi.platzi.com/en/rest/products
    if(dataError){
        return <div>Error: {dataError}</div>
    }else if(!dataLoaded){
        return <div>Loading Data...</div>
    }else {
        return (
            <Main>
                <MainPage></MainPage>
                <Footer></Footer>
            </Main>
        )
    }
}