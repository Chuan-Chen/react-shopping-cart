import styled from "styled-components"

const Testing = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    justify-content: center;
    align-content: center;

`

const Search = styled.input`
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Source+Sans+Pro&display=swap');
    border-style: solid;
    border-radius: 10px;
    border-color: black;
    height: 3rem;
    width: 40rem;
    font-size: 1.2rem;
    font-family: 'Roboto Mono', monospace;
`


export default function TestPage(){


    return (
        <Testing>
            <Search>
               
            </Search>
        </Testing>
    )
}