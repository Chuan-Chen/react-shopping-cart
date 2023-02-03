import React from "react";
import { StyledComponent } from "styled-components";
import "./Footer.css";

const FooterStyle = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Mono&display=swap');

    font-family: 'Noto Sans Mono', monospace;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    color: white;
    display: flex;
    gap: 15px;
    justify-content: center;
    align-items: center;
    width: 100vw;
    background-color: #1e1e1e;
    padding: .8rem;
    z-index: 5;
`;

const FooterA = styled.a`
    text-decoration: none;
    color: white;
    text-shadow: 0 0 10px white;
    &:hover {
        
    }
`;

export default class Footer extends React.Component{
    render(){
        return(
            <div className = "footer">
                <div>
                    Copyright © 2022 <a href = "https://github.com/Chuan-Chen">Whykari</a>
                </div>
            </div>
        )
    }
}