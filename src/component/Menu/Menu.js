import React, {useState} from 'react';
import styled from 'styled-components';
import MenuExtend from './MenuExtend';

const MenuStyle = styled.div`
    position: absolute;
    z-index: 2;
    height: ${props => props.height};
    width: ${props => props.width};
    background-color:grey;
    cursor: pointer;
    &:hover{
        background-color: lightblue;
    }
    border-radius: 6px;
`;



export default function Menu(){
    const defaultValue = 3;
    const [height, setHeight] = useState(defaultValue)
    const [width, setWidth] = useState(defaultValue)
    const [display, setDisplay] = useState('none')

    

    function clickHandler(){
        
        height === 100 ? setHeight(defaultValue) : setHeight(100)
        width === defaultValue ? setWidth(20) : setWidth(defaultValue)
        display === 'none' ? setDisplay('contents') : setDisplay('none')
    }

    return (
        <div style={{position: 'relative', height: `${defaultValue}rem`, width:`${defaultValue}rem`}}>
            <MenuStyle height = {height !== 100 ? height + "rem" : height + "vh"} width={width + "rem"} onClick={clickHandler}>
                <MenuExtend display = {display}></MenuExtend>
            </MenuStyle>
        </div>

    );
}