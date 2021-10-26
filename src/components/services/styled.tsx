import styled from "styled-components";

export const ContainerServices = styled.div`
    display: flex;
    max-width: 80%;
    margin: auto;
    flex-direction: row;
    margin-top: 150px;
    box-sizing: border-box;
`
export const Items = styled.div`
    width: 45%;
    height: 526px;
    background-color:red; 
    margin-left: 30px;
    margin-bottom: 100px;
    border-radius: 26px;
    padding: 50px;
    cursor: pointer;
    transition: 0.5s;
    opacity:1;
    &:hover{
        opacity: 0.6;
    }
    
    
`