import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "counter",
  initialState: {
    value: JSON.parse(localStorage.getItem("user"))
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  },
  reducers: {
    userData: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { userData } = userSlice.actions;

export default userSlice.reducer;
