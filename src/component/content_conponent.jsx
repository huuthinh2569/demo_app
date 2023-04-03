import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideo } from "../actions/video";
import request from "../utils/request";
import VideoItem from "./video_item_component";
import VideoShow from "./video_show_component";
function Content(props) {
    // const videoList = useSelector(state => state.video.list);
    // const dispatch = useDispatch();
    const [videoshow, setvideoshow] = useState('');
    const [videodesc, setvideodesc] = useState('');
    const [videolist, setvideolist] = useState([]);
    function callAPIData() {
        request.get('videos')
            .then(function (res) {
                setvideoshow(res.data.items[0].id);
                setvideodesc(res.data.items[0].snippet.localized.description);
                setvideolist(res.data.items);
                // const action = getVideo(res.data.items);
                // dispatch(action);
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
            <VideoShow comment={videodesc} id={videoshow}></VideoShow>

            <div className="flex flex-col overflow-y-auto overflow-x-hidden">
                {
                    videolist.map(x =>
                        <div onClick={() => {
                            setvideoshow(x.id);
                            setvideodesc(x.snippet.localized.description);
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
