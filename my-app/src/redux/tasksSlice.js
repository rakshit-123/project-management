import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "101",
    projectId: "1",
    status: "todo",
    description: "",
  },
  {
    id: "102",
    projectId: "1",
    status: "inprogress",
    description: "",
  },
];

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push({ id: nanoid(), ...action.payload });
    },
    deleteTask: (state, action) =>
      state.filter((task) => task.id !== action.payload),
    moveTask: (state, action) => {
      const task = state.find((t) => t.id === action.payload.id);
      if (task) task.status = action.payload.status;
    },
    updateTaskDescription: (state, action) => {
      const task = state.find((t) => t.id === action.payload.id);
      if (task) task.description = action.payload.description;
    },
  },
});

export const { addTask, deleteTask, moveTask, updateTaskDescription } =
  tasksSlice.actions;
export default tasksSlice.reducer;
