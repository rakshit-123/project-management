import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const ProjectSchema = Yup.object().shape({
  title: Yup.string().required("Project title is required"),
});

const AddProjectForm = ({ onSubmit }) => (
  <Formik
    initialValues={{ title: "" }}
    validationSchema={ProjectSchema}
    onSubmit={(values, { resetForm }) => {
      onSubmit(values.title);
      resetForm();
    }}
  >
    {({ errors, touched }) => (
      <Form className="bg-white p-8 rounded-xl shadow-2xl border-2 border-[#17a2b8]">
        <div className="flex items-start space-x-6">
          <div className="flex-grow">
            <Field
              name="title"
              placeholder="Enter a new project title"
              className="w-full px-6 py-4 border border-[#17a2b8] rounded-full focus:outline-none focus:ring-4 focus:ring-[#17a2b8] transition-shadow duration-300 text-lg"
            />
            {errors.title && touched.title && (
              <div className="text-red-500 text-md mt-3 font-semibold">
                {errors.title}
              </div>
            )}
          </div>
          <button
            type="submit"
            className="bg-white text-[#17a2b8] font-extrabold px-8 py-4 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-[#17a2b8] focus:ring-opacity-50 transition-colors duration-300 text-lg"
          >
            Add Project
          </button>
        </div>
      </Form>
    )}
  </Formik>
);

export default AddProjectForm;
