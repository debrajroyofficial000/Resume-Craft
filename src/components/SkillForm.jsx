import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addSkillData, removeSkill } from "../features/skillSlice";
const SkillForm = () => {
  const dispatch = useDispatch();
  const [formError, setFormError] = useState({});
  const [skill, setSkill] = useState({ id: "", skill: "" });
  const [skillData, setSkillData] = useState([]);

  const validateSchema = Yup.object({
    skill: Yup.string().required("Skill is required"),
  });

  const handleChange = (e) => {
    setSkill({ id: nanoid(), skill: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await validateSchema.validate(skill, { abortEarly: false });
      setSkillData([...skillData, skill]);
      setSkill({ id: "", skill: "" });
      setFormError({});

      // TODO : Submit this for to redux store
    } catch (error) {
      const customError = {};
      error.inner.forEach((err) => {
        customError[err.path] = err.message;
      });
      setFormError(customError);
    }
  };
  const handleAddSkills = () => {
    dispatch(addSkillData(skillData));
  };

  const handleDeleteSkill = (id) => {
    const updatedSkills = skillData.filter((skill) => skill.id !== id);
    setSkillData(updatedSkills);
    dispatch(removeSkill(id));
  };
  return (
    <section className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h3 className="text-2xl font-semibold mb-6">Skills</h3>
      <form onSubmit={handleFormSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="skill"
            className="block text-sm font-medium text-gray-700"
          >
            Skill:
          </label>
          <input
            type="text"
            name="skill"
            value={skill.skill}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formError.skill && <p className="text-red-500">{formError.skill}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add
        </button>
      </form>
      <button
        onClick={handleAddSkills}
        className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-2"
      >
        Submit
      </button>
      <section className="flex justify-start items-center gap-4">
        {skillData?.map((skill) => (
          <div
            key={skill.id}
            className="mt-4 bg-gray-100 p-4 rounded-md flex justify-center items-center gap-2"
            onClick={() => handleDeleteSkill(skill.id)}
          >
            <i className="fa-solid fa-circle-xmark"></i>
            <p>{skill.skill}</p>
          </div>
        ))}
      </section>
    </section>
  );
};

export default SkillForm;
