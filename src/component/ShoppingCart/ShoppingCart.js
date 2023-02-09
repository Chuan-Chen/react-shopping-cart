import { useState } from "react";
import React from "react";
import styled from "styled-components";
import ItemCouter from "./ItemCounter";
import PriceCounter from "./PriceCounter";

const Cart = styled.div`
    position: relative;
    user-select: none;
    display: flex;
    height: 3rem;
    width: 3rem;
    background-color: red;
`

export default function ShoppingCart(props){
    
    return (
        <Cart>
            <PriceCounter Price = {props.PriceCount}></PriceCounter>
            <ItemCouter Items = {props.ItemCount}></ItemCouter>
        </Cart>
    )
}