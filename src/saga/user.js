import { put, select, takeLeading } from "redux-saga/effects";
import Global from "../utils/global";
import { setCurrentPage, setData, setLimit, setList, setPage, setPageCount, setSearchKey, setUser, setfindUser } from "../actions/user";

export const getUserFromReducer = (state) => state.user.rawUser
export const getlimitFromReducer = (state) => state.user.limit
export const getSearchKeyFromReducer = (state) => state.user.searchKey
export function* addUser(action) {
    const { payload } = action;
    const userTemp = yield select(getUserFromReducer);
    const user = payload;
    const uid = userTemp.list.find(x => x.id === user.id);
    if (uid !== null) {
        console.log(`${uid.id}` + " is exists");
        return
    }
    const limit = yield select(getlimitFromReducer);
    const prevRange = (1 - 1) * limit;
    const nextRange = 1 * limit;
    let newlist = [...userTemp.list, user];
    let newdata = { ...userTemp, list: newlist };
    let defauluserlist = newdata.list.filter((user, index) => index >= prevRange && index < nextRange);
    console.log("saga:", defauluserlist);
    yield put(setUser(newdata));
    yield put(setList(defauluserlist));
    yield put(setCurrentPage(1));
}
export function* editUser(action) {
    const { payload } = action;
    console.log(payload.id);
    const userTemp = yield select(getUserFromReducer);
    const limit = yield select(getlimitFromReducer);
    const prevRange = (1 - 1) * limit;
    const nextRange = 1 * limit;
    const newuserState = userTemp.list.map(user => {
        if (user.id === payload.id) {
            return { ...user, photo: payload.photo, name: payload.name, date: payload.date };
        }
        return user;
    })
    let newdata = { ...userTemp, list: newuserState };
    let defauluserlist = newdata.list.filter((user, index) => index >= prevRange && index < nextRange);
    yield put(setCurrentPage(1));
    yield put(setUser(newdata));
    yield put(setList(defauluserlist));
}
export function* deleteUser(action) {
    const { payload } = action;
    const userTemp = yield select(getUserFromReducer);
    const limit = yield select(getlimitFromReducer);
    const prevRange = (1 - 1) * limit;
    const nextRange = 1 * limit;
    let newuser = userTemp.list.filter((user) => user.id !== payload);
    let newdata = { ...userTemp, list: newuser };
    let defauluserlist = newdata.list.filter((user, index) => index >= prevRange && index < nextRange);
    yield put(setUser(newdata));
    yield put(setCurrentPage(1));
    yield put(setList(defauluserlist));
}
export function* searchUser(action) {
    const { payload } = action;
    const userTemp = yield select(getUserFromReducer);
    const users = userTemp.list.filter(user => user.name.includes(payload));
    const limit = yield select(getlimitFromReducer);
    const prevRange = (1 - 1) * limit;
    const currentRange = 1 * limit;
    const newusers = users.filter((user, index) => index >= prevRange && index < currentRange);
    const pageCount = Math.ceil(users.length / limit);
    yield put(setfindUser(newusers));
    yield put(setCurrentPage(1));
    yield put(setSearchKey(payload));
    yield put(setPageCount(pageCount));
}
export function* searchDate(action) {
    const { payload } = action;
    const userTemp = yield select(getUserFromReducer);
    const dates = userTemp.list.filter(user => {
        const date = new Date(user.date);
        const findstartDate = new Date(payload.startDate);
        const findendDate = new Date(payload.endDate);
        if (payload.endDate === "") {
            return date.getTime() >= findstartDate.getTime();
        }
        if (payload.startDate === "") {
            return date.getTime() <= findendDate.getTime();
        }
        else {
            return date.getTime() >= findstartDate.getTime() && date.getTime() <= findendDate.getTime();
        }
    });
    const limit = yield select(getlimitFromReducer);
    const prevRange = (1 - 1) * limit;
    const currentRange = 1 * limit;
    const newdates = dates.filter((user, index) => index >= prevRange && index < currentRange);
    const pageCount = Math.ceil(dates.length / limit);
    yield put(setfindUser(newdates));
    yield put(setCurrentPage(1));
    yield put(setSearchKey(payload));
    yield put(setPageCount(pageCount));
}
export function* changeStatus(action) {
    const { payload } = action;
    console.log(payload.status);
    const userTemp = yield select(getUserFromReducer);
    const searchKey = yield select(getSearchKeyFromReducer);
    userTemp.list.forEach(user => {
        if (user.id === payload.id) {
            user.status = payload.status;
        }
    })
    yield put(setUser(userTemp));
    const limit = yield select(getlimitFromReducer);
    const prevRange = (1 - 1) * limit;
    const currentRange = 1 * limit;
    if (searchKey !== null) {
        const newSearchUsers = userTemp.list.filter((user, index) => user.name.includes(searchKey)
            || user.status === searchKey
            || new Date(user.date).getTime() >= new Date(searchKey.startDate).getTime()
            && new Date(user.date).getTime() <= new Date(searchKey.endDate).getTime()
        );
        if (searchKey === "full") {
            const newSearchUsers = userTemp.list.filter((user, index) => user);
            const newusers = newSearchUsers.filter((user, index) => index >= prevRange && index < currentRange);
            console.log("newusers: ", newusers);
            yield put(setList(newusers));
            yield put(setCurrentPage(1));
        } else {
            const newusers = newSearchUsers.filter((user, index) => index >= prevRange && index < currentRange);
            yield put(setList(newusers));
            yield put(setCurrentPage(1));
        }

    } else {
        const newusers = userTemp.list.filter((user, index) => index >= prevRange && index < currentRange);
        yield put(setList(newusers));
        yield put(setCurrentPage(1));
    }
}
export function* findStatus(action) {
    const { payload } = action;
    const userTemp = yield select(getUserFromReducer);
    const limit = yield select(getlimitFromReducer);
    const prevRange = (1 - 1) * limit;
    const nextRange = 1 * limit;
    const searchUsers = userTemp.list.filter(user => {
        if (payload.status === true) {
            return user.status === payload;
        }
        else {
            return user.status === payload;
        }

    });
    let searchuserlist = searchUsers.filter((user, index) => index >= prevRange && index < nextRange);

    const fullusers = userTemp.list.filter(user => user);
    let fulluserlist = fullusers.filter((user, index) => index >= prevRange && index < nextRange);
    const fullpageCount = Math.ceil(fullusers.length / limit);
    const searchpageCount = Math.ceil(searchUsers.length / limit);
    console.log("searchpageCount: ", searchpageCount);
    yield put(setPage(1));
    if (payload === "full") {
        yield put(setfindUser(fulluserlist));
        yield put(setPageCount(fullpageCount));
        yield put(setSearchKey(payload));
    }
    else {
        yield put(setfindUser(searchuserlist));
        yield put(setPageCount(searchpageCount));
        yield put(setSearchKey(payload));
    }
}
export function* setDefaultValue(action) {
    const { payload } = action;
    const limit = yield select(getlimitFromReducer);
    const pageCount = Math.ceil(payload.list.length / limit);
    console.log("saga", pageCount);
    yield put(setData(payload));
    yield put(setPageCount(pageCount));
}
export function* setCurrentValue(action) {
    const { payload } = action;
    console.log("saga: ", payload);
    yield put(setPage(payload));
}
export function* setListvalue() {
    const userTemp = yield select(getUserFromReducer);
    const limit = yield select(getlimitFromReducer);
    const prevRange = (1 - 1) * limit;
    const nextRange = 1 * limit;
    let defauluserlist = userTemp.list.filter((user, index) => index >= prevRange && index < nextRange);
    console.log("saga: ", defauluserlist);
    yield put(setList(defauluserlist));
}
export function* setLimitValue(action) {
    const { payload } = action;
    console.log("saga: ", payload);
    yield put(setLimit(payload));
}
export function* prevValue(action) {
    const { payload } = action;
    const userTemp = yield select(getUserFromReducer);
    const limit = yield select(getlimitFromReducer);
    const searchKey = yield select(getSearchKeyFromReducer);
    const prevRange = (payload - 1) * limit;
    const nextRange = payload * limit;
    if (searchKey !== null) {
        let defauluserlist = userTemp.list.filter((user, index) => user.name.includes(searchKey)
            || user.status === searchKey
            || new Date(user.date).getTime() >= new Date(searchKey.startDate).getTime()
            && new Date(user.date).getTime() <= new Date(searchKey.endDate).getTime()
        );
        const newusers = defauluserlist.filter((user, index) => index >= prevRange && index < nextRange);
        yield put(setList(newusers));
    } else {
        let defauluserlist = userTemp.list.filter((user, index) => index >= prevRange && index < nextRange);
        yield put(setList(defauluserlist));
    }
}
export function* changeValue(action) {
    const { payload } = action;
    const userTemp = yield select(getUserFromReducer);
    const limit = yield select(getlimitFromReducer);
    const searchKey = yield select(getSearchKeyFromReducer);
    const prevRange = (payload - 1) * limit;
    const nextRange = payload * limit;
    if (searchKey !== null) {
        let defauluserlist = userTemp.list.filter((user, index) => user.name.includes(searchKey)
            || user.status === searchKey
            || new Date(user.date).getTime() >= new Date(searchKey.startDate).getTime()
            && new Date(user.date).getTime() <= new Date(searchKey.endDate).getTime()
        );
        const newusers = defauluserlist.filter((user, index) => index >= prevRange && index < nextRange);
        yield put(setList(newusers));
    } else {
        let defauluserlist = userTemp.list.filter((user, index) => index >= prevRange && index < nextRange);
        yield put(setList(defauluserlist));
    }

}
export function* nextValue(action) {
    const { payload } = action;
    const userTemp = yield select(getUserFromReducer);
    const limit = yield select(getlimitFromReducer);
    const searchKey = yield select(getSearchKeyFromReducer);
    const prevRange = (payload - 1) * limit;
    const nextRange = payload * limit;
    if (searchKey !== null) {
        let defauluserlist = userTemp.list.filter((user, index) => user.name.includes(searchKey)
            || user.status === searchKey
            || new Date(user.date).getTime() >= new Date(searchKey.startDate).getTime()
            && new Date(user.date).getTime() <= new Date(searchKey.endDate).getTime()
        );
        const newusers = defauluserlist.filter((user, index) => index >= prevRange && index < nextRange);
        yield put(setList(newusers));
        yield put(setPageCount(defauluserlist.length / limit));
    } else {
        let defauluserlist = userTemp.list.filter((user, index) => index >= prevRange && index < nextRange);
        yield put(setList(defauluserlist));
    }
}
export function* handleUser() {
    yield takeLeading("ADD_USER", addUser);
    yield takeLeading("EDIT_USER", editUser);
    yield takeLeading("DELETE_USER", deleteUser);
    yield takeLeading("SEARCH_USER", searchUser);
    yield takeLeading("SEARCH_DATE", searchDate);
    yield takeLeading("CHANGE_STATUS", changeStatus);
    yield takeLeading("SEARCH_STATUS", findStatus);
    yield takeLeading("SET_DEFAULT_USER", setDefaultValue);
    yield takeLeading("GET_LIST_USER", setListvalue)
    yield takeLeading("SET_CURRENT_PAGE", setCurrentValue);
    yield takeLeading("SET_LIMIT_PAGE", setLimitValue);
    yield takeLeading("ChANGE_PAGE", changeValue);
}