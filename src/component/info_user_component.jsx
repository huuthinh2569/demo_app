import React from "react";
import { Link } from "react-router-dom";
import icon_user from "../assets/add_user.png";
import icon_dropdown from "../assets/caret.png";
import DropDown from "../component/dropdown_component";
function InfoUser() {
    return (
        <div className="w-52 h-full flex flex-row items-center">
            <div className="rounded-full flex-1">
                <Link to={"/login"}><img className="w-10 h-10 m-auto" src={icon_user}></img></Link>
            </div>
            <div className="h-16 w-8 flex items-center flex-1 group">
                <img className="w-10 h-10 m-auto" src={icon_dropdown}></img>
                <DropDown></DropDown>
            </div>
        </div>
    )
}
export default InfoUser;