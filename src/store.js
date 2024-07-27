import { createStore } from "redux";
import { appReducer } from "./reducer";
import { initialState } from "./reducer";

export const store = createStore(appReducer, initialState);

store.dispatch({ type: "@@INIT" });
