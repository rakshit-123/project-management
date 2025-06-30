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
      <Form className="flex items-center space-x-2 mb-4">
        <Field
          name="title"
          placeholder="New Project"
          className="border p-2 rounded w-full"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>
        {errors.title && touched.title && (
          <div className="text-red-500 text-sm">{errors.title}</div>
        )}
      </Form>
    )}
  </Formik>
);

export default AddProjectForm;
