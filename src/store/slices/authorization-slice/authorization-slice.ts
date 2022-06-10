import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { formToggle, IAuthorizationState, IForm } from "./types";

export const asyncSignIn = createAsyncThunk(
  "authorization/asyncSignIn",
  async (_, thunkAPI) => {
    return {
      accessToken: "test",
      refreshToken: "test",
      id: "5678",
    };
  }
);

export const asyncSignUp = createAsyncThunk(
  "authorization/asyncSignUp",
  async (_, thunkAPI) => {
    return {
      accessToken: "test",
      refreshToken: "test",
      id: "5678",
    };
  }
);

const initialstate: IAuthorizationState = {
  typeForm: formToggle.SIGN_UP,
  login: "",
  password: "",
  error: "",
};
const authorizationSlice = createSlice({
  name: "authorization",
  initialState: initialstate,
  reducers: {
    changeLogin: (state, action: PayloadAction<string>) => {
      state.login = action.payload;
    },
    changePassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    toggle: (state, action: PayloadAction<IForm>) => {
      state.typeForm = action.payload;
    },
    exit: (state) => {},
  },

  extraReducers: {
    [asyncSignUp.fulfilled.type]: (state, action: PayloadAction<any>) => {
      localStorage.setItem(
        "accessToken",
        JSON.stringify(action.payload.accessToken)
      );
      localStorage.setItem(
        "refreshToken",
        JSON.stringify(action.payload.refreshToken)
      );
      localStorage.setItem("id", JSON.stringify(action.payload.id));
      state.login = "";
      state.password = "";
      state.error = "";
    },
    [asyncSignIn.fulfilled.type]: (state, action: PayloadAction<any>) => {
      localStorage.setItem(
        "accessToken",
        JSON.stringify(action.payload.accessToken)
      );
      localStorage.setItem(
        "refreshToken",
        JSON.stringify(action.payload.refreshToken)
      );
      localStorage.setItem("id", JSON.stringify(action.payload.id));

      state.login = "";
      state.password = "";
      state.error = "";
    },
  },
});

export const { changeLogin, changePassword, exit, toggle } =
  authorizationSlice.actions;
export default authorizationSlice;
