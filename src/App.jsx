import EducationalForm from "./components/EducationalForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PersonalForm from "./components/PersonalForm";
import ProjectForm from "./components/ProjectForm";
import SkillForm from "./components/SkillForm";
import WorkForm from "./components/WorkForm";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <section className="flex-grow w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PersonalForm />
        <EducationalForm />
        <WorkForm />
        <ProjectForm />
        <SkillForm />
      </section>
      <Footer />
    </div>
  );
}

export default App;
