
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";


const Items = styled.div`
    position: absolute;
    right: 0px;
    bottom: 0px;
`

export default function ItemCouter(){
    return (
        <Items>
            {useSelector((state) => state.price.count)}
        </Items>
    )
}