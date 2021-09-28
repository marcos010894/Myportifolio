import styled, { createGlobalStyle } from 'styled-components';
import { GlobalStyleComponent } from 'styled-components';
import foto from '../../assets/img/foto.svg'


export const FrontCover = styled.div`
    width: 100%;
    .Text{
        display: inline-block;
        width: 50%;        //background-color: black;
        padding: 150px 0px 60px 150px;
        color: var(--black);
       // border-radius: 0 22px 22px 0;
        opacity: 0.8;
        border-bottom: 3px solid var(--violet);
       
        .titleFront{
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
           
            font-size: 32px;
        }
        .subtitle{
            font-family: Racing Sans One;
            font-size: 25px;
        }
        .violet{
            color: var(--violet);
        }
        .btn{
            margin-top: 55px;

            button{
                width: 180px;
                padding: 10px;
                background-color: var(--violet);
                border-radius: 22px;
                border: 0;
                color: white;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                font-size: 17px;
                cursor: pointer;
                
            }
            button:hover{
                width: 180px;
                padding: 10px;
                background-color: var(--white);
                border-radius: 22px;
                border: 1px solid var(--violet);
                color: var(--violet);
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                font-size: 17px;
            }
        }
    }
    .img{
        width: 500px;
        height: 650px;
        display: inline-block;
        float: right;
        padding: 0px 200px 0px 90px;
        background-image: url(${foto});
        background-size: cover;       
    }
`;
