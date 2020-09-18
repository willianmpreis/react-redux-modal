import { combineReducers } from "redux";

import users from "./users";
import userSelected from "./userSelected";

export default combineReducers({
    users,
    userSelected
});