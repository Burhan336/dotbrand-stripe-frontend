import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const SetupForm: React.FC = () => {
  const initialValues = {
    storeName: "",
    multiAdminName: "",
    multiAdminEmail: "",
    multiAdminPassword: "",
    contact: "",
    address: "",
  };

  const validationSchema = Yup.object({
    storeName: Yup.string().required("Store Name is required"),
    multiAdminName: Yup.string().required("Multi-Admin Name is required"),
    multiAdminEmail: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    multiAdminPassword: Yup.string().required("Password is required"),
    contact: Yup.string().required("Contact is required"),
    address: Yup.string().required("Address is required"),
  });

  const handleSubmit = (values: any, { resetForm }: any) => {
    // You can handle form submission here, e.g., send the data to your server.

    // Reset the form after submission
    resetForm();
  };

  return (
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

          <div className="mb-4">
            <label
              htmlFor="contact"
              className="block text-sm font-medium text-gray-600"
            >
              Contact
            </label>
            <Field
              type="text"
              id="contact"
              name="contact"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
            <ErrorMessage
              name="contact"
              component="div"
              className="text-red-500 text-xs"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-600"
            >
              Address
            </label>
            <Field
              as="textarea"
              id="address"
              name="address"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
            <ErrorMessage
              name="address"
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
  );
};

export default SetupForm;
