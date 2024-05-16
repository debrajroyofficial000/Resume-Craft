import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  personalData: {},
};
const personalSlice = createSlice({
  name: "personal",
  initialState,
  reducers: {
    addPersonalData: (state, action) => {
      console.log(action.payload);
      state.personalData = action.payload;
    },
  },
});

export const { addPersonalData } = personalSlice.actions;
export default personalSlice.reducer;
