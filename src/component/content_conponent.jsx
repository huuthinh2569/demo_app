import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideo } from "../actions/video";
import request from "../utils/request";
import ListVideo from "./video_list_component";
import VideoShow from "./video_show_component";
function Content() {
    const videoList = useSelector(state => state.video.list);
    const dispatch = useDispatch();
    const [videoshow, setvideoshow] = useState('');
    const [videodesc, setvideodesc] = useState('');
    function callAPIData() {
        request.get('videos')
            .then(function (res) {
                setvideoshow(res.data.items[0].id);
                setvideodesc(res.data.items[0].snippet.localized.description);
                console.log(res.data.items);
                const action = getVideo(res.data.items);
                dispatch(action);
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
            <ListVideo videolist={videoList}></ListVideo>
        </div>
    )
}
export default Content;
