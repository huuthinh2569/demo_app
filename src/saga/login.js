import { put, takeEvery, takeLeading } from "redux-saga/effects";
import { getLogin } from "../actions/login";


export function* checkLogin(action) {
    const { payload } = action;
    const dataStore = JSON.parse(localStorage.getItem("dataStore"));
    console.log(payload.email);
    localStorage.setItem("currentEmail", payload.email);
    if (payload.email === dataStore.email) {
        console.log("login Success!!!");
        yield takeEvery('Navigate_Login', function* (action) {
            yield put(getLogin(payload));
            action.navigate('/')
        })
    }
    else {
        console.log("Login Fail!!!");
        yield takeEvery('Navigate_Login', function* (action) {
            action.navigate('/login')
        })
    }
}

export function* handleLogin() {
    yield takeLeading("GET_LOGIN", checkLogin);
}