import { useState } from "react";
import styled from "styled-components"

const MainPageStyle = styled.div`
    height: 500px;
    width: 500px;
`




export default function MainPage(){
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);


    function MouseMove(e){
        setX(e.clientX);
        setY(e.clientY);
    } 

    return (
        <MainPageStyle onMouseMove={(e)=>{MouseMove(e)}}>
            x:{x} y:{y}
        </MainPageStyle>
        
    )
}