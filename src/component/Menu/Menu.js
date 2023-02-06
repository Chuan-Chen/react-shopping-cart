import React, {useState} from 'react';
import styled from 'styled-components';
import MenuExtend from './MenuExtend';

const MenuStyle = styled.div`
    
    height: ${props => props.height};
    width: ${props => props.width};
    background-color:grey;
    cursor: pointer;
    &:hover{
        background-color: lightblue;
    }
`;



export default function Menu(){

    const [height, setHeight] = useState(3)
    const [width, setWidth] = useState(3)
    const [display, setDisplay] = useState('none')



    function clickHandler(){
        height === 100 ? setHeight(3) : setHeight(100)
        width === 3 ? setWidth(20) : setWidth(3)
        display === 'none' ? setDisplay('block') : setDisplay('none')
    }

    return (
        <MenuStyle height = {height !== 100 ? height + "rem" : height + "vh"} width={width + "rem"} onClick={clickHandler}>
            <MenuExtend display = {display}></MenuExtend>
        </MenuStyle>
    );
}