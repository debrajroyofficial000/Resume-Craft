import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  projectData: [],
};
const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    addProjectData: (state, action) => {
      console.log(action.payload);
      state.projectData = action.payload;
    },
    removeProject: (state, action) => {
      state.projectData = state.projectData.filter(
        (project) => project.id !== action.payload
      );
    },
  },
});

export const { addProjectData, removeProject } = projectSlice.actions;
export default projectSlice.reducer;
