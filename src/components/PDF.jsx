import ResumeEducation from "./ResumeEducation";
import ResumePersonal from "./ResumePersonal";
import ResumeWork from "./ResumeWork";

function PDF() {
  return (
    <div>
      <h2 className="text-3xl font-semibold text-center">Resume</h2>
      <ResumePersonal />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <ResumeEducation />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <ResumeWork />
    </div>
  );
}

export default PDF;
