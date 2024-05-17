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
    removeJob: (state, action) => {
      state.workData = state.workData.filter(
        (job) => job.id !== action.payload
      );
    },
  },
});
export const { addWorkData, removeJob } = workSlice.actions;
export default workSlice.reducer;
