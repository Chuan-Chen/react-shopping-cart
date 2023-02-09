import Menu from "./component/Menu/Menu.js";
import React, { useState } from "react";
import styled from "styled-components"
import Footer from "./Footer"
import ShoppingCart from "./component/ShoppingCart/ShoppingCart.js";
import ItemCard from "./component/ItemCard/ItemCard.js";

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

    return (
        <Main>
            <Menu></Menu>
            <ShoppingCart ItemCount = {ItemCount} PriceCount = {0}></ShoppingCart>
            <ItemCard updateItems = {changeItemCount}></ItemCard>
            <Footer></Footer>
        </Main>
    )
}