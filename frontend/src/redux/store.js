import {configureStore} from "@reduxjs/toolkit";
import { userReducer } from './reducers/userReducers';




export const store = configureStore({
    reducer: {
        user: userReducer
      },

})
export default store;


export const server = 'https://backend-m3w5.onrender.com';
