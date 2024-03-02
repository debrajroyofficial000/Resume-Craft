import { useReducer } from "react";
import { initialResumeState } from "../utils";

function reducer(state, action) {
  switch (action.type) {
    case "addPersonalData":
      return { ...state, personalData: action.payload };
    case "addEducationalData": {
      return {
        ...state,
        educationalData: [...state.educationalData, action.payload],
      };
    }
    case "editEducationExperienceData": {
      const allEducations = [...state.educationalData];
      const updatedEducations = allEducations.map((edu) =>
        edu.id === action.payload.id ? action.payload : edu
      );
      return { ...state, educationalData: updatedEducations };
    }
    case "deleteEducationExperienceData": {
      const allEducations = [...state.educationalData];
      const updatedEducations = allEducations.filter(
        (edu) => edu.id !== action.payload.id
      );
      return { ...state, educationalData: updatedEducations };
    }
    case "addWorkExperienceData": {
      return {
        ...state,
        workExperienceData: [...state.workExperienceData, action.payload],
      };
    }
    case "editWorkExperienceData": {
      const allWorks = [...state.workExperienceData];
      const updatedWorks = allWorks.map((work) =>
        work.id === action.payload.id ? action.payload : work
      );
      return { ...state, workExperienceData: updatedWorks };
    }
    case "deleteWorkExperienceData": {
      const allWorks = [...state.workExperienceData];
      const updatedWorks = allWorks.filter(
        (work) => work.id !== action.payload.id
      );
      return { ...state, workExperienceData: updatedWorks };
    }
    default:
      return state;
  }
}
function useUserReducer() {
  const [resumeState, userDispatch] = useReducer(reducer, initialResumeState);
  const { personalData, educationalData, workExperienceData } = resumeState;

  return {
    personalData,
    educationalData,
    workExperienceData,
    userDispatch,
  };
}
export default useUserReducer;
