import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import dashboardDataReducer from "./DashboardDataReducer";

const combinedReducer = combineReducers({
    authReducer,dashboardDataReducer
})

export default combinedReducer;