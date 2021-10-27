import {GlobalStyle,  Header, Logo, MenuIcon   } from "./styled";
export function MyHeader(){
    return(
        <div className="App">
            <GlobalStyle />
            <Header>
                <Logo>
                  <h2 >Logo</h2>  
                </Logo>
                <MenuIcon>
                 <h3 >Menu</h3>    
                </MenuIcon>
            </Header>
        </div>
    );
}