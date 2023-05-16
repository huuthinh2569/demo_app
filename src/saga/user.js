import { put, select, takeLeading } from "redux-saga/effects";
import Global from "../utils/global";
import { setUser } from "../actions/user";

export const getUserFromReducer = (state) => state.user.user
export function* addUser(action) {
    const { payload } = action;
    const userTemp = yield select(getUserFromReducer);
    const user = payload;
    let newlist = [...userTemp, user];
    yield put(setUser(newlist));
}
export function* editUser(action) {
    const { payload } = action;
    const userTemp = yield select(getUserFromReducer);
    const newuserState = userTemp.map(user => {
        if (user.id === payload.id) {
            return { ...user, photo: payload.photo, name: payload.name, date: payload.date, status: payload.status };
        }
        return user;
    })
    yield put(setUser(newuserState));
}
export function* handleUser() {
    yield takeLeading("ADD_USER", addUser);
    yield takeLeading("EDIT_USER", editUser);
}