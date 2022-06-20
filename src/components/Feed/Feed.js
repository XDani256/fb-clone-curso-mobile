import React from "react";

/* import libraries */
import {useState, useEffect} from 'react';

/* import firebase config */

import profile from "../../res/profile.jpg";
import "./style.css";

function Feed(props){

    return(
        <div className="feed">
            <div className="feedPostSingle">
                <div className="feedPostProfile">
                    <img src={profile}/>
                    <span>
                        <a href="/">{props.name}</a>
                        <p>{props.hour}</p>
                    </span>
                </div>
                <div className="feedPostContent">
                    <p>{props.content}</p>
                    <img src="https://img.ifunny.co/images/215a2b4deb5df798a68d2f1375e09a31817f4b334b8232fb2f6096224d243be7_1.webp"/>
                </div>
            </div>
        </div>
    );
}

export default Feed;