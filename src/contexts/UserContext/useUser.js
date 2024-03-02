import { createContext, useContext } from "react";
import { initialResumeState } from "../../utils";
export const userContext = createContext(initialResumeState);

export const UserProvider = userContext.Provider;

function useUser() {
  const { personalData, educationalData, workExperienceData, userDispatch } =
    useContext(userContext);
  return { personalData, educationalData, workExperienceData, userDispatch };
}
export default useUser;
