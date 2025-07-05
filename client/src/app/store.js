import { configureStore } from '@reduxjs/toolkit';
import projectReducer from '../features/project/projectSlice';

export const store = configureStore({
  reducer: {
    project: projectReducer,
  },
});
