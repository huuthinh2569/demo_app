import { all } from "redux-saga/effects";
import { handleLogin } from "./login";

export default function* rootSaga() {
    console.log("this is rootSaga");
    yield all([handleLogin()]);
}