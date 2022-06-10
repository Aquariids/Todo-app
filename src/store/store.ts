import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import authorizationSlice from "./slices/authorization-slice/authorization-slice";
const store =  configureStore({
    reducer:{
        authorizations: authorizationSlice.reducer
    },
    devTools: true
});


export type RootState =  ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const Dispatch =()=> useDispatch <AppDispatch>();
export default store;
