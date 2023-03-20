import React, { useEffect, useState } from "react";
import request from "../utils/request";
import ListVideo from "./video_list_component";
import VideoShow from "./video_show_component";
function Content() {
    const [videoshow, setvideoshow] = useState('');
    const [videolist, setvideolist] = useState([]);
    function callAPIData() {
        request.get('videos')
            .then(function (res) {
                // handleGetdata(res.data.items[0].id, res.data.items);
                setvideoshow(res.data.items[0].id);
                setvideolist(res.data.items);
                console.log(videolist);
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
            <ListVideo videolist={videolist}></ListVideo>
        </div>
    )
}
export default Content;
