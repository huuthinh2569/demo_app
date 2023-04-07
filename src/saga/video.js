import { takeEvery } from "redux-saga/effects";

function handleVideolist() {// }
    console.log("getlist");
}
export function* getVideoSaga() {
    yield takeEvery("GET_VIDEO_List", handleVideolist);
}