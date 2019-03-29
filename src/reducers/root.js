import userReducer from "./User";
import authReduser from "./Auth";
import { combinedReducers } from "redux";

const reducer = combinedReducers({ authReducer, userReducer });
export default reducer;
