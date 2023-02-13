import { useSelector } from "react-redux"
import styled from "styled-components"
import React from "react"

const Price = styled.div`
    position: absolute;
    left: 0px;
    top: 0px;

`

export default function PriceCounter(){

    return (
    <Price>
        ${useSelector((state) => state.price.value)}
    </Price>
    )
}