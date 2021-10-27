import styled from "styled-components";

export const ContainerServices = styled.div`
    display: flex;
    max-width: 80%;
    margin: auto;
    flex-wrap: wrap;
    margin-top: 50px;
    box-sizing: border-box;
`
export const Items = styled.div`
    width: 45%;
    height: 526px;
    background-color:black;
    margin-left: 5%;
    margin-bottom: 100px;
    border-radius: 26px;
    padding: 15px 50px;
    transition: 0.5s;
    text-align: left;
    opacity:1;
    .divButtontext{
        text-align: center;
        display: none;
        margin-top: 50%;
        transition: 10s;
    }
    &:hover{
        opacity: 0.6;
        .divButtontext{
            display: flex;
        }
    }
    @media(max-width: 800px) {
        width: 100%;
        margin-left: 0px;
        margin-bottom: 50px;
        display: block;
     }
`

export const InfosService = styled.div`
    margin-top: 25px;
`
export const Buttoninfos = styled.button`
    width: 100%;
    height: 50px;
    cursor: pointer;
    color: white;
    background-color: var(--violet);
    position: relative;

`