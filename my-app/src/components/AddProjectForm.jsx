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
      <Form className="bg-white p-8 ">
        <div className="flex gap-4">
          <Field
            name="title"
            placeholder="Enter a new project title"
            className="w-[450px] px-6 py-4  p-2 "
          />
          <button type="submit" className="ml-4">
            Add Project
          </button>
        </div>
        {errors.title && touched.title && (
          <div className="text-red-500 text-md mt-3 font-semibold">
            {errors.title}
          </div>
        )}
      </Form>
    )}
  </Formik>
);

export default AddProjectForm;
