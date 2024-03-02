import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import InputBox from "./InputBox";

import SubmitButton from "./SubmitButton";
import { useUser } from "../contexts";

function PersonalForm() {
  const { userDispatch } = useUser();
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    city: "",
  });
  const [toggle, setToggle] = useState(false);

  function handlePersonalForm(e) {
    e.preventDefault();
    userDispatch({ type: "addPersonalData", payload: info });
    alert("Personal Information is been submitted");
  }

  return (
    <div className="p-2">
      <div className="flex justify-between items-center my-2 ">
        <h3 className="text-2xl font-bold">Personal </h3>
        <button
          onClick={() => setToggle((prev) => !prev)}
          className="hover:bg-slate-300 p-2 rounded-full"
        >
          {!toggle ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </button>
      </div>
      <form onSubmit={handlePersonalForm} className={`${!toggle && "hidden"} `}>
        <InputBox labelText="Name">
          <input
            type="text"
            placeholder="username"
            value={info.name}
            onChange={(e) => setInfo({ ...info, name: e.target.value })}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 outline-none shadow-outline"
          />
        </InputBox>
        <InputBox labelText="Email">
          <input
            type="email"
            placeholder="email@gmail.com"
            value={info.email}
            onChange={(e) => setInfo({ ...info, email: e.target.value })}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 outline-none shadow-outline"
          />
        </InputBox>
        <InputBox labelText="Phone">
          <input
            type="text"
            value={info.phone}
            onChange={(e) => setInfo({ ...info, phone: e.target.value })}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 outline-none shadow-outline"
          />
        </InputBox>
        <InputBox labelText="City">
          <input
            type="text"
            placeholder="kolkata"
            value={info.city}
            onChange={(e) => setInfo({ ...info, city: e.target.value })}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 outline-none shadow-outline"
          />
        </InputBox>
        <InputBox labelText="Country">
          <input
            type="text"
            placeholder="India"
            value={info.country}
            onChange={(e) => setInfo({ ...info, country: e.target.value })}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 outline-none shadow-outline"
          />
        </InputBox>
        <SubmitButton />
      </form>
    </div>
  );
}

export default PersonalForm;
