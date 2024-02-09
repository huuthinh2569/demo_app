import { all } from "redux-saga/effects";
import { handleLogin } from "./login";
import { handleCallAPI } from "./api";
import { handleUser } from "./user";

export default function* rootSaga() {
    console.log("this is rootSaga");
    yield all([handleLogin(), handleUser(), handleCallAPI()]);
}