import Menu from "./component/Menu/Menu.js";
import React, { useEffect, useState } from "react";
import styled from "styled-components"
import Footer from "./Footer"
import ShoppingCart from "./component/ShoppingCart/ShoppingCart.js";
import ItemCard from "./component/ItemCard/ItemCard.js";
import Carousel from "./component/ImageCarousel/Carousel.js";
import loadData from "./loadData.js";


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
        const getData = async () => { const tempdata = await loadData(); setData(tempdata) }
        console.log(data)
    }, []); 



    //https://fakeapi.platzi.com/en/rest/products

    return (
        <Main>
            <Menu></Menu>
            <ShoppingCart></ShoppingCart>
            <ItemCard data = {data} itemNo = {0} dataLoaded = {dataLoaded} dataError = {dataError}></ItemCard>
            <ItemCard data = {data} itemNo = {1}></ItemCard>
            <Footer></Footer>
        </Main>
    )
}