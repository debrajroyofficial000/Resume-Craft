import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  educationalData: {},
};

const educationalSlice = createSlice({
  name: "education",
  initialState,
  reducers: {
    addEducationalData: (state, action) => {
      state.educationalData = action.payload;
    },
  },
});
export const { addEducationalData } = educationalSlice.actions;
export default educationalSlice.reducer;
