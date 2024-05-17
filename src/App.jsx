import { useState } from "react";
import EducationalForm from "./components/EducationalForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PersonalForm from "./components/PersonalForm";
import ProjectForm from "./components/ProjectForm";
import SkillForm from "./components/SkillForm";
import WorkForm from "./components/WorkForm";
import PDFGenerator from "./components/PDFGenerator";

const allComponents = [
  { name: "PersonalForm", component: <PersonalForm /> },
  { name: "EducationalForm", component: <EducationalForm /> },
  { name: "WorkForm", component: <WorkForm /> },
  { name: "ProjectForm", component: <ProjectForm /> },
  { name: "SkillForm", component: <SkillForm /> },
  { name: "PDFGenerator", component: <PDFGenerator /> },
];

function App() {
  const [currentComponent, setCurrentComponent] = useState(1);

  const handleComponentIncrement = () => {
    setCurrentComponent((prev) => prev + 1);
  };

  const handleComponentDecrement = () => {
    setCurrentComponent((prev) => prev - 1);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <section className="flex-grow w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentComponent <= allComponents.length - 1 && (
          <p className="text-yellow-500 text-center">
            (Please Submit before going next, if you have things to submit)
          </p>
        )}
        <section>
          {allComponents.map(
            (component, index) =>
              currentComponent === index + 1 && (
                <div key={component.name}>{component.component}</div>
              )
          )}
        </section>
        <section className="flex flex-col sm:flex-row justify-between items-center gap-4 p-4">
          {currentComponent > 1 && (
            <button
              onClick={handleComponentDecrement}
              className="w-full sm:w-auto my-2 py-2 px-4 bg-green-500 text-white rounded"
            >
              Prev
            </button>
          )}
          {currentComponent <= allComponents.length - 1 && (
            <button
              onClick={handleComponentIncrement}
              className="w-full sm:w-auto my-2 py-2 px-4 bg-indigo-600 text-white rounded"
            >
              Next
            </button>
          )}
        </section>
      </section>
      <Footer />
    </div>
  );
}

export default App;
