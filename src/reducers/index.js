import { combineReducers } from "redux";
import loginReducer from "./login";
import videoReducer from "./video";
import apiReducer from "./api";

const rootReducer = combineReducers({
    video: videoReducer,
    login: loginReducer,
    api: apiReducer
});
export default rootReducer;