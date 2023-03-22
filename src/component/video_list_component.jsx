import React from "react";
import VideoItem from "./video_item_component";
export default function ListVideo(props) {
    return (
        <div className="right h-11/12 flex flex-col flex-auto overflow-auto hover:bg-red-500">
            <VideoItem url={props.url} title={props.title} info={props.info}></VideoItem>
        </div>
    )
}