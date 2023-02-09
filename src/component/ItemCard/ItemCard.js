import { useEffect, useState } from "react"
import styled from "styled-components";
import React from "react";
import { useDispatch } from "react-redux";
import { setAmount, setCount } from "../../app/priceSlice";

const Card = styled.div`
    position: relative;
    height: 300px;
    width: 300px;
    background-color: #8EA4D2;
`

const CardButtons = styled.div`
    position: absolute;
    left: ${props => props.left ? props.left: 'none'};
    right: ${props => props.right};
    bottom: 0px; 
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

export default function ItemCard({Price, ItemCount, Title}){

    const dispatch = useDispatch();

    return (
        <div>
            <Card>
                <CardButtons left = {0} onClick={()=>{dispatch(setAmount(10)); dispatch(setCount(+1))}}>+</CardButtons>
                <CardButtons right = {0} onClick={()=>{dispatch(setAmount(-10)); dispatch(setCount(-1))}}>-</CardButtons>
            </Card>
        </div>
    )
}