import { put, takeLeading } from "redux-saga/effects";
import Global from "../utils/global";


export function* checkLogin(action) {
    const { payload } = action;
    const navigator = Global.Navigator.get();
    const dataStore = JSON.parse(localStorage.getItem("dataStore"));
    console.log(payload.email);
    localStorage.setItem("currentEmail", payload.email);
    if (payload.email === dataStore.email) {
        console.log("login Success!!!");
        yield put({ type: 'GET_LOGIN' });
        navigator.navigate('/')
    }
    else {
        console.log("Login Fail!!!");
        navigator.navigate('/login')
    }
}

export function* handleLogin() {
    yield takeLeading("GET_LOGIN", checkLogin);
}