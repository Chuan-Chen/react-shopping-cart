import { useEffect, useState } from "react"
import styled from "styled-components";
import React from "react";

const Card = styled.div`
    height: 300px;
    width: 300px;
    background-color: lightblue;
`

const CardButtons = styled.div`
    display: flex;
    user-select: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 50px;
    width: 50px;
    background-color: pink;
    border-color: black;
    &:hover{
        background-color: grey;
    }
`

export default function ItemCard(props){

    const [cost, setCost] = useState(0);
    const [ItemCount, setItemCount] = useState(0);

    function ClickHandler(sign){
        setItemCount(ItemCount + (sign === "add" ? 1 : -1));
        console.log(ItemCount)
    }
    
    useEffect(()=>{
        console.log(ItemCount)
    },[])

    return (
        <div>
            <Card>
                <CardButtons onClick={()=>{ClickHandler("add")}}>+</CardButtons>
                <CardButtons onClick={()=>{ClickHandler("sub")}}>-</CardButtons>
            </Card>
        </div>
    )
}