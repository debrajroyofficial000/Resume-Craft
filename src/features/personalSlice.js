import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  personalData: {},
};
const personalSlice = createSlice({
  name: "personal",
  initialState,
  reducers: {
    addPersonalData: (state, action) => {
      state.personalData = action.payload;
    },
  },
});

export const { addPersonalData } = personalSlice.actions;
export default personalSlice.reducer;
