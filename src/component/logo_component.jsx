import React from "react";
import image from "../assets/logo_youtube.png";
function Logo() {
    return (
        <div className="w-16 h-full mx-5 flex flex-col">
            <img className="m-auto" src={image}></img>
        </div>
    )
}
export default Logo;