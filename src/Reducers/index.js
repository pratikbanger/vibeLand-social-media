import { combineReducers } from "redux";

import authReducer from "./authReducer";
import { createPostReducer, userPostReducer } from "./postReducer"
import { timelinePostReducer } from "./timelinePostReducer";

export const reducer = combineReducers({ authReducer, createPostReducer, userPostReducer, timelinePostReducer })