import Menu from "./component/Menu/Menu.js";
import React, { useEffect, useState } from "react";
import styled from "styled-components"
import Footer from "./Footer"
import ShoppingCart from "./component/ShoppingCart/ShoppingCart.js";
import ItemCard from "./component/ItemCard/ItemCard.js";

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
        fetchData()
        
    }, []); 

    const fetchData = ()=>{
        fetch(url).then((res) => {
            res.json().then(
            result => {
                setDataLoaded(true);
                setDataError(null);
                setData(result);
                console.log(result)
            }, 
            error => {
                setDataLoaded(false);
                setDataError(error);
            })
        })
    }


    //https://fakeapi.platzi.com/en/rest/products

    return (
        <Main>
            <Menu></Menu>
            <ShoppingCart></ShoppingCart>
            <ItemCard data = {data} itemNo = {0} dataLoaded = {dataLoaded} dataError = {dataError}></ItemCard>
            <ItemCard data = {data} itemNo = {1} dataLoaded = {dataLoaded} dataError = {dataError}></ItemCard>
            <Footer></Footer>
        </Main>
    )
}