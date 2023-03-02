import React from "react";
function Btn_p(props) {
    return (
        <button className="text-sm mx-2 h-9 w-36 bg-sky-500 hover:bg-sky-700 text-white rounded-2xl ...">
            {props.type === "password" ?
                "Show Pass" :
                "Hide Pass"}
        </button>
    )
}
export default Btn_p;