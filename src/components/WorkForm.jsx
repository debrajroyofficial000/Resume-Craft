import { useState } from "react";
import * as Yup from "yup";

const WorkForm = () => {
  const [formError, setFormError] = useState({});
  const [jobData, setJobData] = useState([]);
  const [job, setJob] = useState({
    role: "",
    companyName: "",
    startDate: "",
    endDate: "",
    achievement: "",
    skillUsed: "",
  });

  const validationSchema = Yup.object({
    role: Yup.string().required("Role is required"),
    companyName: Yup.string().required("Company Name is required"),
    startDate: Yup.string().required("Starting Date is required"),
    endDate: Yup.string().required("Ending Date is required"),
    achievement: Yup.string().required("Achievement is required"),
    skillUsed: Yup.string().required("Skill used is required"),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob({ ...job, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await validationSchema.validate(job, { abortEarly: false });
      setJobData([...jobData, job]);
      setJob({
        role: "",
        companyName: "",
        startDate: "",
        endDate: "",
        achievement: "",
        skillUsed: "",
      });
      setFormError({});
      // TODO : Send the form data to redux store
    } catch (error) {
      const customError = {};
      error.inner.forEach((err) => {
        customError[err.path] = err.message;
      });
      setFormError(customError);
    }
  };

  return (
    <section className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h3 className="text-2xl font-semibold mb-6">Work Experience</h3>
      <form onSubmit={handleFormSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="role"
            className="block text-sm font-medium text-gray-700"
          >
            Role
          </label>
          <input
            type="text"
            name="role"
            value={job.role}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formError.role && <p className="text-red-500">{formError.role}</p>}
        </div>

        <div>
          <label
            htmlFor="companyName"
            className="block text-sm font-medium text-gray-700"
          >
            Company Name
          </label>
          <input
            type="text"
            name="companyName"
            value={job.companyName}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formError.companyName && (
            <p className="text-red-500">{formError.companyName}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="startDate"
            className="block text-sm font-medium text-gray-700"
          >
            Starting Date
          </label>
          <input
            type="date"
            name="startDate"
            value={job.startDate}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formError.startDate && (
            <p className="text-red-500">{formError.startDate}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="endDate"
            className="block text-sm font-medium text-gray-700"
          >
            Ending Date
          </label>
          <input
            type="date"
            name="endDate"
            value={job.endDate}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formError.endDate && (
            <p className="text-red-500">{formError.endDate}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="achievement"
            className="block text-sm font-medium text-gray-700"
          >
            Tell me about your achievements
          </label>
          <textarea
            name="achievement"
            value={job.achievement}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formError.achievement && (
            <p className="text-red-500">{formError.achievement}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="skillUsed"
            className="block text-sm font-medium text-gray-700"
          >
            Tell me about what skills you've used
          </label>
          <textarea
            name="skillUsed"
            value={job.skillUsed}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formError.skillUsed && (
            <p className="text-red-500">{formError.skillUsed}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>

      {jobData.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Job Experiences</h3>
          {jobData.map((job, index) => (
            <div key={index} className="p-4 border rounded-md shadow-sm mb-4">
              <h4 className="text-lg font-medium">Role: {job.role}</h4>
              <p>Company Name: {job.companyName}</p>
              <p>Start Date: {job.startDate}</p>
              <p>End Date: {job.endDate}</p>
              <p>Achievement: {job.achievement}</p>
              <p>Skill Used: {job.skillUsed}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default WorkForm;
