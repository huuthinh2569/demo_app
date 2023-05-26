import { put, select, takeLeading } from "redux-saga/effects";
import Global from "../utils/global";
import { setUser, setfindUser } from "../actions/user";

export const getUserFromReducer = (state) => state.user.user
export function* addUser(action) {
    const { payload } = action;
    const userTemp = yield select(getUserFromReducer);
    const user = payload;
    const uid = userTemp.find(x => x.id === user.id);
    if (uid != null) {
        console.log(`${uid.id}` + "is exists");
        return
    }
    let newlist = [...userTemp, user];
    yield put(setUser(newlist));
}
export function* editUser(action) {
    const { payload } = action;
    console.log(payload.id);
    const userTemp = yield select(getUserFromReducer);
    const newuserState = userTemp.map(user => {
        if (user.id === payload.id) {
            return { ...user, photo: payload.photo, name: payload.name, date: payload.date };
        }
        return user;
    })
    yield put(setUser(newuserState));
}
export function* deleteUser(action) {
    const { payload } = action;
    const userTemp = yield select(getUserFromReducer);
    let newuser = userTemp.filter((user) => user.id !== payload)
    yield put(setUser(newuser));
}
export function* searchUser(action) {
    const { payload } = action;
    const userTemp = yield select(getUserFromReducer);
    const users = userTemp.filter(user => user.name.includes(payload));
    yield put(setfindUser(users));
}
export function* searchDate(action) {
    const { payload } = action;
    const userTemp = yield select(getUserFromReducer);
    const dates = userTemp.filter(user => {
        const date = new Date(user.date);
        const findstartDate = new Date(payload.startDate);
        const findendDate = new Date(payload.endDate);
        if (payload.endDate == null) {
            return date.getTime() >= findstartDate.getTime();
        }
        if (payload.startDate == null) {
            return date.getTime() <= findendDate.getTime();
        }
        else {
            return date.getTime() >= findstartDate.getTime() && date.getTime() <= findendDate.getTime();
        }
    });
    yield put(setfindUser(dates));
}
export function* changeStatus(action) {
    const { payload } = action;
    console.log(payload.status);
    const userTemp = yield select(getUserFromReducer);
    const newuserState = userTemp.map(user => {
        if (user.id === payload.id) {
            return { ...user, status: payload.status };
        }
        return user;
    })
    yield put(setUser(newuserState));
}
export function* findStatus(action) {
    const { payload } = action;
    console.log(payload);
    const userTemp = yield select(getUserFromReducer);
    const users = userTemp.filter(user => user.status == payload);
    yield put(setfindUser(payload != null ? users : userTemp));
}
export function* handleUser() {
    yield takeLeading("ADD_USER", addUser);
    yield takeLeading("EDIT_USER", editUser);
    yield takeLeading("DELETE_USER", deleteUser);
    yield takeLeading("SEARCH_USER", searchUser);
    yield takeLeading("SEARCH_DATE", searchDate);
    yield takeLeading("CHANGE_STATUS", changeStatus);
    yield takeLeading("SEARCH_STATUS", findStatus);
}