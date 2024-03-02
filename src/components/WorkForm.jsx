import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import SubmitButton from "./SubmitButton";
import InputBox from "./InputBox";
import useUser from "../contexts/UserContext/useUser";
import AllWorkExperiences from "./AllWorkExperiences";

function WorkForm() {
  const { workExperienceData, userDispatch } = useUser();
  const [toggle, setToggle] = useState(false);

  const [info, setInfo] = useState({
    id: "",
    CompanyName: "",
    Position: "",
    StartYear: "",
    EndYear: "",
    Description: "",
  });

  function handleWorkForm(e) {
    e.preventDefault();
    userDispatch({
      type: "addWorkExperienceData",
      payload: { ...info, id: uuidv4() },
    });
    setInfo({
      id: "",
      CompanyName: "",
      Position: "",
      StartYear: "",
      EndYear: "",
      Description: "",
    });
    alert("Work experience is been submitted");
  }

  return (
    <div className="p-2 ">
      <div className="flex justify-between items-center my-2 ">
        <h3 className="text-2xl font-bold">Work Experience </h3>
        <button
          onClick={() => setToggle((prev) => !prev)}
          className="hover:bg-slate-300 p-2 rounded-full"
        >
          {!toggle ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </button>
      </div>
      <form onSubmit={handleWorkForm} className={`${!toggle && "hidden"}`}>
        <InputBox labelText="Company Name">
          <input
            type="text"
            placeholder="abcd private ltd."
            value={info.CompanyName}
            onChange={(e) => setInfo({ ...info, CompanyName: e.target.value })}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 outline-none shadow-outline"
          />
        </InputBox>
        <InputBox labelText="Position">
          <input
            type="text"
            placeholder="Junior SDE"
            value={info.Position}
            onChange={(e) => setInfo({ ...info, Position: e.target.value })}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 outline-none shadow-outline"
          />
        </InputBox>
        <InputBox labelText="Description">
          <textarea
            placeholder="I'm a reliable person ..."
            value={info.Description}
            onChange={(e) => setInfo({ ...info, Description: e.target.value })}
            maxLength={200}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 outline-none shadow-outline"
          />
        </InputBox>
        <InputBox labelText="Start Year">
          <input
            type="text"
            placeholder="12-5-2021"
            value={info.StartYear}
            onChange={(e) => setInfo({ ...info, StartYear: e.target.value })}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 outline-none shadow-outline"
          />
        </InputBox>
        <InputBox labelText="End Year">
          <input
            type="text"
            placeholder="11-1-2025"
            value={info.EndYear}
            onChange={(e) => setInfo({ ...info, EndYear: e.target.value })}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 outline-none shadow-outline"
          />
        </InputBox>
        <SubmitButton />
      </form>
      {workExperienceData.map((exp) => (
        <AllWorkExperiences data={exp} key={exp.id} />
      ))}
    </div>
  );
}

export default WorkForm;
