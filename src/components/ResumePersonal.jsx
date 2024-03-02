import { useTheme, useUser } from "../contexts";

function ResumePersonal() {
  const { personalData } = useUser();
  const { currentTheme } = useTheme();
  console.log(personalData);
  return (
    <section className="">
      <h2 className="text-3xl font-semibold">Personal Information</h2>

      <div className={`${currentTheme} p-2`}>
        <h2 className="text-3xl font-bold">{personalData.name}</h2>
        <p>
          <span className="font-bold">Email ID :</span> {personalData.email}
        </p>
        <p>
          <span className="font-bold">Phone no :</span> {personalData.phone}
        </p>
        <p>
          <span className="font-bold">City :</span> {personalData.city}
        </p>
        <p>
          <span className="font-bold">Country :</span> {personalData.country}
        </p>
      </div>
    </section>
  );
}

export default ResumePersonal;
