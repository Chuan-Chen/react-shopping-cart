import { useState } from "react";
import styled from "styled-components"


const MainPageStyle = styled.div`
    height: 100%;
    width: 100%;
    background-image: url(), url();
    background-position: center;
    background-repeat: no-repeat;
    background-position: ${props => props.depth};
    `

export default function MainPage(){
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [depth1, setDepth1] = useState();
    const [depth2, setDepth2] = useState();


    //credit goes to https://codepen.io/oscicen 
    //https://codepen.io/oscicen/pen/zyJeJw?editors=1111
    function MouseMove(e){
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
        console.log(x);
        setDepth1(_depth1);
        setDepth2(_depth2);
    } 

    return (
        <MainPageStyle depth = {`${depth1} , ${depth2}`} onMouseMove={(e)=>{MouseMove(e)}}>
        </MainPageStyle>
        
    )
}