import Menu from "./component/Menu/Menu.js";
import React from "react";
import styled from "styled-components"

const Main = styled.div`
    height: 100%;

`;

export default function App(){
    return (
    <Main>
        <Menu></Menu>
    </Main>
    )
}