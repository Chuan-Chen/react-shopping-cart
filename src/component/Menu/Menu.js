import React, {useState} from 'react';
import styled from 'styled-components';

const MenuStyle = styled.div`
    
    height: ${props => props.height ? props.height + 'px': '100vh'};
    width: ${props => props.width + 'px'};
    background-color:blue;
    cursor: pointer;
    &:hover{
        background-color: black;
    }
`;



export default function Menu(){

    const [height, setHeight] = useState(100)
    const [width, setWidth] = useState(100)

    function clickHandler(){
        height === 100 ? setHeight(60) : setHeight(100)
        width === 100 ? setWidth(60) : setWidth(100)
    }

    return (
        <MenuStyle height = {height} width={width} onClick={clickHandler}>
            
        </MenuStyle>
    );
}