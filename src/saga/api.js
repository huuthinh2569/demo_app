import { put, takeEvery } from "redux-saga/effects";
import request from "../utils/request";
import { getAPI } from "../actions/api";
import { getvideoDesc, getvideoID } from "../actions/video";
export function handledata() {
    return request.get('videos')
        .then(function (res) {
            return res.data.items;
        })
        .catch(function (error) {
            console.log(error);
        })
}
export function* callapi() {
    const data = yield (handledata());
    const id = data[0].id;
    const desc = data[0].snippet.description;
    console.log(data);
    yield put(getAPI(data));
    yield put(getvideoID(id));
    yield put(getvideoDesc(desc));
}
export function* handleCallAPI() {
    yield takeEvery('GET_API', callapi)
}