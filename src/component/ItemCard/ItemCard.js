import { useEffect, useState } from "react"
import styled from "styled-components";
import React from "react";
import { useDispatch } from "react-redux";
import { setAmount, setCount } from "../../app/priceSlice";
import Carousel from "../ImageCarousel/Carousel";

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

export default function ItemCard({data, dataLoaded, dataError, itemNo}){

    const dispatch = useDispatch();

    return (
        <div>
            <Card>
                <Carousel data = {data} dataLoaded = {dataLoaded} dataError = {dataError} itemNo = {itemNo}></Carousel>
                <CardButtons left = {0} onClick={()=>{dispatch(setAmount(10)); dispatch(setCount(+1))}}>+</CardButtons>
                <CardButtons right = {0} onClick={()=>{dispatch(setAmount(-10)); dispatch(setCount(-1))}}>-</CardButtons>
            </Card>
        </div>
    )
}