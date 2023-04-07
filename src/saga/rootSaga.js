import { all } from "redux-saga/effects";
import { handleLogin } from "./login";
import { getVideoSaga } from "./video";
import { handleCallAPI } from "./api";

export default function* rootSaga() {
    console.log("this is rootSaga");
    yield all([getVideoSaga(), handleLogin(), handleCallAPI()]);
}