import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  workData: [],
};
const workSlice = createSlice({
  name: "work",
  initialState,
  reducers: {
    addWorkData: (state, action) => {
      console.log(action.payload);
      state.workData = action.payload;
    },
  },
});
export const { addWorkData } = workSlice.actions;
export default workSlice.reducer;
