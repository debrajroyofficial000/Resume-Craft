import { Header, ResumeForm, ResumePdf } from "./components";
import { useUserReducer } from "./reducers";
import { UserProvider } from "./contexts";
import { useState } from "react";

function App() {
  const { personalData, educationalData, workExperienceData, userDispatch } =
    useUserReducer();
  const [showResume, setShowResume] = useState(false);
  function toggleShowResume() {
    if (educationalData.length > 0 && Object.keys(personalData).length === 0)
      setShowResume(true);
  }
  return (
    <div className="max-w-full w-[1444px] mx-auto">
      <Header />
      <UserProvider
        value={{
          personalData,
          educationalData,
          workExperienceData,
          userDispatch,
        }}
      >
        <section className="flex justify-between items-start">
          <ResumeForm toggleFunc={toggleShowResume} />
          <ResumePdf show={showResume} />
        </section>
      </UserProvider>
    </div>
  );
}

export default App;
