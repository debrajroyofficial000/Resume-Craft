import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import InputBox from "./InputBox";
import { v4 as uuidv4 } from "uuid";

import SubmitButton from "./SubmitButton";
import useUser from "../contexts/UserContext/useUser";
import AllEducations from "./AllEducations";

function EducationForm() {
  const { educationalData, userDispatch } = useUser();
  const [toggle, setToggle] = useState(false);
  const [info, setInfo] = useState({
    id: "",
    SchoolName: "",
    Degree: "",
    Major: "",
    StartYear: "",
    GraduateYear: "",
  });

  function handleEducationalForm(e) {
    e.preventDefault();
    userDispatch({
      type: "addEducationalData",
      payload: { ...info, id: uuidv4() },
    });
    setInfo({
      id: "",
      SchoolName: "",
      Degree: "",
      Major: "",
      StartYear: "",
      GraduateYear: "",
    });
    alert("Educational Information is been submitted");
  }

  return (
    <div className="p-2">
      <div className="flex justify-between items-center my-2 ">
        <h3 className="text-2xl font-bold">Educational </h3>
        <button
          onClick={() => setToggle((prev) => !prev)}
          className="hover:bg-slate-300 p-2 rounded-full"
        >
          {!toggle ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </button>
      </div>
      <form
        onSubmit={handleEducationalForm}
        className={`${!toggle && "hidden"}`}
      >
        <InputBox labelText="School Name">
          <input
            type="text"
            placeholder="xyz university"
            value={info.SchoolName}
            onChange={(e) => setInfo({ ...info, SchoolName: e.target.value })}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 outline-none shadow-outline"
          />
        </InputBox>
        <InputBox labelText="Major">
          <input
            type="text"
            placeholder="CS"
            value={info.Major}
            onChange={(e) => setInfo({ ...info, Major: e.target.value })}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 outline-none shadow-outline"
          />
        </InputBox>
        <InputBox labelText="Degree">
          <input
            type="text"
            placeholder="B.E."
            value={info.Degree}
            onChange={(e) => setInfo({ ...info, Degree: e.target.value })}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 outline-none shadow-outline"
          />
        </InputBox>
        <InputBox labelText="Start Year">
          <input
            type="text"
            placeholder="11-10-2019"
            value={info.StartYear}
            onChange={(e) => setInfo({ ...info, StartYear: e.target.value })}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 outline-none shadow-outline"
          />
        </InputBox>
        <InputBox labelText="Graduate Year">
          <input
            type="text"
            placeholder="11-10-2024"
            value={info.GraduateYear}
            onChange={(e) => setInfo({ ...info, GraduateYear: e.target.value })}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 outline-none shadow-outline"
          />
        </InputBox>
        <SubmitButton />
      </form>
      {educationalData.map((ed) => (
        <AllEducations key={ed.id} data={ed} />
      ))}
    </div>
  );
}

export default EducationForm;
