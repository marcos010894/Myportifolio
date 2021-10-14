import { render } from "@testing-library/react";
import {FrontCover  } from "./style";
import foto from '../../assets/img/foto.svg';
export function Front(){
    return(
    <FrontCover>
        <div className="Text">
            <div className="subtitle">
                 <h4>Marcos Paulo Machado Azevedo</h4>
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
            <img className="myphoto" src={foto} />
        </div>
    </FrontCover>
    );
}