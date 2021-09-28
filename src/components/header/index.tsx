import { render } from "@testing-library/react";
import {GlobalStyle,  Header  } from "./styled";
export function MyHeader(){
    return(
        <div className="App">
            <GlobalStyle />
            <Header>
                <div className="title">
                <h2 >Logo</h2>  
                </div>
                <div className="menu">
                <h3 >Menu</h3>    
                </div > 
            </Header>
        </div>
    );
}