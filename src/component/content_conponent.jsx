import React, { useEffect, useState } from "react";
import request from "../utils/request";
import VideoItem from "./video_item_component";
import VideoShow from "./video_show_component";
function Content() {
    const [videoshow, setvideoshow] = useState('');
    const [videolist, setvideolist] = useState([]);
    function callAPIData() {
        request.get('videos')
            .then(function (res) {
                setvideoshow(res.data.items[0].id);
                setvideolist(res.data.items);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    useEffect(() => {
        callAPIData();
    }, []);
    return (
        <div className="w-full h-90per flex flex-row">
            <VideoShow comment="hello" id={videoshow}></VideoShow>
            {
                console.log(videolist)
            }
            <div className="flex flex-col overflow-y-auto">
                {
                    videolist.map(x =>
                        <VideoItem url={x.snippet.thumbnails.high.url} title={x.snippet.localized.title} info={x.snippet.publishedAt}></VideoItem>
                    )
                }
            </div>
        </div>
    )
}
export default Content;
