import { PersonalForm, WorkForm, EducationForm } from "./index";
function ResumeForm({ toggleFunc }) {
  return (
    <section className="border w-[350px] max-w-full shadow-md rounded-sm">
      <PersonalForm />
      <EducationForm />
      <WorkForm />
      <button
        onClick={toggleFunc}
        className="py-2 px-5 w-full bg-blue-400 rounded hover:bg-blue-600 hover:text-white"
      >
        Generate
      </button>
    </section>
  );
}

export default ResumeForm;
