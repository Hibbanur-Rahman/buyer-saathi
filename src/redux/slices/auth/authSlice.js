import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  openLoginModal: false,
  isAuthenticated:false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    handleOpenLoginModal: (state, action) => {
      state.openLoginModal = action.payload;
    },
    logout:(state,action)=>{
      state.user=null;
      state.isAuthenticated=false;
    },
    handleIsAuthenticate:(state,action)=>{
      state.isAuthenticated=action.payload;
    },
    handleSaveUserDetails:(state,action)=>{
      state.user=action.payload;
    }
  },
});

export const { login, handleOpenLoginModal,logout, handleIsAuthenticate,handleSaveUserDetails } = authSlice.actions;
export default authSlice.reducer;
