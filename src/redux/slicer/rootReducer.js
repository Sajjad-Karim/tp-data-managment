import { combineReducers } from "@reduxjs/toolkit";
import authSlicer from "../features/auth/slicer";

const rootReducer = combineReducers({
  auth: authSlicer,
  //
});

export default rootReducer;
