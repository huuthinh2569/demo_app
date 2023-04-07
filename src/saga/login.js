import { takeEvery, takeLeading } from "redux-saga/effects";
import { useNavigate } from 'react-router-dom';


export function* checkLogin(action) {
    const { payload } = action;
    const dataStore = JSON.parse(localStorage.getItem("dataStore"));
    console.log(payload.email);
    localStorage.setItem("currentEmail", payload.email);
    if (payload.email === dataStore.email) {
        console.log("login Success!!!");
        yield takeEvery('Navigate_Login', function* (action) {
            action.navigate('/')
        })
    }
    else {
        console.log("Login Fail!!!");
        yield takeEvery('Navigate_Login', function* (action) {
            action.navigate('/login')
        })
    }
    console.log("hello");
}

export function* handleLogin() {
    yield takeLeading("GET_LOGIN", checkLogin);
}