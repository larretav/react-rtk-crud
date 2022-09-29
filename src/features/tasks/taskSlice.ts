import { createSlice } from "@reduxjs/toolkit";

export interface Task {
  id: string,
  title: string,
  description: string,
  completed: boolean
}

const initialState: Task[] = [
  {
    id: '1',
    title: 'Tarea 1',
    description: 'Tarea 1 descripción',
    completed: false,
  },
  {
    id: '2',
    title: 'Tarea 2',
    description: 'Tarea 2 descripción',
    completed: false,
  }
];

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload)
    }
  }
});

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
