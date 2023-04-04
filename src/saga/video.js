import { takeEvery } from "redux-saga/effects";

function handleVideo() {// }
    console.log("getvideoSaga");
}
export function* getVideoSaga() {
    yield takeEvery("GET_VIDEO_ID", handleVideo);
}