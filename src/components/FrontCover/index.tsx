import { render } from "@testing-library/react";
import {FrontCover  } from "./style";
export function Front(){
    return(
        <FrontCover>
        <div className="Text">
            <div className="subtitle">
                 <h6>Marcos Paulo Machado Azevedo</h6>
            </div>
            <div className="titleFront">
                <h1>Desenvolvedor <span className="violet"> Web </span></h1>
                <h1><span className="violet">Full</span> Stack</h1>
            </div>
            <div className="btn">
                <button>Veja Mais</button>
            </div>
        </div>
        <div className="img">
        </div>
    </FrontCover>
    );
}