import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import VideoShow from "./video_show_component";
import VideoItem from "./video_item_component";
import { connect } from 'react-redux'
import { getAPI } from "../actions/api";
import { createSelector } from "reselect";
function Content() {
    const dispatch = useDispatch();
    const videolist = (state) => state.video.list;
    const videoid = (state) => state.video.id;
    const videodesc = (state) => state.video.desc;
    const selectList = createSelector(
        [videolist],
        (list) => list
    );
    const selectId = createSelector(
        [videoid],
        (id) => id
    );
    const selectDesc = createSelector(
        [videodesc],
        (desc) => desc
    );
    const selectdata = useSelector(selectList);
    const defaultvideo = useSelector(selectId);
    const defaultdesc = useSelector(selectDesc);
    const [videoshow, setvideoshow] = useState();
    const [videocomment, setvideocomment] = useState();
    const [clickvideo, setclickvideo] = useState(false);
    useEffect(() => {
        dispatch(getAPI());
    }, []);
    return (
        <div className="w-full h-90per flex flex-row">
            <VideoShow comment={clickvideo == true ? videocomment : defaultdesc} id={clickvideo == true ? videoshow : defaultvideo}></VideoShow>

            <div className="flex flex-col overflow-y-auto overflow-x-hidden">
                {
                    selectdata.map(x =>
                        <div onClick={() => {
                            setclickvideo(true);
                            setvideoshow(x.id);
                            setvideocomment(x.snippet.description);
                            console.log(x.id);
                            console.log(x.snippet.description);
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
