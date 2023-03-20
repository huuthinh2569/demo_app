import React from "react";
function VideoItem(props) {
    return (
        <div className="w-full flex flex-row my-3 mx-auto flex-1">
            <img id={"id" + props.id} className="w-28 h-28" src={props.url}></img>
            <div className="w-full">
                <p>{props.title}</p>
                <p>{props.info}</p>
            </div>
        </div>
    )
}
export default VideoItem;