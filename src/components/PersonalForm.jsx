import { useState } from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addPersonalData } from "../features/personalSlice";
const PersonalForm = () => {
  const dispatch = useDispatch();
  const [formError, setFormError] = useState({});
  const [personalData, setPersonalData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    linkedInProfile: "",
    portfolio: "",
  });

  const validateSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phoneNumber: Yup.string().matches(
      /^[0-9]{10}$/,
      "Phone number must be 10 digits"
    ),
    address: Yup.string().required("Address is required"),
    linkedInProfile: Yup.string()
      .url("Invalid URL")
      .nonNullable()
      .required("Linkedin Profile is required"),
    portfolio: Yup.string()
      .url("Invalid Url")
      .nonNullable()
      .required("Portfolio link is required"),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalData({ ...personalData, [name]: value });
  };

  const handlePersonalForm = async (e) => {
    e.preventDefault();
    try {
      await validateSchema.validate(personalData, { abortEarly: false });
      setFormError({});
      dispatch(addPersonalData(personalData));
      alert("Form has been submitted");
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
      <h3 className="text-2xl font-semibold mb-6">Personal Information</h3>
      <form onSubmit={handlePersonalForm} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            value={personalData.name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formError.name && <p className="text-red-500">{formError.name}</p>}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            value={personalData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formError.email && <p className="text-red-500">{formError.email}</p>}
        </div>
        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="text"
            name="phoneNumber"
            value={personalData.phoneNumber}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formError.phoneNumber && (
            <p className="text-red-500">{formError.phoneNumber}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            Address
          </label>
          <textarea
            name="address"
            value={personalData.address}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formError.address && (
            <p className="text-red-500">{formError.address}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="linkedInProfile"
            className="block text-sm font-medium text-gray-700"
          >
            LinkedIn Profile
          </label>
          <input
            type="url"
            name="linkedInProfile"
            value={personalData.linkedInProfile}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formError.linkedInProfile && (
            <p className="text-red-500">{formError.linkedInProfile}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="portfolio"
            className="block text-sm font-medium text-gray-700"
          >
            Portfolio
          </label>
          <input
            type="url"
            name="portfolio"
            value={personalData.portfolio}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formError.portfolio && (
            <p className="text-red-500">{formError.portfolio}</p>
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

export default PersonalForm;
