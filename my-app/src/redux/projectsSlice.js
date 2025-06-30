import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", title: "Website Redesign" },
  { id: "2", title: "Marketing Campaign" },
];

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject: (state, action) => {
      state.push({ id: nanoid(), title: action.payload });
    },
    deleteProject: (state, action) => {
      return state.filter((project) => project.id !== action.payload);
    },
  },
});

export const { addProject, deleteProject } = projectsSlice.actions;
export default projectsSlice.reducer;
