import { all } from "redux-saga/effects";
import { handleLogin } from "./login";
import { handleCallAPI } from "./api";

export default function* rootSaga() {
    console.log("this is rootSaga");
    yield all([handleLogin(), handleCallAPI()]);
}