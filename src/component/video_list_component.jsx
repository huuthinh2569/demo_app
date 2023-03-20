import React from "react";
import cloud from "../assets/cloud2.png";
import VideoItem from "./video_item_component";
function ListVideo(props) {
    return (
        <div className="right h-11/12 flex flex-col flex-auto overflow-auto">
            <VideoItem url={cloud} title="test1" info="text1"></VideoItem>
        </div>
    )
}
export default ListVideo;