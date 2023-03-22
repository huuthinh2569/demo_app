import React from "react";
function VideoItem(props) {
    return (
        <div className="right w-full h-11/12 flex flex-row items-center flex-auto hover:bg-cyan-400">
            <img className="w-52 h-28" src={props.url}></img>
            <div className="w-full flex flex-col h-full p-2">
                <p className="text-ellipsis whitespace-nowrap w-60 overflow-hidden">{props.title}</p>
                <p className="text-ellipsis whitespace-nowrap w-60 overflow-hidden">{props.info}</p>
            </div>
        </div>
    )
}
export default VideoItem;