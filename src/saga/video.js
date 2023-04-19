import { takeEvery, takeLatest } from "redux-saga/effects";

function handleVideoId() {// }
    console.log("getid");
}
function handleVideoDesc() {// }
    console.log("getdesc");
}
export function* getVideoSaga() {
    yield takeLatest("GET_VIDEO_ID", handleVideoId);
    yield takeLatest("GET_VIDEO_DESC", handleVideoDesc);
}