import React from "react";
import { FaFacebook, FaSearch, FaAlignJustify } from "react-icons/fa";
import "./style.css";

export function Header(){
    return(
        <div className="header">
            <div className="headerLeft">
                <div className="logo-fb">
                    <FaFacebook/>
                </div>
                <div className="search-fb">
                    <FaSearch/>
                </div>
                <div className="menu-fb">
                    <FaAlignJustify />
                </div>
            </div>
            <div className="headerRight">
                <div className="plusBtn">
                    +
                </div>
            </div>
        </div>
    );
}