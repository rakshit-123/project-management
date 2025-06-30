import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./projectsSlice";
import tasksReducer from "./tasksSlice";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: {
    projects: projectsReducer,
    tasks: tasksReducer,
    auth: authReducer,
  },
});

export default store;
