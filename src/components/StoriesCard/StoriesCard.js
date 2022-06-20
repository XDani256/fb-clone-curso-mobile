import React from "react";

import danki from "../../res/danki.jpg";
import "./style.css";

function StoriesCard(){
    return(
        // * o backgroundImage serve para dizer a imagem de fundo(ainda precisa de css)
        <div className="storiesCardSingle">
            <div className='storiesCard' style={{backgroundImage: `url(${danki})`}}>
            <p>Dani P.</p>
            </div>
        </div>
    );
}

export default StoriesCard;