import styled from 'styled-components';


export const FrontCover = styled.div`
    display:flex;
    max-width:80%;
    margin:auto;
    @media(max-width: 800px) {
        flex-direction: column-reverse;
        text-align:center;
        max-width:90%;
      }
    .Text{
        width: 60%; 
        padding: 150px 0px 0px 0px;
        color: var(--black);
        opacity: 0.8;
        border-bottom: 3px solid var(--violet);
        @media(max-width: 800px) {
            width: 100%; 
            padding: 10px 0px 10px 0px;
            text-align:center;
          }
          
       
        .titleFront{
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-size: 32px;
            @media(max-width: 800px) {
                font-size: 14px;
                color:white;
            }
            @media(max-width: 500px) {                
                color: black;
            }
        }
        .subtitle{
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            @media(max-width: 800px) {
                color:white;
            }
            @media(max-width: 500px) {                
                color: black;
            }
        }
        .violet{
            color: var(--violet);
            @media(max-width: 800px) {
                color:white;
            }
            @media(max-width: 500px) {                
                color: var(--violet);
            }
            

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
        @media(max-width: 800px) {
            width: 100%; 
          }        

    }
    .myphoto{
        width:70%;
        @media(max-width: 800px) {
            width: 100%; 
          }     
    }
`;
