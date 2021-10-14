import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --white: #ffffff;
        --black: #000;
        --violet: #6317C2;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing:border-box;

    }
    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }
`

export const Header = styled.header`
    display:flex;
    width: 100%;
    background-color: transparent;
    padding: 20px 0px 10px 10px;
    color: var(--black);
    border-bottom:1px solid black;
    margin-bottom: 15px
`;

export const Logo = styled.div`

`
export const MenuIcon = styled.div`
    padding-left: 80%;
    text-align: right;
    @media(max-width: 800px) {
        padding-left: 70%;
      }     
`