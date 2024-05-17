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
    removeSkill: (state, action) => {
      state.skillData = state.skillData.filter(
        (skill) => skill.id !== action.payload
      );
    },
  },
});
export const { addSkillData, removeSkill } = skillSlice.actions;
export default skillSlice.reducer;
