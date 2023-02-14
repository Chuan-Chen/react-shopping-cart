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

export default function ItemCard({data}){
    const [counter, setCounter] = useState(0);
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [randomItemID, setRandomItemID] = useState(randomID());
    const dispatch = useDispatch();

    useEffect(()=>{
        setTitle(data[randomItemID].title);
        setPrice(data[randomItemID].price)
    }, [data, randomItemID])

    function clickHandler(count){
        dispatch(setAmount(data[randomItemID].price * count)); 
        dispatch(setCount(count)); 
        setCounter(counter+count);
    }

    function randomID(){
        return Math.floor(Math.random() * 100);
    }

    return (
        <div>
            <Card>
                <Carousel data = {data[randomItemID].images}></Carousel>
                <div>{counter} {title} ${price} </div>
                <CardButtons left = {0} onClick={()=>{clickHandler(1)}}>+</CardButtons>
                <CardButtons right = {0} onClick={()=>{clickHandler(-1)}}>-</CardButtons>
            </Card>
        </div>
    )
}