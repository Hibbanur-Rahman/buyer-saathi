import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  openLoginModal: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    handleOpenLoginModal: (state, action) => {
      state.openLoginModal = action.payload;
    },
  },
});

export const { login, handleOpenLoginModal } = authSlice.actions;
export default authSlice.reducer;
