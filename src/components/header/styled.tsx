import styled, { createGlobalStyle } from 'styled-components';
import { GlobalStyleComponent } from 'styled-components';

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
    width: 100%;
    background-color: transparent;
    padding: 20px 150px 40px 150px;
    color: var(--black)
`;