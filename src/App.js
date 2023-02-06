import Menu from "./component/Menu/Menu.js";
import React from "react";
import styled from "styled-components"
import Footer from "./Footer"

const Main = styled.div`
    display: flex;
    height: 100%;
`;

export default function App(){
    return (
        <Main>
            <Menu></Menu>
            hi
            <Footer></Footer>
        </Main>
    )
}