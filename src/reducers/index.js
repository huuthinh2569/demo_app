import { combineReducers } from "redux";
import loginReducer from "./login";
import videoReducer from "./video";

const rootReducer = combineReducers({
    video: videoReducer,
    login: loginReducer
});
export default rootReducer;