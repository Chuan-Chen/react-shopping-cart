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

    const [click, setClick] = useState(1)

    return (
        <MenuStyle height={click.toString()} width={click.toString()} onClick={()=>{setClick(!click)}}>
            
        </MenuStyle>
    );
}