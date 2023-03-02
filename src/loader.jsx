import React from "react";
function Loader() {
    return (
        <div className="wait_div bg-sky-400 h-full w-full flex items-center">
            <div className="rounded-full w-20 h-20 border-8 border-b-blue-400 animate-spin m-auto"></div>
        </div>
    )
}
export default Loader;