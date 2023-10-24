import { combineReducers } from "@reduxjs/toolkit"; 
import currentTabSlice from "./currentTabSlice";

const rootReducers = combineReducers({
    currentTabSlice,
});

export default rootReducers;