import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideo, getVideoId } from "../actions/video";
import VideoItem from "./video_item_component";
import VideoShow from "./video_show_component";
import { getAPI } from "../actions/api";
import { getVideoDescState, getVideoIdState } from "../utils/selector";
function Content() {
    // const videoList = useSelector(state => state.api.list);
    const dispatch = useDispatch();
    const mapStateToProps = state => ({
        getvideo: getVideoIdState(state),
        getdesc: getVideoDescState(state)
    });
    const videoid = mapStateToProps.getvideo;
    const videodesc = mapStateToProps.getdesc;
    useEffect(() => {
        dispatch(getAPI());
        console.log(videoid);
    }, []);
    return (
        <div className="w-full h-90per flex flex-row">
            <VideoShow comment={videodesc} id={videoid}></VideoShow>
            {/* 
            <div className="flex flex-col overflow-y-auto overflow-x-hidden">
                {
                    videolist.map(x =>
                        <div onClick={() => {

                        }}>
                            <VideoItem key={x.id} url={x.snippet.thumbnails.high.url} title={x.snippet.localized.title} info={x.snippet.publishedAt}></VideoItem>
                        </div>
                    )
                }
            </div> */}
        </div>
    )
}
export default Content;
