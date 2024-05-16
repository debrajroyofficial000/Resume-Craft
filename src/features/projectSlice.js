import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  projectData: [],
};
const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    addProjectData: (state, action) => {
      state.projectData = action.payload;
    },
  },
});

export const { addProjectData } = projectSlice.actions;
export default projectSlice.reducer;
