import { configureStore } from "@reduxjs/toolkit";
import personalSlice from "../features/personalSlice";
import workSlice from "../features/workSlice";
import educationSlice from "../features/educationSlice";
import projectSlice from "../features/projectSlice";
import skillSlice from "../features/skillSlice";
const store = configureStore({
  reducer: {
    personal: personalSlice,
    work: workSlice,
    education: educationSlice,
    project: projectSlice,
    skill: skillSlice,
  },
});
export default store;
