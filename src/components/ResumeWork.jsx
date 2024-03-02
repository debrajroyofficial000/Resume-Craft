import { useTheme, useUser } from "../contexts";

function ResumeWork() {
  const { workExperienceData } = useUser();
  const { currentTheme } = useTheme();
  console.log(workExperienceData);
  return (
    <div>
      <h2 className="text-3xl font-semibold">Work Experience</h2>
      {workExperienceData.map((work) => (
        <div key={work.id} className={`${currentTheme} my-4 p-2`}>
          <h2>
            <span className="font-bold">From : </span> {work.StartYear}
            {"    "}
            <span className="font-bold">To : </span>
            {work.EndYear}
          </h2>
          <h2>
            <span className="font-bold">Organization Name :</span>{" "}
            {work.CompanyName}
          </h2>
          <h2>
            <span className="font-bold">Position :</span> {work.Position}
          </h2>
          <h2>
            <span className="font-bold">Description :</span> {work.Description}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default ResumeWork;
