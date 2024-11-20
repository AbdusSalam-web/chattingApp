import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "../features/counter/userSlice";


export default configureStore({
  reducer: {
    currentUser: userSlice ,
  },
});
