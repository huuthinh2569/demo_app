import { call, put, takeEvery } from "redux-saga/effects";
import { getAPI } from "../actions/api";
import { setvideolist, setvideoid, setvideodesc } from "../actions/video";
import axios from "axios";
const APIkey = "AIzaSyBEQDHmlha8L7pKwiM2unWCa8LLGggIXuY";
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
    const data = yield call(handledata)
    yield put(setvideolist(data));
    yield put(setvideoid(data[0].id));
    yield put(setvideodesc(data[0].snippet.description));
}
export function* handleCallAPI() {
    yield takeEvery('GET_API', callapi)
}