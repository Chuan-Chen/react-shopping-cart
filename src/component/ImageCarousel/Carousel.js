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


export default function Carousel({data}){
    const createImages = data.map((img, index) => {
            return <Img key = {index} source = {img}></Img>
    })

    return(
        <CarouselWrapper>
            {createImages}
        </CarouselWrapper>
    )


}