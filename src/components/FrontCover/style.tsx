import styled from 'styled-components';


export const FrontCover = styled.div`
    display:flex;
    max-width:80%;
    margin:auto;
    margin-bottom: 150px;
    @media(max-width: 1135px) {
        flex-direction: column-reverse;
        text-align:center;
        max-width:90%;
      }
    .Text{
        width: 70%; 
        padding: 150px 0px 0px 0px;
        color: var(--black);
        opacity: 0.8;
        flex: 1;
        border-bottom: 3px solid var(--violet);
        @media(max-width: 1135px) {
            width: 100%; 
            padding: 15px 0px 10px 0px;
            text-align:center;
        }
        .titleFront {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-size: 32px;
            @media(max-width: 1135px) {
                font-size: 14px;
            }
        }
        .subtitle{
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
        .violet{
            color: var(--violet);           

        }
        .btn{
            margin-top: 10px;
            button{
                width: 150px;
                padding: 10px;
                background-color: var(--violet);
                border-radius: 22px;
                border: 0;
                color: white;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
        width: 100vh;
        height: 70vh;
        text-align: right;
        @media(max-width: 1135px) {
            width: 100%; 
          }        

        flex: 1;
    }
    .myphoto{
        width:70%;
        @media(max-width: 1135px) {
            width: 100%; 
          }     
    }
`;
