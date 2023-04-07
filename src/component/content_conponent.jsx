import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideo, getVideoId } from "../actions/video";
import VideoItem from "./video_item_component";
import VideoShow from "./video_show_component";
import { getAPI } from "../actions/api";
function Content() {
    // const videoList = useSelector(state => state.video.list);
    const dispatch = useDispatch();
    const [videoshow, setvideoshow] = useState('');
    const [videodesc, setvideodesc] = useState('');
    const [videolist, setvideolist] = useState([]);
    useEffect(() => {
        dispatch(getAPI());
    }, []);
    return (
        <div className="w-full h-90per flex flex-row">
            <VideoShow comment={videodesc} id={videoshow}></VideoShow>

            <div className="flex flex-col overflow-y-auto overflow-x-hidden">
                {
                    videolist.map(x =>
                        <div onClick={() => {

                        }}>
                            <VideoItem key={x.id} url={x.snippet.thumbnails.high.url} title={x.snippet.localized.title} info={x.snippet.publishedAt}></VideoItem>
                        </div>
                    )
                }
            </div>

        </div>
    )
}
export default Content;
