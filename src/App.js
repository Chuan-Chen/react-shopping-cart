import Menu from "./component/Menu/Menu.js";
import React from "react";
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

    function Items(props){
        
    }
    

    return (
        <Main>
            <Menu></Menu>
            <ShoppingCart></ShoppingCart>
            <ItemCard addCount = {Items}></ItemCard>
            <Footer></Footer>
        </Main>
    )
}