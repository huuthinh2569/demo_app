import { all } from "redux-saga/effects";
import { handleLogin } from "./login";
import { getVideoSaga } from "./video";

export default function* rootSaga() {
    console.log("this is rootSaga");
    yield all([getVideoSaga(), handleLogin()]);
}