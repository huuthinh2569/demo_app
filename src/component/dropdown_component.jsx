import React from "react";
function DropDown() {
    return (
        <div className="border-black border-4 w-64 h-28 bg-yellow-400 absolute top-9per opacity-0 invisible group-hover:opacity-100 group-hover:visible right-1">
            <div className="w-full h-1/3 flex items-center hover:bg-slate-100">
                <p className=" text-xs m-auto">Update Profile</p>
            </div>
            <div className="w-full h-1/3 flex items-center hover:bg-slate-100">
                <p className=" text-xs m-auto">Change Language</p>
            </div>
            <div className="w-full h-1/3 flex items-center hover:bg-slate-100">
                <p className=" text-xs m-auto">Logout</p>
            </div>
        </div>
    )
}
export default DropDown;