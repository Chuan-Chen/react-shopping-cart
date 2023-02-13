import { useEffect, useState } from "react"
import styled from "styled-components";


const CarouselWrapper = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
`

const Img = styled.img`
    position: absolute;
    height: 200px;
    width: 200px;
    content: url(${props => props.source});
    data-index: ${props => props.index};
    alt: 'image-${props => props.index}';
    z-Index: ${props => props.zInd};
    object-fit: contain;
`


export default function Carousel({data, dataLoaded, dataError, itemNo}){
    const [images, setImages] = useState([])

    useEffect(()=>{
        if(dataLoaded){
            setImages(data[itemNo].images)
        }
    }, [dataLoaded, data])

    const createImages = images.map((img, index) => {
            return <Img key = {index} source = {img} zInd = {index}></Img>
    })



//<img key = {i} src = {images[i++]} style = {{zIndex: zIndex}} alt = {"placeholder"}></img>
    if(dataError){
        return <div>Error: {dataError}</div>
    }else if(!dataLoaded){
        return <div>loading...</div>
    }else{
        return(
            <CarouselWrapper>
                {createImages}
            </CarouselWrapper>
        )
    }

}