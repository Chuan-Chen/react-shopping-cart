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
    height: 100%;
`;
/**
 * 
 * use itemsapi
 * 
 * https://github.com/itemsapi/itemsjs
 */


export default function App(){

    const [ItemCount, setItemCount] = useState(0);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [dataError, setDataError] = useState(null);
    const [data, setData] = useState([]);


    function changeItemCount(value){
        //might need to double check this logic
        ItemCount === 0 && value === -1 ? setItemCount(0) : setItemCount(ItemCount + value);
        console.log(ItemCount);
    }

    useEffect(() => {
       console.log( getProducts() );
    }, []); 

    async function getProducts(){
        const result = loadData();
        result.then(
        (res) => {
            setData(res);
            setDataLoaded(true);
            setDataError(null);
        }, 
        (err) => {
            setData([]);
            setDataLoaded(false);
            setDataError(err);
        })
        return result;
    }

    //https://fakeapi.platzi.com/en/rest/products

    return (
        <Main>
            <Menu></Menu>
            <ShoppingCart></ShoppingCart>
            <ItemCard updateItems = {changeItemCount}></ItemCard>
            <Carousel data = {data} dataLoaded = {dataLoaded} dataError = {dataError} itemNo = {0}></Carousel>
            <Carousel data = {data} dataLoaded = {dataLoaded} dataError = {dataError} itemNo = {2}></Carousel>
            <Footer></Footer>
        </Main>
    )
}