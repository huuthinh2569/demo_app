import React from "react";
import VideoItem from "./video_item_component";
export default function ListVideo(props) {
    const videolist = props.videolist[0];
    console.log(videolist);
    return (
        <div className="flex flex-col overflow-y-auto overflow-x-hidden">
            {
                videolist.map(x =>
                    <div>
                        <VideoItem key={x.id} url={x.snippet.thumbnails.high.url} title={x.snippet.localized.title} info={x.snippet.publishedAt}></VideoItem>
                    </div>
                )
            }
        </div>
    )
}