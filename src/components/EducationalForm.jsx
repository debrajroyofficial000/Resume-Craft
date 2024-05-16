import { useState } from "react";
import * as Yup from "yup";

const EducationalForm = () => {
  const [formError, setFormError] = useState({});
  const [educationalData, setEducationalData] = useState({
    degree: "",
    fieldOfStudy: "",
    university: "",
    location: "",
    startDate: "",
    endDate: "",
  });

  const validateSchema = Yup.object({
    degree: Yup.string().required("Degree is required"),
    fieldOfStudy: Yup.string().required("Field Of Study is required"),
    university: Yup.string().required("University is required"),
    location: Yup.string().required("Location is required"),
    startDate: Yup.string().required("Start Date is required"),
    endDate: Yup.string().required("End Date is required"),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducationalData({
      ...educationalData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await validateSchema.validate(educationalData, { abortEarly: false });
      // TODO : Submit this form data to redux store
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
      <h3 className="text-2xl font-semibold mb-6">Educational Information</h3>
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="degree"
            className="block text-sm font-medium text-gray-700"
          >
            Degree
          </label>
          <input
            type="text"
            name="degree"
            value={educationalData.degree}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formError.degree && (
            <p className="text-red-500 text-sm mt-1">{formError.degree}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="fieldOfStudy"
            className="block text-sm font-medium text-gray-700"
          >
            Field of Study
          </label>
          <input
            type="text"
            name="fieldOfStudy"
            value={educationalData.fieldOfStudy}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formError.fieldOfStudy && (
            <p className="text-red-500 text-sm mt-1">
              {formError.fieldOfStudy}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="university"
            className="block text-sm font-medium text-gray-700"
          >
            University
          </label>
          <input
            type="text"
            name="university"
            value={educationalData.university}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formError.university && (
            <p className="text-red-500 text-sm mt-1">{formError.university}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700"
          >
            Location
          </label>
          <input
            type="text"
            name="location"
            value={educationalData.location}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formError.location && (
            <p className="text-red-500 text-sm mt-1">{formError.location}</p>
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
            value={educationalData.startDate}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formError.startDate && (
            <p className="text-red-500 text-sm mt-1">{formError.startDate}</p>
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
            value={educationalData.endDate}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formError.endDate && (
            <p className="text-red-500 text-sm mt-1">{formError.endDate}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default EducationalForm;
