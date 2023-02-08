import { useState } from "react";
import styled from "styled-components";
import ItemCouter from "./ItemCounter";

const Cart = styled.div`
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