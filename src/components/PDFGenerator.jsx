import { PDFDownloadLink } from "@react-pdf/renderer";
import ResumePDF from "./ResumePDF";
import { useSelector } from "react-redux";

const PDFGenerator = () => {
  const personalData = useSelector((store) => store.personal.personalData);
  const educationalData = useSelector(
    (store) => store.education.educationalData
  );
  const workData = useSelector((store) => store.work.workData);
  const projectData = useSelector((store) => store.project.projectData);
  const skillData = useSelector((store) => store.skill.skillData);

  return (
    <section className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h3 className="text-2xl font-semibold mb-6">Generate PDF</h3>
      <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-2">
        <PDFDownloadLink
          document={
            <ResumePDF
              personalData={personalData}
              educationalData={educationalData}
              workData={workData}
              projectData={projectData}
              skillData={skillData}
            />
          }
          fileName="resume.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download now!"
          }
        </PDFDownloadLink>
      </button>
    </section>
  );
};

export default PDFGenerator;
