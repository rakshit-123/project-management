import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const TaskSchema = Yup.object().shape({
  title: Yup.string().required("Task title is required"),
  status: Yup.string().required(),
});

const AddTaskForm = ({ onSubmit }) => (
  <Formik
    initialValues={{ title: "", status: "todo" }}
    validationSchema={TaskSchema}
    onSubmit={(values, { resetForm }) => {
      onSubmit(values);
      resetForm();
    }}
  >
    {({ errors, touched }) => (
      <Form className="flex flex-wrap gap-2 mb-4">
        <Field
          name="title"
          placeholder="Task title"
          className="border p-2 rounded w-full md:w-auto flex-1"
        />
        <Field as="select" name="status" className="border p-2 rounded">
          <option value="todo">To Do</option>
          <option value="inprogress">In Progress</option>
          <option value="done">Done</option>
        </Field>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add Task
        </button>
        {errors.title && touched.title && (
          <div className="text-red-500 text-sm">{errors.title}</div>
        )}
      </Form>
    )}
  </Formik>
);

export default AddTaskForm;
