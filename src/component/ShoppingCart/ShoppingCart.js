import { useState } from "react";
import React from "react";
import styled from "styled-components";
import ItemCouter from "./ItemCounter";

const Cart = styled.div`
    user-select: none;
    display: flex;
    align-items: flex-end;
    justify-content: end;
    height: 3rem;
    width: 3rem;
    background-color: red;
`

export default function ShoppingCart(Props){
    const [Items, setItems] = useState(0);
    
    return (
        <Cart>
            <ItemCouter Items = {Items}></ItemCouter>
        </Cart>
    )
}