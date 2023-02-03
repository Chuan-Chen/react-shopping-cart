import React, {useState} from 'react';
import styled from 'styled-components';

const MenuStyle = styled.div`
    height: ${props => props.height ? '64px' : '100px'};
    width: ${props => props.width ? '64px' : '100px'};
    background-color:blue;
    cursor: pointer;
    &:hover{
        background-color: black;
    }
`;



export default function Menu(){

    const [click, setClick] = useState("true")

    return (
        <MenuStyle height={click} width={click} onClick={()=>{click ? setClick("true") : setClick("false")}}>
            
        </MenuStyle>
    );
}