import Menu from "./component/Menu/Menu.js";
import React from "react";
import styled from "styled-components"
import Footer from "./Footer"
import { createGlobalStyle } from 'styled-components';
const Main = styled.div`
    height: 100%;

`;

const gStyle = createGlobalStyle`
  body, html, #root{
    height: 100%;
    margin: 0px;
  }
`;

export default function App(){
    return (
    <Main>
        <React.Fragment>

        </React.Fragment>
        <Menu></Menu>
        <Footer></Footer>
    </Main>
    )
}