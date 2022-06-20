import React from "react";

import { AiFillVideoCamera } from "react-icons/ai";
import { FaRegSmileBeam, FaPhotoVideo } from "react-icons/fa";
import profile from "../../res/profile.jpg";
import "./style.css";

function FeedForm() {
    return(
        <div className='newPost'>
            <div className='feedForm'>
                <img src={profile} alt=""/>
                <input type="text" placeholder="no que você está pensando?"/>
            </div>
            <div className="feedContent">
                <div className="iconSingle">
                    <AiFillVideoCamera />
                    <span>Vídeo ao vivo</span>
                </div>
                <div className="iconSingle">
                    <FaPhotoVideo />
                    <span>Foto/vídeo</span>
                </div>
                <div className="iconSingle">
                    <FaRegSmileBeam />
                    <span>Sentimento/atividade</span>
                </div>
            </div>
      </div>
    )
}

export default FeedForm;