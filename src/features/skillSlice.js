import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  skillData: [],
};
const skillSlice = createSlice({
  name: "skill",
  initialState,
  reducers: {
    addSkillData: (state, action) => {
      console.log(action.payload);
      state.skillData = action.payload;
    },
  },
});
export const { addSkillData } = skillSlice.actions;
export default skillSlice.reducer;
