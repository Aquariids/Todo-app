import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import authorizationSlice from "./slices/authorization-slice/authorization-slice";
const store =  configureStore({
    reducer:{
        authorizations: authorizationSlice.reducer
    },
    devTools: true
});


export type RootState =  ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const Selector:TypedUseSelectorHook<RootState>=useSelector;
export const Dispatch =()=> useDispatch <AppDispatch>();
export default store;
