import { combineReducers } from "@reduxjs/toolkit"; 
import currentTabSlice from "../slices/currentTabSlice";

const rootReducers = combineReducers({
    currentTabSlice,
});

export default rootReducers;