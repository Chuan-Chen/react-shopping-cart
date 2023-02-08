import { useEffect, useState } from "react"
import styled from "styled-components";


const Card = styled.div`
    height: 300px;
    width: 100px;
    background-color: lightblue;
`

const CardButtons = styled.div`
    height: 50px;
    width: 50px;
    background-color: pink;
    border-color: black;
`

export default function ItemCard(){

    const [cost, setCost] = useState(0);
    const [ItemCount, setItemCount] = useState(0);

    function ClickHandler(sign){
        setItemCount(ItemCount + (sign === "add" ? 1 : -1));
        console.log(ItemCount)
    }
    
    useEffect(()=>{
        console.log(ItemCount)
    },[])

    return (
        <div>
            <Card>
                <CardButtons onClick={()=>{ClickHandler("add")}}>+</CardButtons>
                <CardButtons onClick={()=>{ClickHandler("sub")}}>-</CardButtons>
            </Card>
        </div>
    )
}