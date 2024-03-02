import { useState } from "react";
import useUser from "../contexts/UserContext/useUser";
import InputBox from "./InputBox";

function AllEducations({ data }) {
  const [educationData, setEducationData] = useState(data);
  const { userDispatch } = useUser();

  function handleEditEducation() {
    userDispatch({
      type: "editEducationExperienceData",
      payload: educationData,
    });
  }
  function handleDeleteEducation() {
    userDispatch({
      type: "deleteEducationExperienceData",
      payload: educationData,
    });
  }
  return (
    <div>
      <InputBox labelText="School Name">
        <input
          type="text"
          placeholder="xyz university"
          value={educationData.SchoolName}
          onChange={(e) =>
            setEducationData({ ...educationData, SchoolName: e.target.value })
          }
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 outline-none shadow-outline"
        />
      </InputBox>
      <InputBox labelText="Major">
        <input
          type="text"
          placeholder="CS"
          value={educationData.Major}
          onChange={(e) =>
            setEducationData({ ...educationData, Major: e.target.value })
          }
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 outline-none shadow-outline"
        />
      </InputBox>
      <InputBox labelText="Degree">
        <input
          type="text"
          placeholder="B.E."
          value={educationData.Degree}
          onChange={(e) =>
            setEducationData({ ...educationData, Degree: e.target.value })
          }
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 outline-none shadow-outline"
        />
      </InputBox>
      <InputBox labelText="Start Year">
        <input
          type="text"
          placeholder="11-10-2019"
          value={educationData.StartYear}
          onChange={(e) =>
            setEducationData({ ...educationData, StartYear: e.target.value })
          }
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 outline-none shadow-outline"
        />
      </InputBox>
      <InputBox labelText="Graduate Year">
        <input
          type="text"
          placeholder="11-10-2024"
          value={educationData.GraduateYear}
          onChange={(e) =>
            setEducationData({ ...educationData, GraduateYear: e.target.value })
          }
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 outline-none shadow-outline"
        />
      </InputBox>
      <button
        className={`bg-green-500 hover:bg-green-700
        font-bold py-2 px-4 border rounded`}
        onClick={handleEditEducation}
      >
        Edit
      </button>
      <button
        className={`bg-red-500 hover:bg-red-700
        font-bold py-2 px-4 border rounded`}
        onClick={handleDeleteEducation}
      >
        Delete
      </button>
    </div>
  );
}

export default AllEducations;
