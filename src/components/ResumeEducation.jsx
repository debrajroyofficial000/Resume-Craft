import { useTheme, useUser } from "../contexts";

function ResumeEducation() {
  const { educationalData } = useUser();
  const { currentTheme } = useTheme();
  console.log(educationalData);
  return (
    <div>
      <h2 className="text-3xl font-semibold">Academic Qualification</h2>

      {educationalData.map((ed) => (
        <div key={ed.id} className={`${currentTheme} my-4 p-2`}>
          <h2>
            <span className="font-bold">From : </span> {ed.StartYear}
            {"    "}
            <span className="font-bold">To : </span>
            {ed.GraduateYear}
          </h2>
          <h2>
            <span className="font-bold">University Name :</span> {ed.SchoolName}
          </h2>
          <h2>
            <span className="font-bold">Major :</span> {ed.Major}
          </h2>
          <h2>
            <span className="font-bold">Degree :</span> {ed.Degree}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default ResumeEducation;
