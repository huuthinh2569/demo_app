import { put, takeEvery } from "redux-saga/effects";
import request from "../utils/request";

export function* callapi() {
    request.get('videos')
        .then(function (res) {
            const data = res.data.items;
            console.log(data)
        })
        .catch(function (error) {
            console.log(error);
        })
}
export function* handleCallAPI() {
    yield takeEvery('GET_API', callapi)
}