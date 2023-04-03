import { takeEvery } from "redux-saga/effects";

function checkLogin() {
    // const dataStore = JSON.parse(localStorage.getItem("dataStore"));
    // localStorage.setItem("currentEmail", data.email);
    // if (data.email === dataStore.email) {
    //     console.log("login Success!!!");
    //     navihateTo("/");
    // }
    // else {
    //     console.log("Login Fail!!!");
    //     navihateTo("/login");
    // }
    console.log("hello");
}

export function* handleLogin() {
    yield takeEvery("*", checkLogin);
}