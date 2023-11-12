import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Toast } from "../utils/toast";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SetupForm: React.FC = () => {
  const navigate = useNavigate();

  const initialValues = {
    storeName: "",
    multiAdminName: "",
    multiAdminEmail: "",
    multiAdminPassword: "",

  };

  const validationSchema = Yup.object({
    storeName: Yup.string().required("Store Name is required"),
    multiAdminName: Yup.string().required("Multi-Admin Name is required"),
    multiAdminEmail: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    multiAdminPassword: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values: any, { resetForm }: any) => {
    try {
      // Make a POST request to your API
      await axios.post("http://localhost:7979/api/submit-form", values);

      // Reset the form after successful submission
      resetForm();
      alert("Your request has been received. It is currently pending payment verification. Upon successful verification, your multi-chain account will be created.");

    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle errors as needed
    } finally {
      Toast.fire({
        icon: "success",
        title: "Request submitted",
      });
      navigate("/confirm-plan")
    }
  };

  return (
    <div>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
      <div className="container mx-auto p-4 max-w-md bg-white rounded shadow-lg flex flex-col items-center mt-4 mb-4">
        <h1 className="text-xl font-semibold mb-4">DotBrand Application Setup</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="w-full">
            <div className="mb-4">
              <label
                htmlFor="storeName"
                className="block text-sm font-medium text-gray-600"
              >
                Store Name
              </label>
              <Field
                type="text"
                id="storeName"
                name="storeName"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              />
              <ErrorMessage
                name="storeName"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="multiAdminName"
                className="block text-sm font-medium text-gray-600"
              >
                Multi-Admin Name
              </label>
              <Field
                type="text"
                id="multiAdminName"
                name="multiAdminName"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              />
              <ErrorMessage
                name="multiAdminName"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="multiAdminEmail"
                className="block text-sm font-medium text-gray-600"
              >
                Multi-Admin Email
              </label>
              <Field
                type="email"
                id="multiAdminEmail"
                name="multiAdminEmail"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              />
              <ErrorMessage
                name="multiAdminEmail"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="multiAdminPassword"
                className="block text-sm font-medium text-gray-600"
              >
                Multi-Admin Password
              </label>
              <Field
                type="password"
                id="multiAdminPassword"
                name="multiAdminPassword"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              />
              <ErrorMessage
                name="multiAdminPassword"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>

            <button
              type="submit"
              className="text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center flex items-center"
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>

  );
};

export default SetupForm;
