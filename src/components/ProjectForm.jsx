import { useState } from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addProjectData, removeProject } from "../features/projectSlice";
import { nanoid } from "@reduxjs/toolkit";

const ProjectForm = () => {
  const dispatch = useDispatch();
  const [projectData, setProjectData] = useState([]);
  const [project, setProject] = useState({
    id: "",
    title: "",
    description: "",
    technologyUsed: "",
    link: "",
  });
  const [formError, setFormError] = useState({});

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    technologyUsed: Yup.string().required("Used Technology is required"),
    link: Yup.string().url("Invalid URL").required("Project Link is required"),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await validationSchema.validate(project, { abortEarly: false });
      setProjectData([...projectData, { ...project, id: nanoid() }]);
      setProject({
        title: "",
        description: "",
        technologyUsed: "",
        link: "",
      });
      setFormError({});
    } catch (error) {
      const customError = {};
      error.inner.forEach((err) => {
        customError[err.path] = err.message;
      });
      setFormError(customError);
    }
  };

  const handleAddSkill = () => {
    dispatch(addProjectData(projectData));
    alert("Form has been submitted");
  };

  const handleRemoveProject = (id) => {
    const updatedProject = projectData.filter((project) => project.id !== id);
    setProjectData(updatedProject);
    dispatch(removeProject(id));
  };

  return (
    <section className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h3 className="text-2xl font-semibold mb-6">Projects</h3>
      <form onSubmit={handleFormSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            value={project.title}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formError.title && <p className="text-red-500">{formError.title}</p>}
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            name="description"
            value={project.description}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formError.description && (
            <p className="text-red-500">{formError.description}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="technologyUsed"
            className="block text-sm font-medium text-gray-700"
          >
            Technology Used
          </label>
          <textarea
            name="technologyUsed"
            value={project.technologyUsed}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formError.technologyUsed && (
            <p className="text-red-500">{formError.technologyUsed}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="link"
            className="block text-sm font-medium text-gray-700"
          >
            Project Link
          </label>
          <input
            type="text"
            name="link"
            value={project.link}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formError.link && <p className="text-red-500">{formError.link}</p>}
        </div>

        <button
          type="submit"
          className=" bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add
        </button>
      </form>
      <button
        onClick={handleAddSkill}
        className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-2"
      >
        Submit
      </button>

      {projectData.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Projects</h3>
          {projectData.map((project) => (
            <div
              key={project.id}
              className="p-4 border rounded-md shadow-sm mb-4"
            >
              <h4 className="text-lg font-medium">Title: {project.title}</h4>
              <p>Description: {project.description}</p>
              <p>Technology Used: {project.technologyUsed}</p>
              <p>Project Link: {project.link}</p>
              <button
                className="bg-red-500 px-4 py-2 rounded text-white mt-2"
                onClick={() => handleRemoveProject(project.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ProjectForm;
