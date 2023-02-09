
import React from "react";
import styled from "styled-components";


const Items = styled.div`
    position: absolute;
    right: 0px;
    bottom: 0px;
`

export default function ItemCouter(props){
    return (
        <Items>
            {props.Items ? props.Items : ' '}
        </Items>
    )
}