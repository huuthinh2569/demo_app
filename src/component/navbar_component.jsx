import React from "react";
import { Link } from "react-router-dom";
import InfoUser from "./info_user_component";
import Logo from "./logo_component";
function Navbar() {
    return (
        <div className="w-full h-10per bg-yellow-400 flex flex-row">
            <div>
                <Logo className="flex-1"></Logo>
            </div>
            <div className="flex-1 h-full mx-5  flex flex-col items-center">
                <Link className="m-auto" to={"/"}>HomePage</Link>
            </div>
            <div className="flex-1 h-full mx-5  flex flex-col items-center">
                <Link className="m-auto" to={"/"}>Video</Link>
            </div>
            <div className="flex-1 h-full mx-5  flex flex-col items-center">
                <Link className="m-auto" to={"/"}>Info</Link>
            </div>
            <div className="flex-1 h-full mx-5  flex flex-col items-center">
                <Link className="m-auto" to={"/"}>Setting</Link>
            </div>
            <div className="flex-1 h-full mx-5  flex flex-col items-center">
                <InfoUser></InfoUser>
            </div>
        </div>
    )
}
export default Navbar;