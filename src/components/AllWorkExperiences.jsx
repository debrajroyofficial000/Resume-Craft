import { useState } from "react";
import InputBox from "./InputBox";
import useUser from "../contexts/UserContext/useUser";
function AllWorkExperiences({ data }) {
  const { userDispatch } = useUser();
  const [workData, setWorkData] = useState(data);

  function handleEditWork() {
    userDispatch({ type: "editWorkExperienceData", payload: workData });
  }

  function handleDeleteWork() {
    userDispatch({ type: "deleteWorkExperienceData", payload: workData });
  }

  return (
    <div>
      <InputBox labelText="Company Name">
        <input
          type="text"
          placeholder="abcd private ltd."
          value={workData.CompanyName}
          onChange={(e) =>
            setWorkData({ ...workData, CompanyName: e.target.value })
          }
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 outline-none shadow-outline"
        />
      </InputBox>
      <InputBox labelText="Position">
        <input
          type="text"
          placeholder="Junior SDE"
          value={workData.Position}
          onChange={(e) =>
            setWorkData({ ...workData, Position: e.target.value })
          }
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 outline-none shadow-outline"
        />
      </InputBox>
      <InputBox labelText="Description">
        <input
          type="text"
          placeholder="I'm a reliable person"
          value={workData.Description}
          onChange={(e) =>
            setWorkData({ ...workData, Description: e.target.value })
          }
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 outline-none shadow-outline"
        />
      </InputBox>
      <InputBox labelText="Start Year">
        <input
          type="text"
          placeholder="12-5-2021"
          value={workData.StartYear}
          onChange={(e) =>
            setWorkData({ ...workData, StartYear: e.target.value })
          }
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 outline-none shadow-outline"
        />
      </InputBox>
      <InputBox labelText="End Year">
        <input
          type="text"
          placeholder="11-1-2025"
          value={workData.EndYear}
          onChange={(e) =>
            setWorkData({ ...workData, EndYear: e.target.value })
          }
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 outline-none shadow-outline"
        />
      </InputBox>
      <button
        className={`bg-green-500 hover:bg-green-700
        font-bold py-2 px-4 border rounded`}
        onClick={handleEditWork}
      >
        Edit
      </button>
      <button
        className={`bg-red-500 hover:bg-red-700
        font-bold py-2 px-4 border rounded`}
        onClick={handleDeleteWork}
      >
        Delete
      </button>
    </div>
  );
}

export default AllWorkExperiences;
