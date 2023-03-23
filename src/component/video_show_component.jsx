import React from "react";
function VideoShow(props) {
    return (
        <div className="left w-3/4 flex flex-col flex-auto">
            <iframe className="w-4/5 h-2/3 bg-black mx-auto mt-2" src={`http://www.youtube.com/embed/${props.id}`}></iframe>
            <div className="w-11/12 h-1 my-3 mx-auto flex-auto mt-3 bg-orange-400">
                <p className="m-2 text-white font-sans w-auto h-44 overflow-hidden">{props.comment}</p>
            </div>
        </div>
    )
}
export default VideoShow;