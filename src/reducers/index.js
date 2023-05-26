import { combineReducers } from "redux";
import loginReducer from "./login";
import videoReducer from "./video";
import apiReducer from "./api";
import userReducer from "./user";

const rootReducer = combineReducers({
    user: userReducer,
    video: videoReducer,
    login: loginReducer,
    api: apiReducer,
});
export default rootReducer;