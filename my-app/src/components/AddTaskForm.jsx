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
      <Form className="bg-white p-8 rounded-xl shadow-2xl ">
        <div className="flex flex-col md:flex-row items-start md:space-x-6 space-y-6 md:space-y-0">
          <div className="flex-grow w-[200PX] ">
            <Field
              name="title"
              placeholder="Enter a new task title"
              className="w-full px-6 py-4 border border-[#17a2b8] rounded-full focus:outline-none focus:ring-4 focus:ring-[#17a2b8] transition-shadow duration-300 text-lg"
            />
            {errors.title && touched.title && (
              <div className="text-red-500 text-md mt-3 font-semibold">
                {errors.title}
              </div>
            )}
          </div>
          <Field as="select" name="status">
            <option value="todo">To Do</option>
            <option value="inprogress">In Progress</option>
            <option value="done">Done</option>
          </Field>
          <button
            type="submit"
            className="submit-btn w-[100PX] md:w-auto bg-white text-[#17a2b8] font-extrabold px-8 py-4 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-[#17a2b8] focus:ring-opacity-50 transition-colors duration-300 text-lg"
          >
            Add Task
          </button>
        </div>
      </Form>
    )}
  </Formik>
);

export default AddTaskForm;
