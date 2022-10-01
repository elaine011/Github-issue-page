// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import { useDispatch } from "react-redux";

// import { apiSlice } from "./apiSlices";

// const store = configureStore({
//   reducer: { [apiSlice.reducerPath]: apiSlice.reducer },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(apiSlice.middleware),
// });

// export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch: () => AppDispatch = useDispatch;
// // export type RootState = ReturnType<typeof store.getState>;
// export default store;

import { createStore } from "redux";
import { combineReducer } from "./reducer";

export const store = createStore(combineReducer);
