import { combineReducers, configureStore } from "@reduxjs/toolkit";
import crudReducer from "./crudSlice/crudsSlice";
const rootReducer = combineReducers({
  reactCruds: crudReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
