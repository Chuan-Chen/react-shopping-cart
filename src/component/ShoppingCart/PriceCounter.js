import styled from "styled-components"

const Price = styled.div`
    position: absolute;
    left: 0px;
    top: 0px;

`

export default function PriceCounter(props){

    return (
    <Price>
        {props.Price ? props.Price : ' '}
    </Price>
    )
}