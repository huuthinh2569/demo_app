import { takeEvery } from "redux-saga/effects";

function checkLogin() {
    console.log("hello");
}

export function* handleLogin() {
    yield takeEvery("*", checkLogin);
}