import { call, put, takeLeading } from "redux-saga/effects";
import { setvideolist, setvideoid, setvideodesc } from "../actions/video";
import axios from "axios";
const APIkey = "AIzaSyD86t16Cjnd-7P7LpeFxvB27B4uV8i5wLU";
const baseURL = "https://www.googleapis.com/youtube/v3/videos"
export function handledata() {
    return axios.get(
        baseURL,
        {
            params: {
                part: 'snippet',
                chart: 'mostPopular',
                key: APIkey
            }
        }
    )
        .then(function (res) {
            return res.data.items;
        })
        .catch(function (error) {
            console.log(error);
        })
}
export function* callapi() {
    const data = yield call(handledata);
    yield put(setvideolist(data));
    yield put(setvideoid(data[0].id));
    yield put(setvideodesc(data[0].snippet.description));
}
export function* handleCallAPI() {
    yield takeLeading('GET_API', callapi)
}