import React from "react";
import cloud from "../assets/cloud2.png";
import video from "../assets/hoathinh.mp4";
import axios from "axios";
function Content() {
    axios.get('https://www.googleapis.com/youtube/v3/videos')
        .then(function (res) {
            console.log(res.data.data);
        })
        .catch(function (error) {
            console.log(error);
        })
    return (
        <div className="w-full h-90per flex flex-row">
            <div className="left w-3/4 flex flex-col flex-auto">
                <div className="w-4/5 h-80 my-3 mx-auto flex-auto bg-black">
                    <video className="w-full h-full" controls>
                        <source src={video} type="video/mp4"></source>
                    </video>
                </div>
                <div className="w-11/12 h-1 my-3 mx-auto flex-auto mt-3 bg-orange-400">
                    <p>comment</p>
                </div>
            </div>
            <div className="right h-11/12 flex flex-col flex-auto overflow-auto">
                <div className="w-full flex flex-row my-3 mx-auto flex-1">
                    <img className="w-28 h-28" src={cloud}></img>
                    <div className="w-full">
                        <p>text</p>
                        <p>text</p>
                    </div>
                </div>
                <div className="w-full flex flex-row my-3 mx-auto flex-1">
                    <img className="w-28 h-28" src={cloud}></img>
                    <div className="w-full">
                        <p>text</p>
                        <p>text</p>
                    </div>
                </div>
                <div className="w-full flex flex-row my-3 mx-auto flex-1">
                    <img className="w-28 h-28" src={cloud}></img>
                    <div className="w-full">
                        <p>text</p>
                        <p>text</p>
                    </div>
                </div>
                <div className="w-full flex flex-row my-3 mx-auto flex-1">
                    <img className="w-28 h-28" src={cloud}></img>
                    <div className="w-full">
                        <p>text</p>
                        <p>text</p>
                    </div>
                </div>
                <div className="w-full flex flex-row my-3 mx-auto flex-1">
                    <img className="w-28 h-28" src={cloud}></img>
                    <div className="w-full">
                        <p>text</p>
                        <p>text</p>
                    </div>
                </div>
                <div className="w-full flex flex-row my-3 mx-auto flex-1">
                    <img className="w-28 h-28" src={cloud}></img>
                    <div className="w-full">
                        <p>text</p>
                        <p>text</p>
                    </div>
                </div>
                <div className="w-full flex flex-row my-3 mx-auto flex-1">
                    <img className="w-28 h-28" src={cloud}></img>
                    <div className="w-full">
                        <p>text</p>
                        <p>text</p>
                    </div>
                </div>
                <div className="w-full flex flex-row my-3 mx-auto flex-1">
                    <img className="w-28 h-28" src={cloud}></img>
                    <div className="w-full">
                        <p>text</p>
                        <p>text</p>
                    </div>
                </div>
                <div className="w-full flex flex-row my-3 mx-auto flex-1">
                    <img className="w-28 h-28" src={cloud}></img>
                    <div className="w-full">
                        <p>text</p>
                        <p>text</p>
                    </div>
                </div>
                <div className="w-full flex flex-row my-3 mx-auto flex-1">
                    <img className="w-28 h-28" src={cloud}></img>
                    <div className="w-full">
                        <p>text</p>
                        <p>text</p>
                    </div>
                </div>
                <div className="w-full flex flex-row my-3 mx-auto flex-1">
                    <img className="w-28 h-28" src={cloud}></img>
                    <div className="w-full">
                        <p>text</p>
                        <p>text</p>
                    </div>
                </div>
                <div className="w-full flex flex-row my-3 mx-auto flex-1">
                    <img className="w-28 h-28" src={cloud}></img>
                    <div className="w-full">
                        <p>text</p>
                        <p>text</p>
                    </div>
                </div>
                <div className="w-full flex flex-row my-3 mx-auto flex-1">
                    <img className="w-28 h-28" src={cloud}></img>
                    <div className="w-full">
                        <p>text</p>
                        <p>text</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Content;
