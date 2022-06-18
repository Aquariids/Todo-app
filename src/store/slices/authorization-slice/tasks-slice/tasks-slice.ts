import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITask,ItasksState } from "./types";

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

const initialstate: ItasksState = {
  titleInput: '',
  tasks:[],
};
const authorizationSlice = createSlice({
  name: "tasks",
  initialState: initialstate,
  reducers: {

  },

  extraReducers: {
    changeTitleTasks:(state,action:PayloadAction<string>)=>{
      state.titleInput = action.payload
    },
    
  },
});

export const { changeLogin, changePassword, exit, toggle } =
  authorizationSlice.actions;
export default authorizationSlice;
