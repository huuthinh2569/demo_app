import React from "react";
function VideoItem(props) {
    const datetime = new Date(props.info);
    const hour = `${datetime.getHours() < 10 ? '0' + datetime.getHours() : datetime.getHours()}`;
    const minute = `${datetime.getMinutes() < 10 ? '0' + datetime.getMinutes() : datetime.getMinutes()}`;
    const date = `${datetime.getDate() < 10 ? '0' + datetime.getDate() : datetime.getDate()}`;
    const month = `${(datetime.getMonth() + 1) < 10 ? '0' + (datetime.getMonth() + 1) : (datetime.getMonth() + 1)}`;
    const year = `${datetime.getFullYear()}`;
    const dateMDY = `${hour}:${minute} ${date}/${month}/${year}`;
    return (
        <div onClick={props.onclick} className="right h-11/12 flex flex-row items-center flex-auto hover:bg-yellow-400 border-4 border-yellow-400 m-2">
            <img className="w-40" src={props.url}></img>
            <div className="w-full flex flex-col h-full p-2">
                <p className="font-sans text-ellipsis whitespace-nowrap w-40 overflow-hidden">{props.title}</p>
                <p className="font-sans text-ellipsis whitespace-nowrap w-40 overflow-hidden">{dateMDY}</p>
            </div>
        </div>
    )
}
export default VideoItem;