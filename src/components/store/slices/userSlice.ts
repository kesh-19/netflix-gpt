import { createSlice } from "@reduxjs/toolkit";

export type UserType = {
  username: string;
  email: string;
};

const initialState: UserType = {
  username: "",
  email: "",
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    addUser: (_, action) => action.payload,
    removeUser: (_) => initialState,
  },
});
export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
