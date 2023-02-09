import { useState } from "react";
import React from "react";
import styled from "styled-components";
import ItemCouter from "./ItemCounter";
import PriceCounter from "./PriceCounter";
import { useSelector } from "react-redux";

import priceSlice from "../../app/priceSlice";

const Cart = styled.div`
    position: relative;
    user-select: none;
    display: flex;
    height: 3rem;
    width: 3rem;
    background-color: red;
`

export default function ShoppingCart(){
    const Price = useSelector((state) => state.price.value)
    return (
        <Cart>
            <PriceCounter Price = {Price}></PriceCounter>
            <ItemCouter Items = {Price}></ItemCouter>
        </Cart>
    )
}