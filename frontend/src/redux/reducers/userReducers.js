import { createReducer, createAction } from '@reduxjs/toolkit';

export const loginRequest = createAction('user/loginRequest');
export const loginSuccess = createAction('user/loginSuccess');
export const loginFail = createAction('user/loginFail');
export const registerRequest = createAction('user/registerRequest');
export const registerSuccess = createAction('user/registerSuccess');
export const registerFail = createAction('user/registerFail');
export const logoutRequest = createAction('user/logoutRequest');
export const logoutSuccess = createAction('user/logoutSuccess');
export const logoutFail = createAction('user/logoutFail');
export const loadUserRequest = createAction('user/loadUserRequest');
export const loadUserSuccess = createAction('user/loadUserSuccess');
export const loadUserFail = createAction('user/loadUserFail');
export const clearError = createAction('user/clearError');
export const clearMessage = createAction('user/clearMessage');


export const userReducer = createReducer(
  {},
  (builder) => {
    builder
      .addCase(loginRequest, (state) => {
        state.loading = true;
      })
      .addCase(loginSuccess, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.message = action.payload.message;
      })
      .addCase(loginFail, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
      })
      .addCase(registerRequest, (state) => {
        state.loading = true;
      })
      .addCase(registerSuccess, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.message = action.payload.message;
      })
      .addCase(registerFail, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
      })
      .addCase(logoutRequest, (state) => {
        state.loading = true;
      })
      .addCase(logoutSuccess, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.message = action.payload;
      })
      .addCase(logoutFail, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.error = action.payload;
      })
      .addCase(loadUserRequest, (state) => {
        state.loading = true;
      })
      .addCase(loadUserSuccess, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(loadUserFail, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
      })
      .addCase(clearError, (state) => {
        state.error = null;
      })
      .addCase(clearMessage, (state) => {
        state.message = null;
      });
  }
);


  