import styled from "styled-components"
import React, { useState } from "react"

const MenuExtended = styled.div`
    display: ${props => props.display};
    height: 100%;
    width: 100%;

`


export default function MenuExtend(props){
    
    return (
        <MenuExtended display = {props.display}>
            <li> About </li>
            <li> Home </li>
            <li> Contact </li>
        </MenuExtended>
    )
}