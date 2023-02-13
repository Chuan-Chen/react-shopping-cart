import Menu from "./component/Menu/Menu.js";
import React, { useState } from "react";
import styled from "styled-components"
import Footer from "./Footer"
import ShoppingCart from "./component/ShoppingCart/ShoppingCart.js";
import ItemCard from "./component/ItemCard/ItemCard.js";
import Carousel from "./component/ImageCarousel/Carousel.js";

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

    function changeItemCount(value){
        //might need to double check this logic
        ItemCount === 0 && value === -1 ? setItemCount(0) : setItemCount(ItemCount + value);
        console.log(ItemCount);
    }


    //https://fakeapi.platzi.com/en/rest/products

    return (
        <Main>
            <Menu></Menu>
            <ShoppingCart></ShoppingCart>
            <ItemCard updateItems = {changeItemCount}></ItemCard>
            <Carousel images = {[]}></Carousel>
            <Footer></Footer>
        </Main>
    )
}