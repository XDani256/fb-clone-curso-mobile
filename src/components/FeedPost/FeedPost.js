import React from "react";
import {useState, useEffect} from 'react';

/* import firebase config */
import { db } from '../../firebase.js';

import profile from "../../res/profile.jpg";
import "./style.css";

function FeedPost(props){
    return(
        <div className="feedPosts">
            <div className="feedPostSingle">
                <div className="feedPostProfile">
                    <img src={profile} />
                    <a href="/">{props.nome}
                        <span>{props.horario}</span>
                    </a>
                </div>
                <div className="feedPost__content">
                    <p>{props.conteudo}</p>
                    <img src={props.img} />
                </div>

            </div>
        </div>
    );
}

export default FeedPost;