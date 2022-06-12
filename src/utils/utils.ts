import React from "react";
import { asyncSignUp } from "../store/slices/authorization-slice/authorization-slice";
import {formToggle, IForm } from "../store/slices/authorization-slice/types";
import { AppDispatch } from "../store/store";

export const onSubmit = (type:IForm,dispatch:AppDispatch,e:React.FormEvent) => {
    e.preventDefault();
    if(type === formToggle.SIGN_UP) {
        dispatch(asyncSignUp())
    } else if (type === formToggle.SIGN_IN) {
        dispatch(asyncSignUp())
    }
} 