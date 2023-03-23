import React from "react";
function VideoItem(props) {
    return (
        <div onClick={props.onclick} className="right h-11/12 flex flex-row items-center flex-auto hover:bg-yellow-400 border-4 border-yellow-400 m-2">
            <img className="w-40" src={props.url}></img>
            <div className="w-full flex flex-col h-full p-2">
                <p className="font-sans text-ellipsis whitespace-nowrap w-40 overflow-hidden">{props.title}</p>
                <p className="font-sans text-ellipsis whitespace-nowrap w-40 overflow-hidden">{props.info}</p>
            </div>
        </div>
    )
}
export default VideoItem;