import { createStore } from "redux";
import { combineReducer } from "./reducer";

export const store = createStore(combineReducer);
